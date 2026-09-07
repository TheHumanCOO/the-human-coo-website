import styles from "../report.module.css";

export default function ReportNotFound() {
  return (
    <main className={styles.missingPage}>
      <img src="/human-coo-logo.png" alt="The Human COO" width={2000} height={620} />
      <div>
        <p>Business Clarity Summary</p>
        <h1>This report link is not available.</h1>
        <span>
          It may have expired or the address may be incomplete. Email{" "}
          <a href="mailto:hello@thehumancoo.com">hello@thehumancoo.com</a> and I will help.
        </span>
      </div>
    </main>
  );
}
