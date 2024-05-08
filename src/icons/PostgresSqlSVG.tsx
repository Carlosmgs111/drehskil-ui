import * as React from "react";
import { SVGProps } from "react";
import styles from "./styles.module.css";
import { SVGContainer } from "./SVGContainer";
export const PostgresSqlSVG = (props: SVGProps<SVGSVGElement>) => (
  <SVGContainer>
    <svg
      className={`${styles.svg} ${styles.postgresql}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <title>{"PostgreSQL"}</title>
      <path d="M23.56 14.723a.527.527 0 0 0-.057-.12c-.139-.262-.477-.341-1.007-.231-1.654.34-2.294.13-2.526-.02 1.342-2.048 2.445-4.522 3.041-6.83.272-1.05.798-3.523.122-4.73a1.564 1.564 0 0 0-.15-.236C21.692.91 19.8.025 17.51.001c-1.495-.016-2.77.346-3.116.479a9.449 9.449 0 0 0-.516-.082 8.044 8.044 0 0 0-1.312-.127c-1.182-.019-2.203.264-3.05.84C8.66.79 4.729-.534 2.296 1.19.935 2.153.309 3.873.43 6.304c.041.818.507 3.334 1.243 5.744.46 1.506.938 2.702 1.433 3.582.553.994 1.126 1.593 1.714 1.79.448.148 1.133.143 1.858-.729a55.982 55.982 0 0 1 1.945-2.206c.435.235.906.362 1.39.377a.057.057 0 0 0 0 .004 11.031 11.031 0 0 0-.247.305c-.339.43-.41.52-1.5.745-.31.064-1.134.233-1.146.811a.591.591 0 0 0 .091.327c.227.423.922.61 1.015.633 1.335.333 2.505.092 3.372-.679-.017 2.231.077 4.418.345 5.088.221.553.762 1.904 2.47 1.904.25 0 .526-.03.829-.094 1.782-.382 2.556-1.17 2.855-2.906.15-.87.402-2.875.539-4.101.017-.07.036-.12.057-.136 0 0 .07-.048.427.03a.367.367 0 0 0 .044.007l.254.022.015.001c.847.039 1.911-.142 2.531-.43.644-.3 1.806-1.033 1.595-1.67zM2.37 11.876c-.744-2.435-1.178-4.885-1.212-5.571-.109-2.172.417-3.683 1.562-4.493 1.837-1.299 4.84-.54 6.108-.13l-.01.01C6.795 3.734 6.843 7.226 6.85 7.44c0 .082.006.199.016.36.034.586.1 1.68-.074 2.918-.16 1.15.194 2.276.973 3.089.08.084.165.163.252.237-.347.371-1.1 1.193-1.903 2.158-.568.682-.96.551-1.088.508-.392-.13-.813-.587-1.239-1.322-.48-.839-.963-2.032-1.415-3.512zm6.007 5.088a1.626 1.626 0 0 1-.432-.178c.089-.039.237-.09.483-.14 1.284-.265 1.482-.451 1.915-1 .099-.127.211-.27.367-.443a.355.355 0 0 0 .074-.13c.17-.151.272-.11.436-.042.156.065.308.26.37.475.03.102.062.295-.045.445-.904 1.266-2.222 1.25-3.168 1.013zm2.094-3.988-.052.14c-.133.357-.257.689-.334 1.004-.667-.002-1.317-.288-1.81-.803-.628-.655-.913-1.566-.783-2.5.183-1.308.116-2.447.08-3.059l-.013-.22c.296-.262 1.666-.996 2.643-.772.446.102.718.406.83.928.585 2.704.078 3.83-.33 4.736a8.784 8.784 0 0 0-.23.546zm7.364 4.572c-.017.177-.036.376-.062.596l-.146.438a.355.355 0 0 0-.018.108c-.006.475-.054.649-.115.87-.064.229-.135.488-.18 1.057-.11 1.414-.878 2.227-2.417 2.556-1.515.325-1.784-.496-2.02-1.221a6.582 6.582 0 0 0-.078-.227c-.215-.586-.19-1.412-.157-2.555.016-.561-.025-1.901-.33-2.646.004-.293.01-.591.019-.892a.353.353 0 0 0-.016-.113 1.493 1.493 0 0 0-.044-.208c-.122-.428-.42-.786-.78-.935-.142-.059-.403-.167-.717-.087.067-.276.183-.587.309-.925l.053-.142c.06-.16.134-.325.213-.5.426-.948 1.01-2.246.376-5.178-.237-1.098-1.03-1.634-2.232-1.51-.72.075-1.38.366-1.709.532a5.672 5.672 0 0 0-.196.104c.092-1.106.439-3.174 1.736-4.482a4.03 4.03 0 0 1 .303-.276.353.353 0 0 0 .145-.064c.752-.57 1.695-.85 2.802-.833.41.007.802.034 1.174.081 1.94.355 3.244 1.447 4.036 2.383.814.962 1.255 1.931 1.431 2.454-1.323-.134-2.223.127-2.68.78-.992 1.418.544 4.172 1.282 5.496.135.242.252.452.289.54.24.583.551.972.778 1.256.07.087.138.171.189.245-.4.116-1.12.383-1.055 1.717-.013.156-.043.447-.084.815-.046.208-.07.46-.1.766zm.89-1.621c-.04-.832.27-.919.597-1.01a2.857 2.857 0 0 0 .135-.041 1.202 1.202 0 0 0 .134.103c.57.376 1.583.421 3.007.134-.202.177-.519.4-.953.601-.41.19-1.096.333-1.747.364-.72.034-1.086-.08-1.173-.151zm.57-9.271c-.006.35-.054.669-.105 1.001-.055.358-.112.728-.127 1.177-.014.436.04.89.093 1.33.107.887.216 1.8-.207 2.701a3.527 3.527 0 0 1-.188-.385 7.57 7.57 0 0 0-.325-.617c-.616-1.104-2.057-3.69-1.32-4.744.38-.543 1.342-.566 2.179-.463zm.228 7.013a12.376 12.376 0 0 0-.085-.107l-.035-.044c.726-1.2.584-2.387.457-3.439-.052-.432-.1-.84-.088-1.222.013-.407.066-.755.118-1.092.064-.415.13-.844.111-1.35a.559.559 0 0 0 .012-.19c-.046-.486-.6-1.938-1.73-3.253a7.803 7.803 0 0 0-2.688-2.04A9.251 9.251 0 0 1 17.62.746c2.052.046 3.675.814 4.824 2.283a.908.908 0 0 1 .067.1c.723 1.356-.276 6.275-2.987 10.54zm-8.816-6.116c-.025.18-.31.423-.621.423a.582.582 0 0 1-.081-.006.797.797 0 0 1-.506-.315c-.046-.06-.12-.178-.106-.285a.223.223 0 0 1 .093-.149c.118-.089.352-.122.61-.086.316.044.642.193.61.418zm7.93-.411c.011.08-.049.2-.153.31a.722.722 0 0 1-.408.223.546.546 0 0 1-.075.005c-.293 0-.541-.234-.56-.371-.024-.177.264-.31.56-.352.298-.042.612.009.636.185z" />
    </svg>
  </SVGContainer>
);
