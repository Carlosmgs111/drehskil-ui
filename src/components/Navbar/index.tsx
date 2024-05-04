import styles from "./styles.module.css";
import { Mapfy } from "@utils";
import { Linkdex } from "./Linkdex";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { LogoSVG } from "@/icons/LogoSVG";

export function Navbar({ references }: any): any {
  const indicatorRef: any = useRef(null);
  const links: any = [];
  const delayTime = 500;
  const referencesRefs: any = useRef({});
  const pathName = usePathname();
  references &&
    Mapfy(references).forEach((label: any, referencedTo: string) => {
      referencesRefs.current[referencedTo] = { current: null };
      const linkRef = referencesRefs.current[referencedTo];
      links.push(
        <Linkdex
          key={referencedTo}
          {...{ label, linkRef, to: referencedTo }}
        ></Linkdex>
      );
    });
  useEffect(() => {
    if (!referencesRefs.current[pathName.replace("/", "")]) {
      indicatorRef.current.style.scale = "0";
      return;
    }
    const { offsetLeft, offsetWidth } =
      referencesRefs.current[pathName.replace("/", "")].current;
    indicatorRef.current.style.scale = "1";
    indicatorRef.current.style.left = `${offsetLeft}px`;
    indicatorRef.current.style.width = `${offsetWidth}px`;
  }, [pathName]);

  return (
    <div className={styles.sticky_container}>
      <section className={styles.navbar_section}>
        <Linkdex className={styles.logo_container} to={"/"}>
          <LogoSVG {...{ width: "4rem", height: "4rem" }} />
        </Linkdex>
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
      </section>
    </div>
  );
}
