import Head from "next/head";
import styles from "./styles.module.css";
import { useStateValue } from "@/context";
import { MultiSidebar } from "@/components/Sidebars/MultiSidebar";
import { PanelSidebar, innerItems } from "@/components/Sidebars/PanelSidebar";
import { useTrackSidebar } from "@/hooks/useTrackSidebar";
import { ComponentPresentation } from "@/containers/ComponentPresentation";
import componentsCatalogES from "../../db/components-catalog-ES.json";
import { cloneElement } from "react";
import { labelCases, mapToList } from "@/utils";
import { MemoizedComponent } from "@/components/MemoizedComponent";

export default function Components({ children, componentId = "" }: any) {
  const [{}]: any = useStateValue();
  const { TrackSidebar, ContentWrapper } = useTrackSidebar();
  const panelSidebarItems: any = [
    {
      innerItem: innerItems.InnerItem,
      className: "",
      content: "🎉",
    },
  ];
  const components: any = componentsCatalogES;

  const composedTitle = `${
    componentId &&
    String(componentId)
      .split("-")
      .map((c: any) => labelCases(c).CS)
      .join(" ") + " | "
  }Components | Drehskil UI`;

  return (
    <div className={styles.page}>
      <Head>
        <title>{composedTitle}</title>
      </Head>
      <main>
        <MultiSidebar
          width={"240px"}
          float={false}
          multi={false}
          sidebars={[
            <TrackSidebar
              redirect={"components"}
              // showbutton={0}
              id={"tracksidebar"}
              key={0}
            />,
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
            {children && cloneElement(children, { ...components[componentId] })}
            <ContentWrapper display={!children}>
              {mapToList(components).map((component: any, index: any) => (
                <MemoizedComponent
                  deps={[component]}
                  key={index}
                  id={component.title}
                >
                  <ComponentPresentation {...{ ...component }} />
                </MemoizedComponent>
              ))}
            </ContentWrapper>
          </div>
        </MultiSidebar>
      </main>
    </div>
  );
}
