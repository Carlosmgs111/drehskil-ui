import Head from "next/head";
import styles from "./styles.module.css";
import { useStateValue } from "@/context";
import { MultiSidebar } from "@/components/Sidebars/MultiSidebar";
import { PanelSidebar, innerItems } from "@/components/Sidebars/PanelSidebar";
import { useTrackSidebar } from "@/hooks/useTrackSidebar";
import { ComponentPresentation } from "@/containers/ComponentPresentation";
import componentsCatalog from "../../db/components-catalog.json";

export default function Components() {
  const [{}]: any = useStateValue();
  const { components } = componentsCatalog;
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
        <title>Components | Drehskil UI</title>
      </Head>
      <main>
        <MultiSidebar
          width={"240px"}
          float={false}
          multi={false}
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
              {components.map((component, index) => (
                <ComponentPresentation
                  key={index}
                  {...{ ...component, id: component.title }}
                />
              ))}
            </ContentWrapper>
          </div>
        </MultiSidebar>
      </main>
    </div>
  );
}
