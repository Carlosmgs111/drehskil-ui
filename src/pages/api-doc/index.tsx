import Head from "next/head";
import styles from "./styles.module.css";

export default function ApiDocs() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Api Documents | Drehskil UI</title>
      </Head>
      <div>API DOCS</div>
    </div>
  );
}
