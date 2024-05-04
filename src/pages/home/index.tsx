import { Hero } from "@/components/Hero";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
    </div>
  );
}
