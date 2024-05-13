import styles from "./styles.module.css";

export const LOADER_SIZES = {
  XS: styles.XS,
  S: styles.S,
  M: styles.M,
  L: styles.L,
  XL: styles.XL,
};

export const Loader = ({ size = styles.M, large = false }: any) => {
  return (
    <div className={`${styles.container} ${size}`}>
      <div className={`${styles.loader} ${large && styles.large}`}></div>
    </div>
  );
};
