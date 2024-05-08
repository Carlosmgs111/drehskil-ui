import styles from "./styles.module.css";
import Head from "next/head";

export default function About() {
  return (
    <div className={styles.page}>
      <Head>
        <title>About | Drehskil UI</title>
      </Head>
      <div>ABOUT</div>
    </div>
  );
}
