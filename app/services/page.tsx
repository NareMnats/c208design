import type { Metadata } from "next";
import Link from "next/link";
import styles from "./working-together.module.css";

export const metadata: Metadata = {
  title: "Working Together",
  description:
    "Learn how C208 Design partners with schools, public agencies, foundations, and community-focused organizations.",
};

const audiences = [
  "Public School Districts",
  "Private Schools",
  "Civic Organizations",
  "Foundations",
  "Public Entities",
];

const sharedCommitments = [
  {
    title: "Clear communication",
    description:
      "Projects begin with a shared understanding of the audience, goals, scope, timeline, and decision-making process.",
  },
  {
    title: "Thoughtful collaboration",
    description:
      "C208 Design works closely with project leads and stakeholders while keeping feedback organized and actionable.",
  },
  {
    title: "Privacy-conscious practices",
    description:
      "Confidential information and student-related materials are handled carefully throughout the project.",
  },
  {
    title: "Practical delivery",
    description:
      "Final files are prepared for their intended use, whether they will be printed, published online, presented, or maintained internally.",
  },
];

const insuranceItems = [
  {
    title: "General Liability Insurance",
    description:
      "Coverage for third-party bodily injury and property damage associated with contracted work.",
  },
  {
    title: "Professional Liability",
    description:
      "Errors and omissions coverage related to professional design and consulting services.",
  },
  {
    title: "Cyber Liability",
    description:
      "Coverage supporting digital risk management when project work involves files, systems, or online collaboration.",
  },
  {
    title: "Workers’ Compensation",
    description:
      "C208 Design is a sole proprietorship with no employees, so workers’ compensation coverage is generally not required.",
  },
  {
    title: "Automobile Coverage",
    description:
      "C208 Design maintains personal automobile coverage for occasional travel to school sites. Commercial auto requirements may be reviewed with district procurement based on the scope of work.",
  },
];

const onboardingSteps = [
  ["Reach out", "Use the contact form to introduce the project and organization."],
  ["Discuss the scope", "We clarify goals, deliverables, timeline, and procurement needs."],
  ["Send vendor forms", "After C208 Design responds, the district may provide its vendor registration packet."],
  ["Receive documentation", "C208 Design supplies a completed W-9 with EIN and other requested materials."],
  ["Issue the PO", "Once onboarding is complete, the district may issue a purchase order and work can begin."],
];

const paymentMethods = ["ACH / EFT", "Check", "PO Billing"];

export default function WorkingTogetherPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.shell}>
          <p className={styles.eyebrow}>C208 Design</p>
          <h1 className="display-heading">Working Together</h1>
          <p className={styles.heroCopy}>
            Every organization works differently. C208 Design builds clear,
            practical partnerships with schools, public agencies, foundations,
            and community-focused organizations.
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.audienceSection}`}>
        <div className={styles.shell}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Who we work with</p>
            <h2>Designed for organizations that serve people.</h2>
            <p>
              C208 Design works with organizations of different sizes,
              structures, and procurement needs.
            </p>
          </div>

          <div className={styles.audienceGrid}>
            {audiences.map((audience) => (
              <article className={styles.audienceCard} key={audience}>
                <span>{audience}</span>
              </article>
            ))}
            <article className={`${styles.audienceCard} ${styles.audienceCardAlt}`}>
              <span>Don’t See Your Organization Listed?</span>
              <p>
                We welcome inquiries from any and all community-serving
                organizations.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.commitmentSection}`}>
        <div className={styles.shell}>
          <div className={styles.sectionIntroCompact}>
            <p className={styles.eyebrow}>Every partnership</p>
            <h2>A thoughtful process, regardless of organization type.</h2>
          </div>

          <div className={styles.commitmentGrid}>
            {sharedCommitments.map((item) => (
              <article className={styles.commitmentCard} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.districtSection}`}>
        <div className={styles.shell}>
          <div className={styles.districtHeading}>
            <div>
              <p className={styles.eyebrow}>For public school districts</p>
              <h2>Prepared for procurement and vendor onboarding.</h2>
            </div>
            <p>
              District insurance and documentation requirements vary. C208
              Design is prepared to work through those requirements with the
              appropriate procurement or risk-management contact.
            </p>
          </div>

          <div className={styles.subsection}>
            <div className={styles.subsectionHeading}>
              <h3>Insurance coverage</h3>
              <p>
                The following coverage and business-status information can be
                discussed during onboarding.
              </p>
            </div>

            <div className={styles.insuranceGrid}>
              {insuranceItems.map((item) => (
                <article className={styles.insuranceCard} key={item.title}>
                  <div className={styles.insuranceMarker} aria-hidden="true" />
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <p className={styles.note}>
              Final coverage requirements are determined by each district and
              may involve discussion with its procurement director or risk
              management office.
            </p>
          </div>

          <div className={styles.subsection}>
            <div className={styles.subsectionHeading}>
              <h3>Vendor onboarding</h3>
              <p>A straightforward path from initial inquiry to project start.</p>
            </div>

            <ol className={styles.steps}>
              {onboardingSteps.map(([title, description]) => (
                <li key={title}>
                  <div>
                    <h4>{title}</h4>
                    <p>{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className={styles.paymentPanel}>
            <div>
              <p className={styles.eyebrow}>Payment</p>
              <h3>District-friendly payment options</h3>
              <p>
                C208 Design accepts the following payment methods. Credit card
                payments are not currently accepted.
              </p>
            </div>
            <div className={styles.paymentChips}>
              {paymentMethods.map((method) => (
                <span key={method}>{method}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.privacySection}`}>
        <div className={styles.shell}>
          <div className={styles.privacyStatement}>
            <p className={styles.eyebrow}>Privacy and confidentiality</p>
            <h2>Protecting students and organizational information.</h2>
            <p>
              Privacy-conscious practices apply to every client, not only
              public school districts.
            </p>
          </div>

          <div className={styles.privacyCards}>
            <article>
              <h3>Student photography</h3>
              <p>
                Students will not be photographed as part of project work
                unless photography is specifically requested, appropriately
                authorized, and coordinated by the client organization.
              </p>
            </article>
            <article>
              <h3>Student data</h3>
              <p>
                C208 Design holds student privacy to a high standard and follows
                applicable FERPA, COPPA, and student data privacy requirements
                based on the project scope.
              </p>
            </article>
            <article>
              <h3>Data agreements</h3>
              <p>
                When a project requires access to protected information, C208
                Design can review and complete an appropriate Data Use Agreement
                or related district documentation.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.shell}>
          <div className={styles.ctaPanel}>
            <div>
              <p className={styles.eyebrow}>Have a project in mind?</p>
              <h2>Let’s talk.</h2>
              <p>
                Use the contact form to share a little about your organization,
                project, and timeline. Vendor registration materials can be
                exchanged after the initial response.
              </p>
            </div>
            <Link className={styles.ctaButton} href="/contact">
              Let’s talk <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
