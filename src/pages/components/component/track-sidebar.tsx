import ComponentsPage from "../index";
import { ComponentPage } from "@/containers/ComponentPage";
import { useTrackSidebar } from "@/hooks/useTrackSidebar";
import { NextjsSVG, AxiosSVG, ReactSVG, TypeScriptSVG, HTMLSVG, CSSSVG } from "@/icons";

export default function TrackSidebar() {
  const { TrackSidebar, ContentWrapper } = useTrackSidebar();
  const techs = [
    {
      title: "Next JS Framework",
      summary: "A frontend framework based at React library.",
      icon: <NextjsSVG key={"next"} />,
    },
    {
      title: "Axios Library",
      summary: "Library to do fetch, both synchcronous also asynchcronous.",
      icon: <AxiosSVG key={"_axios"} />,
    },
    {
      title: "React Library",
      summary: "Library to make UI components and visual interfaces.",
      icon: <ReactSVG key={"react"} />,
    },
    {
      title: "Typescript lang",
      summary: "The typed version of javascrip programming language.",
      icon: <TypeScriptSVG key={"typescript"} />,
    },
    {
      title: "HTML lang",
      summary: "The markup language for web.",
      icon: <HTMLSVG key={"_html"} />,
    },
    {
      title: "CSS lang",
      summary: "The style sheet language for web.",
      icon: <CSSSVG key={"_css"} />,
    },
  ];
  const Container = ({ title, summary, children }: any) => {
    return (
      <div
        style={{
          width: "calc(100% - 4rem - 0.8rem)",
          height: "fit-content",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          alignItems: "center",
          fontSize: "2rem",
          padding: "2rem",
          border: "solid 2px var(--main-color-700)",
          marginTop: "4rem",
          borderRadius: "2rem",
        }}
      >
        <h5>{title}</h5>
        <div>{children}</div>
        <p>{summary}</p>
      </div>
    );
  };
  return (
    <ComponentsPage componentId="track-sidebar">
      <ComponentPage>
        <div
          style={{
            width: "100%",
            height: "44rem",
            display: "flex",
            overflowY: "scroll",
            scrollBehavior: "smooth",
          }}
        >
          <div
            style={{ width: "20rem", position: "sticky", top: "0", left: "0" }}
          >
            <TrackSidebar></TrackSidebar>
          </div>
          <div style={{ width: "100%" }}>
            <ContentWrapper>
              {techs.map(({ summary, title, icon }: any, index: any) => (
                <Container id={title} key={index} {...{ summary, title }}>
                  {icon}
                </Container>
              ))}
            </ContentWrapper>
          </div>
        </div>
      </ComponentPage>
    </ComponentsPage>
  );
}
