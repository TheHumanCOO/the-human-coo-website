import { ArrowRight, Check, CircleDot } from "lucide-react";
import type { BusinessClarityReport } from "../lib/business-clarity-report";
import styles from "../app/report/report.module.css";

const categoryLabels = {
  visibility: "Visibility",
  customerFollowUp: "Customer Follow-Up",
  process: "Process",
  capacity: "Capacity",
} as const;

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
}

export function BusinessClarityReportView({
  report,
  isExample = false,
}: {
  report: BusinessClarityReport;
  isExample?: boolean;
}) {
  const scores = Object.entries(report.scores) as Array<
    [keyof typeof categoryLabels, number]
  >;
  const highestScore = Math.max(...scores.map(([, score]) => score), 1);

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a href="/" aria-label="The Human COO home">
          <img
            src="/human-coo-logo.png"
            alt="The Human COO"
            width={2000}
            height={620}
          />
        </a>
        <span>{isExample ? "Example report" : "Business Clarity Check"}</span>
      </header>

      <article className={styles.report}>
        <section className={styles.hero}>
          <div>
            <p className={styles.eyebrow}>
              <CircleDot size={14} /> Your Business Clarity Summary
            </p>
            <h1>
              Hello {report.recipientName}, here is what your answers are telling us.
            </h1>
            {report.businessName && (
              <p className={styles.businessName}>{report.businessName}</p>
            )}
          </div>
          <div className={styles.resultCard}>
            <span>Primary area to focus on</span>
            <strong>{report.primaryCategory}</strong>
            <p>{report.headline}</p>
          </div>
        </section>

        <section className={styles.scoreSection}>
          <div className={styles.sectionIntro}>
            <p className={styles.kicker}>Your four areas</p>
            <h2>A clear view of where attention will make the biggest difference.</h2>
          </div>
          <div className={styles.scoreGrid}>
            {scores.map(([key, score]) => {
              const width = `${Math.max(8, Math.round((score / highestScore) * 100))}%`;
              const isPrimary = categoryLabels[key] === report.primaryCategory;

              return (
                <div className={styles.scoreCard} key={key}>
                  <div>
                    <span>{categoryLabels[key]}</span>
                    {isPrimary && <small>Primary focus</small>}
                  </div>
                  <div className={styles.scoreTrack} aria-hidden="true">
                    <span style={{ width }} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div className={styles.contentGrid}>
          <section className={styles.contentCard}>
            <p className={styles.kicker}>What stood out</p>
            <h2>The pattern behind the day-to-day pressure.</h2>
            <p>{report.whatStoodOut}</p>
          </section>

          <section className={`${styles.contentCard} ${styles.focusCard}`}>
            <p className={styles.kicker}>What I would focus on first</p>
            <h2>Start here.</h2>
            <p>{report.focusFirst}</p>
          </section>
        </div>

        <section className={styles.stepsSection}>
          <div className={styles.sectionIntro}>
            <p className={styles.kicker}>Practical next steps</p>
            <h2>A manageable place to begin.</h2>
          </div>
          <ol>
            {report.nextSteps.map((step, index) => (
              <li key={`${index}-${step}`}>
                <span>{index + 1}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.notYetSection}>
          <div className={styles.notYetMark}>Not yet</div>
          <div>
            <p className={styles.kicker}>What not to overcomplicate yet</p>
            <h2>The simplest useful change comes first.</h2>
            <p>{report.dontOvercomplicate}</p>
          </div>
        </section>

        <section className={styles.supportSection}>
          <div>
            <p className={styles.kicker}>What support may suit you</p>
            <h2>You do not have to work it all out alone.</h2>
            <p>{report.supportMaySuit}</p>
            <p className={styles.noObligation}>
              There is no obligation to work with me afterwards.
            </p>
          </div>
          <a
            href="https://calendly.com/hello-thehumancoo/business-clarity-session-30-minutes-60"
            target="_blank"
            rel="noreferrer"
          >
            Book my £60 Business Clarity Session <ArrowRight size={18} />
          </a>
        </section>

        <footer className={styles.footer}>
          <span><Check size={15} /> Prepared by The Human COO</span>
          <span>{formatDate(report.createdAt)}</span>
        </footer>
      </article>
    </main>
  );
}
