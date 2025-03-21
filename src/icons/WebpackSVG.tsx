import * as React from "react";
import { SVGProps } from "react";
import styles from "./styles.module.css";
import { SVGContainer } from "./SVGContainer";
export const WebpackSVG = (props: SVGProps<SVGSVGElement>) => (
  <SVGContainer>
    <svg
      className={`${styles.svg} ${styles.webpack}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <title>{"Webpack"}</title>
      <path d="M22.199 18.498 12.429 24v-4.285l6.087-3.334 3.683 2.117zm.668-.603V6.388l-3.575 2.055v7.396zm-21.066.603L11.571 24v-4.285L5.484 16.38l-3.683 2.117zm-.668-.603V6.388l3.575 2.055v7.396zm.418-12.251L11.571 0v4.143L5.152 7.66l-.049.028zm20.898 0L12.429 0v4.143l6.419 3.516.049.028 3.552-2.043zM11.57 18.74l-6.005-3.287V8.938l6.005 3.453v6.349zm.858 0 6.005-3.287V8.938l-6.005 3.453zM5.972 8.185l6.03-3.302 6.028 3.301-6.029 3.467z" />
    </svg>
  </SVGContainer>
);
