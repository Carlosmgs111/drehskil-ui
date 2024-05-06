import * as React from "react";
import { SVGProps } from "react";
import styles from "./styles.module.css";
import { SVGContainer } from "./SVGContainer";
export const DrehskilUILogoSVG = (props: SVGProps<SVGSVGElement>) => (
  <SVGContainer {...props}>
    <svg
      className={styles.svg}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      {...props}
    >
      <defs>
        <linearGradient
          id="a"
          x1={26.619}
          x2={61.533}
          y1={102.76}
          y2={102.76}
          gradientTransform="matrix(-1.4317 -.00491 .00264 -1.3012 87.141 283.65)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.14} stopColor="#1cefff" />
          <stop offset={0.5} stopColor="#00d0e5" />
          <stop offset={0.886} stopColor="#00a6c0" />
        </linearGradient>
        <linearGradient
          id="b"
          x1={68.509}
          x2={298.94}
          y1={149.74}
          y2={149.74}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.108} stopColor="#1cefff" />
          <stop offset={0.461} stopColor="#00d0e5" />
          <stop offset={0.933} stopColor="#00a6c0" />
        </linearGradient>
      </defs>
      <path
        stroke="url(#a)"
        strokeLinecap="round"
        strokeWidth={46.907}
        d="m24.515 241.51-.413-183.56"
      />
      <path
        fill="none"
        stroke="url(#b)"
        strokeLinecap="round"
        strokeWidth={46.225}
        d="m92.456 242.38 101.08-.135m-2.784-185.24c111.84-1.934 115.08 183.49-.229 185.48m5.389-185.37-104.29.374"
        style={{
          mixBlendMode: "normal",
        }}
        transform="translate(.73)"
      />
    </svg>
  </SVGContainer>
);
