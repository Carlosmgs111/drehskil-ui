import Head from "next/head";
import styles from "./styles.module.css";
import { useStateValue } from "@/context";
import { MultiSidebar } from "@/components/Sidebars/MultiSidebar";
import { PanelSidebar, innerItems } from "@/components/Sidebars/PanelSidebar";
import { useTrackSidebar } from "@/hooks/useTrackSidebar";
import { LogoSVG } from "@/icons/LogoSVG";

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
          sidebars={[
            <TrackSidebar id={"tracksidebar"} key={0} />,
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
              <div id={"hola"}>
                <LogoSVG />
              </div>
            </ContentWrapper>
          </div>
        </MultiSidebar>
      </main>
    </div>
  );
}
