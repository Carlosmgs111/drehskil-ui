import styles from "./styles.module.css";
import Head from "next/head";

export default function About() {
  return (
    <div className={styles.page}>
      <Head>
        <title>About | Drehskil UI</title>
      </Head>
      <div className={styles.content}>
        <h2>Here goes general about of project and its developer</h2>
        <section className={styles.section}>
          <h1>Sobre el Proyecto</h1>
          <span>
            🚧
            <mark>
              Nota: Esta sección está actualmente en desarrollo y construcción.
            </mark>
            🚧
          </span>
          <p>
            En esta sección, proporcionare una visión completa de este proyecto
            y los componetes que contiene, cubriendo los siguientes aspectos
            clave:
          </p>
          <ul>
            <li>
              <b>Razón de ser:</b>Explicación del propósito y la motivación
              detrás del proyecto, incluyendo los problemas que busca resolver y
              las necesidades que pretende satisfacer.
            </li>
            <li>
              <b>Métodos y eventos:</b> Descripción de nuestros objetivos a
              largo plazo, las metas que queremos alcanzar y cómo planeamos
              evolucionar el proyecto con el tiempo.
            </li>
            <li>
              <b>Información del desarrollador:</b> Detalles sobre Carlos Muñoz,
              el desarrollador principal, incluyendo su experiencia, habilidades
              y la pasión que lo impulsa a crear soluciones innovadoras.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
