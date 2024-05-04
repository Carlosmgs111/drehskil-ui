import Head from "next/head";
import styles from "./styles.module.css";
import { useStateValue } from "@/context";

export default function Components() {
  const [{}]: any = useStateValue();

  return (
    <div>
      <Head>
        <title>Components</title>
      </Head>
      COMPONENTS
    </div>
  );
}
