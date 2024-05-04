import styles from "./styles.module.css";
export const SVGContainer = ({
  children,
  width = "8rem",
  height = "8rem",
}: any) => (
  <div style={{ width, height }} className={styles.svg_container}>
    {children}
  </div>
);
