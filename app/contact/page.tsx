import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ScrollMotion from "@/components/ui/ScrollMotion";
import ContactForm from "./ContactForm";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a branding, design, photography, or digital project with C208 Design.",
};

export default function ContactPage() {
  return (
    <ScrollMotion className={styles.page}>
      <section className={styles.hero}>
        <Container>
          <div
            className={styles.heroContent}
            data-reveal
            data-parallax="0.025"
          >
            <p className={styles.eyebrow}>Start a project</p>
            <h1>Let’s make something your community is proud to represent.</h1>
            <p className={styles.heroCopy}>
              Tell me about your organization, what you are hoping to create,
              and where you are in the process. We can begin with a rough idea
              and shape the details together.
            </p>
          </div>
        </Container>
      </section>

      <section className={styles.formSection}>
        <Container>
          <div className={styles.formLayout} data-reveal-group>
            <aside
              className={styles.formIntro}
              data-reveal
              data-parallax="0.018"
            >
              <p className={styles.eyebrow}>A thoughtful first step</p>
              <h2>Share what you’re working toward.</h2>
              <p>
                You do not need a finished brief. A little context about the
                audience, goals, and timing will help make the first
                conversation useful.
              </p>

              <ol className={styles.processList}>
                <li>
                  <span aria-hidden="true">01</span>
                  <div>
                    <strong>Send an inquiry</strong>
                    <p>Share the essentials using the form.</p>
                  </div>
                </li>
                <li>
                  <span aria-hidden="true">02</span>
                  <div>
                    <strong>Receive a response</strong>
                    <p>I’ll review the details and follow up by email.</p>
                  </div>
                </li>
                <li>
                  <span aria-hidden="true">03</span>
                  <div>
                    <strong>Clarify the scope</strong>
                    <p>We’ll discuss goals, timing, deliverables, and fit.</p>
                  </div>
                </li>
              </ol>
            </aside>

            <div className={styles.formPanel} data-reveal>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </ScrollMotion>
  );
}
