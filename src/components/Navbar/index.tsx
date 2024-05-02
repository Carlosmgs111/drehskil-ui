import styles from "./styles.module.css";
import { useStateValue } from "@context";
import { Mapfy, mapToList } from "@utils";
import { Linkdex } from "./Linkdex";
import { useEffect, useRef, useState } from "react";

export function Navbar({ references }: any): any {
  const [{ token }, dispatch]: any = useStateValue();
  const indicatorRef: any = useRef(null);
  const links: any = [];
  const [currentSection, setCurrentSection] = useState();
  const delayTime = 500;
  const referencesRefs: any = useRef([]);
  references &&
    mapToList(references).forEach((label: any, index: string) => {
      referencesRefs.current[index] = { current: null };
      const linkRef = referencesRefs.current[index];
      links.push(<Linkdex {...{ key: index, label, linkRef }}></Linkdex>);
    });

  useEffect(() => {
    if (indicatorRef.current && !currentSection)
      indicatorRef.current.style.opacity = 0;
    if (indicatorRef.current && currentSection)
      indicatorRef.current.style.opacity = 1;
  }, [currentSection]);

  return (
    <div className={styles.fixed_container}>
      <div className={styles.navbar_section}>
        <div className={styles.navbar_container}>
          <nav id="navbar" className={styles.navbar}>
            <span
              ref={indicatorRef}
              id="navbar_indicator"
              className={styles.indicator}
            ></span>
            {links}
          </nav>
        </div>
      </div>
    </div>
  );
}
