import Head from "next/head";
import styles from "./styles.module.css";
import { useStateValue } from "@/context";
import { MultiSidebar } from "@/components/Sidebars/MultiSidebar";
import { PanelSidebar, innerItems } from "@/components/Sidebars/PanelSidebar";
import { useTrackSidebar } from "@/hooks/useTrackSidebar";
import { LogoSVG } from "@/icons/LogoSVG";
import { DrehskilUILogoSVG } from "@/icons/DrehskilUILogoSVG";

export default function Components() {
  const [{}]: any = useStateValue();
  const { TrackSidebar, ContentWrapper } = useTrackSidebar();
  const panelSidebarItems: any = [
    {
      innerItem: innerItems.InnerItem,
      className: "fa-solid fa-plus",
      content: "Agregar Proyecto",
    },
  ];

  return (
    <div className={styles.page}>
      <Head>
        <title>Components</title>
      </Head>
      <main>
        <MultiSidebar
          width={"240px"}
          float={false}
          sidebars={[
            <TrackSidebar showButton={false} id={"tracksidebar"} key={0} />,
            <PanelSidebar
              id={"panelsidebar"}
              key={1}
              {...{
                items: panelSidebarItems,
              }}
            />,
          ]}
        >
          <div className={styles.content}>
            <ContentWrapper>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i: any) => (
                <div
                  key={i}
                  className={styles.component_presentation}
                  id={"hola" + i}
                >
                  <DrehskilUILogoSVG />
                </div>
              ))}
            </ContentWrapper>
          </div>
        </MultiSidebar>
      </main>
    </div>
  );
}
