import Head from "next/head";
import styles from "./styles.module.css";

export default function ApiDocs() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Api Documents | Drehskil UI</title>
      </Head>
      <div className={styles.content}>
        <h2>Here goes general API especifications</h2>
        <section className={styles.section}>
          <h1>Especificaciones de Implementación</h1>
          <span>
            🚧
            <mark>
              Nota: Esta sección está actualmente en desarrollo y construcción.
            </mark>
            🚧
          </span>
          <p>
            En esta sección, proporcionare detalles exhaustivos sobre la
            implementación de los componentes aqui contenidos. Cada componente
            será analizado en profundidad, cubriendo aspectos como:
          </p>
          <ul>
            <li>
              <b>Propiedades y estados:</b> Descripción de todas las propiedades
              y estados que cada componente puede manejar.
            </li>
            <li>
              <b>Métodos y eventos:</b> Explicación de los métodos disponibles y
              los eventos que los componentes pueden emitir.
            </li>
            <li>
              <b>Integración:</b> Guía paso a paso sobre cómo integrar cada
              componente en su proyecto.
            </li>
            <li>
              <b>Ejemplos de uso:</b> Código de ejemplo para ilustrar cómo
              utilizar los componentes en diversos contextos.
            </li>
            <li>
              <b>Mejores prácticas:</b> Recomendaciones para optimizar el uso y
              rendimiento de los componentes.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
