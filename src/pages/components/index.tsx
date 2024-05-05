import Head from "next/head";
import styles from "./styles.module.css";
import { useStateValue } from "@/context";
import { MultiSidebar } from "@/components/Sidebars/MultiSidebar";
import { PanelSidebar } from "@/components/Sidebars/PanelSidebar";
import { useTrackSidebar } from "@/hooks/useTrackSidebar";
import { LogoSVG } from "@/icons/LogoSVG";

export default function Components() {
  const [{}]: any = useStateValue();
  const { TrackSidebar, ContentWrapper } = useTrackSidebar();

  return (
    <div className={styles.page}>
      <Head>
        <title>Components</title>
      </Head>
      <main>
        <MultiSidebar sidebars={[<TrackSidebar key={0} />]}>
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
