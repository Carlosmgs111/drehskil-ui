import Head from "next/head";
import styles from "./styles.module.css";

export default function Laboratory() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Laboratory | Drehskil UI</title>
      </Head>
      <div className={styles.content}>
        <h2>Here goes general laboratory and tests section</h2>
        <section className={styles.section}>
          <h1>Área de Pruebas Interactivas</h1>
          <span>
            🚧
            <mark>
              Nota: Esta sección está actualmente en desarrollo y construcción.
            </mark>
            🚧
          </span>
          <p>
            En esta sección, ofrecere un entorno controlado donde podrás
            experimentar directamente con los componentes personalizados. Con
            esta herramienta, podrás:
          </p>
          <ul>
            <li>
              <b>Interacción directa:</b> Probar los componentes en tiempo real,
              viendo cómo responden a diferentes ajustes y configuraciones.
            </li>
            <li>
              <b>Interacción directa:</b> Modificar las propiedades y estados de
              los componentes para observar cambios en su comportamiento y
              apariencia.
            </li>
            <li>
              <b>Entorno seguro:</b> Ganar una comprensión más profunda de cómo
              funcionan los componentes y cómo se pueden optimizar para
              diferentes escenarios de uso.
            </li>
            <li>
              <b>Aprendizaje práctico:</b> Código de ejemplo para ilustrar cómo
              utilizar los componentes en diversos contextos.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
