"use server";

export type ContactField =
  | "name"
  | "email"
  | "organization"
  | "organizationType"
  | "projectType"
  | "timeline"
  | "message";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<ContactField, string>>;
};

const organizationTypes = new Set([
  "",
  "School or district",
  "Public organization",
  "Civic entity",
  "Nonprofit or foundation",
  "Small business",
  "Other",
]);

const projectTypes = new Set([
  "Brand identity",
  "Print or environmental design",
  "Photography",
  "Website or digital design",
  "Ongoing creative support",
  "Other",
  "Not sure yet",
]);

const timelines = new Set([
  "",
  "As soon as possible",
  "Within 1–2 months",
  "Within 3–6 months",
  "More than 6 months",
  "Still planning",
]);

function getField(formData: FormData, field: string) {
  const value = formData.get(field);
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function submitContactForm(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const honeypot = getField(formData, "website");

  if (honeypot) {
    return {
      status: "success",
      message: "Thanks—your project inquiry has been received.",
    };
  }

  const name = getField(formData, "name");
  const email = getField(formData, "email");
  const organization = getField(formData, "organization");
  const organizationType = getField(formData, "organizationType");
  const projectType = getField(formData, "projectType");
  const timeline = getField(formData, "timeline");
  const message = getField(formData, "message");
  const errors: Partial<Record<ContactField, string>> = {};

  if (name.length < 2 || name.length > 100) {
    errors.name = "Please enter your name.";
  }

  if (
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    errors.email = "Please enter a valid email address.";
  }

  if (organization.length < 2 || organization.length > 140) {
    errors.organization = "Please enter your organization’s name.";
  }

  if (!organizationTypes.has(organizationType)) {
    errors.organizationType = "Please select a valid organization type.";
  }

  if (!projectTypes.has(projectType)) {
    errors.projectType = "Please select the closest project type.";
  }

  if (!timelines.has(timeline)) {
    errors.timeline = "Please select a valid timeline.";
  }

  if (message.length < 20 || message.length > 5000) {
    errors.message =
      "Please share at least a few sentences about the project.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please review the highlighted fields.",
      errors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    console.error(
      "Contact form email delivery is not configured. Set RESEND_API_KEY, CONTACT_TO_EMAIL, and CONTACT_FROM_EMAIL.",
    );

    return {
      status: "error",
      message:
        "The contact form is still being connected. Please try again later.",
    };
  }

  const optionalDetail = (label: string, value: string) =>
    value ? `${label}: ${value}\n` : "";
  const text = [
    `New project inquiry from ${name}`,
    "",
    `Email: ${email}`,
    `Organization: ${organization}`,
    optionalDetail("Organization type", organizationType).trimEnd(),
    `Project type: ${projectType}`,
    optionalDetail("Timeline", timeline).trimEnd(),
    "",
    "Project details:",
    message,
  ]
    .filter((line) => line !== "")
    .join("\n");

  const detailRow = (label: string, value: string) =>
    value
      ? `<tr><td style="padding:8px 16px 8px 0;color:#58625d;vertical-align:top">${escapeHtml(label)}</td><td style="padding:8px 0;color:#17251f">${escapeHtml(value)}</td></tr>`
      : "";
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;color:#17251f">
      <p style="font-size:12px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#6db2ab">C208 Design</p>
      <h1 style="font-size:28px;line-height:1.2;font-weight:500">New project inquiry</h1>
      <table style="width:100%;border-collapse:collapse;margin:24px 0">
        ${detailRow("Name", name)}
        ${detailRow("Email", email)}
        ${detailRow("Organization", organization)}
        ${detailRow("Organization type", organizationType)}
        ${detailRow("Project type", projectType)}
        ${detailRow("Timeline", timeline)}
      </table>
      <div style="padding:20px;border-radius:16px;background:#f5f0e7">
        <p style="margin:0 0 10px;font-weight:700">Project details</p>
        <p style="margin:0;white-space:pre-wrap;line-height:1.6">${escapeHtml(message)}</p>
      </div>
    </div>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": crypto.randomUUID(),
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `New C208 inquiry — ${organization}`,
        text,
        html,
      }),
    });

    if (!response.ok) {
      console.error(
        "Resend contact form request failed.",
        response.status,
        await response.text(),
      );

      return {
        status: "error",
        message:
          "The message could not be sent right now. Please try again shortly.",
      };
    }
  } catch (error) {
    console.error("Contact form request failed.", error);

    return {
      status: "error",
      message:
        "The message could not be sent right now. Please try again shortly.",
    };
  }

  return {
    status: "success",
    message:
      "Thank you—your inquiry is on its way. C208 Design will follow up soon.",
  };
}
