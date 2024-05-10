import { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { DrehskilUILogoSVG } from "@/icons/DrehskilUILogoSVG";
import NextLink from "next/link";
import { MemoizedComponent } from "@/components/MemoizedComponent";
export const ComponentPresentation = ({
  title,
  summary,
  video_demo_url,
  reference,
}: any) => {
  const videoRef = useRef(null);
  useEffect(() => {}, []);
  return (
    <div className={styles.container}>
      {video_demo_url ? (
        <div className={styles.content}>
          <h3>{title}</h3>
          <video ref={videoRef} autoPlay muted loop playsInline>
            <source src={video_demo_url} type="video/mp4" />
          </video>
          <p>{summary}</p>
        </div>
      ) : (
        <DrehskilUILogoSVG />
      )}
      <NextLink href={reference}></NextLink>
    </div>
  );
};
