"use client";

import { useActionState, useEffect, useRef } from "react";
import {
  initialContactFormState,
  submitContactForm,
} from "./actions";
import styles from "./contact.module.css";

const organizationTypes = [
  "School or district",
  "Public organization",
  "Civic entity",
  "Nonprofit or foundation",
  "Small business",
  "Other",
];

const projectTypes = [
  "Brand identity",
  "Print or environmental design",
  "Photography",
  "Website or digital design",
  "Ongoing creative support",
  "Other",
  "Not sure yet",
];

const timelines = [
  "As soon as possible",
  "Within 1–2 months",
  "Within 3–6 months",
  "More than 6 months",
  "Still planning",
];

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialContactFormState,
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <form ref={formRef} action={formAction} className={styles.form}>
      <div className={styles.formHeading}>
        <p className={styles.eyebrow}>Project inquiry</p>
        <h2>Tell me a little about what you have in mind.</h2>
        <p>
          A rough idea is enough to begin. Required fields are marked with an
          asterisk.
        </p>
      </div>

      <div className={styles.fieldGrid}>
        <Field
          error={state.errors?.name}
          id="name"
          label="Your name"
          required
        >
          <input
            autoComplete="name"
            id="name"
            name="name"
            required
            type="text"
            aria-invalid={Boolean(state.errors?.name)}
            aria-describedby={state.errors?.name ? "name-error" : undefined}
          />
        </Field>

        <Field
          error={state.errors?.email}
          id="email"
          label="Email address"
          required
        >
          <input
            autoComplete="email"
            id="email"
            name="email"
            required
            type="email"
            aria-invalid={Boolean(state.errors?.email)}
            aria-describedby={state.errors?.email ? "email-error" : undefined}
          />
        </Field>

        <Field
          error={state.errors?.organization}
          id="organization"
          label="Organization"
          required
        >
          <input
            autoComplete="organization"
            id="organization"
            name="organization"
            required
            type="text"
            aria-invalid={Boolean(state.errors?.organization)}
            aria-describedby={
              state.errors?.organization ? "organization-error" : undefined
            }
          />
        </Field>

        <Field
          error={state.errors?.organizationType}
          id="organizationType"
          label="Organization type"
        >
          <select
            defaultValue=""
            id="organizationType"
            name="organizationType"
            aria-invalid={Boolean(state.errors?.organizationType)}
            aria-describedby={
              state.errors?.organizationType
                ? "organizationType-error"
                : undefined
            }
          >
            <option value="">Select one</option>
            {organizationTypes.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field
          error={state.errors?.projectType}
          id="projectType"
          label="What can I help with?"
          required
        >
          <select
            defaultValue=""
            id="projectType"
            name="projectType"
            required
            aria-invalid={Boolean(state.errors?.projectType)}
            aria-describedby={
              state.errors?.projectType ? "projectType-error" : undefined
            }
          >
            <option disabled value="">
              Select the closest match
            </option>
            {projectTypes.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field
          error={state.errors?.timeline}
          id="timeline"
          label="Ideal timing"
        >
          <select
            defaultValue=""
            id="timeline"
            name="timeline"
            aria-invalid={Boolean(state.errors?.timeline)}
            aria-describedby={
              state.errors?.timeline ? "timeline-error" : undefined
            }
          >
            <option value="">Select one</option>
            {timelines.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field
        error={state.errors?.message}
        id="message"
        label="Project details"
        required
      >
        <textarea
          id="message"
          name="message"
          placeholder="What are you hoping to create? Who is it for? Are there any dates, procurement requirements, or existing materials I should know about?"
          required
          rows={7}
          aria-invalid={Boolean(state.errors?.message)}
          aria-describedby={
            state.errors?.message ? "message-error" : undefined
          }
        />
      </Field>

      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          autoComplete="off"
          id="website"
          name="website"
          tabIndex={-1}
          type="text"
        />
      </div>

      <div className={styles.formFooter}>
        <p>
          Your information is used only to respond to this project inquiry.
        </p>
        <button disabled={pending} type="submit">
          {pending ? "Sending…" : "Send inquiry"}
          {!pending && <span aria-hidden="true">→</span>}
        </button>
      </div>

      <p
        className={`${styles.formStatus} ${
          state.status === "success" ? styles.formStatusSuccess : ""
        }`}
        aria-live="polite"
      >
        {state.message}
      </p>
    </form>
  );
}

function Field({
  children,
  error,
  id,
  label,
  required = false,
}: {
  children: React.ReactNode;
  error?: string;
  id: string;
  label: string;
  required?: boolean;
}) {
  return (
    <div className={styles.field}>
      <label htmlFor={id}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      {children}
      {error && (
        <p className={styles.fieldError} id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}
