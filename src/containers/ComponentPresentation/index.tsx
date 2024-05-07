import { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { DrehskilUILogoSVG } from "@/icons/DrehskilUILogoSVG";
export const ComponentPresentation = ({
  title,
  summary,
  video,
  to,
  children,
}: any) => {
  const videoRef = useRef(null);
  useEffect(() => {}, []);
  return (
    <div className={styles.container}>
      {video ? (
        <video ref={videoRef} width="100%" autoPlay muted loop>
          <source src="videos/track-sidebar-demo.mp4" type="video/mp4" />
        </video>
      ) : (
        <DrehskilUILogoSVG />
      )}
    </div>
  );
};
