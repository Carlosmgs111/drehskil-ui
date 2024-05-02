import NextLink from "next/link";
import styles from "./styles.module.css";

export const Linkdex = ({ label, linkRef }: any) => {
  return (
    <NextLink
      ref={linkRef}
      className={styles.link}
      id={`link_${label}`}
      href={`${label}`}
      key={label}
    >
      <span>{label}</span>
    </NextLink>
  );
};
