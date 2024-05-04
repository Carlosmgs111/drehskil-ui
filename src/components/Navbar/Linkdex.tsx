import NextLink from "next/link";
import styles from "./styles.module.css";
import { usePathname } from "next/navigation";

export const Linkdex = ({ label, linkRef, children, to, className="" }: any) => {
  const pathName = usePathname();
  const isCurrent = pathName.replace("/", "") === to;
  return (
    <NextLink
      ref={linkRef}
      className={`${styles.link} ${className} ${isCurrent ? styles.current : null}`}
      id={`link_${label}`}
      href={to || `${label}`}
      key={label}
    >
      {children || <span>{label}</span>}
    </NextLink>
  );
};
