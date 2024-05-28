import Head from "next/head";
import styles from "./styles.module.css";

export default function Laboratory() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Laboratory | Drehskil UI</title>
      </Head>
      <div>Laboratory</div>
    </div>
  );
}
