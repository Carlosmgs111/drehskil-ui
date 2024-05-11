import styles from "./styles.module.css";

export const ComponentPage = ({ title, summary, children }: any) => {
  return (
    <div className={styles.page}>
      <h1>{title}</h1>
      <div className={styles.live_demo}>{children}</div>
      <p className={styles.summary}>{summary}</p>
    </div>
  );
};
