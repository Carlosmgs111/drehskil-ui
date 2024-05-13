import ComponentsPage from "../index";
import { ComponentPage } from "@/containers/ComponentPage";
import { Typing } from "@/components/Typing";

export default function TypingSimulator() {
  const mySkills = [
    { content: "Aplicaciones", color: "#61DAFB" },
    {
      content: "Paginas",
      color: "#339933",
    },
    { content: "Plataformas", color: "#E34F26" },
    {
      content: "Interacciones",
      color: "#3776ab",
    },
    { content: "Experiencias", color: "#4169E1" },
  ];
  const myStacks = [
    {
      content: "Stateless",
      color: "#E34F26",
    },
    {
      content: "Stateful",
      color: "#61dafb",
    },
    {
      content: "Responsivos",
      color: "#e0234e",
    },
    {
      content: "Dinamicos",
      color: "#E10098",
    },
  ];
  return (
    <ComponentsPage componentId="typing-simulator">
      <ComponentPage>
        <div style={{ textAlign: "left", fontSize: "3.2rem" }}>
          <h1
            style={{ padding: "0 2rem 0 0", margin: "0", fontSize: "3.2rem" }}
          >
            Con Dreshkil UI puedes usar...
          </h1>
          <p
            style={{
              display: "inline-flex",
              fontSize: "3.2rem",
              margin: "0",
              gap: "1rem",
            }}
          >
            Componentes
            <Typing
              baseTiming={3.8}
              words={myStacks}
              fontSize={"3.2rem"}
            ></Typing>
          </p>
          <br />
          <p
            style={{ display: "inline-flex", fontSize: "3.2rem", margin: "0" }}
          >
            Y crear...
          </p>
          <br />
          <p
            style={{
              display: "inline-flex",
              fontSize: "3.2rem",
              margin: "0",
              gap: "1rem",
            }}
          >
            <Typing
              baseTiming={4.8}
              words={mySkills}
              fontSize={"3.2rem"}
              text={"Webs"}
            ></Typing>
          </p>
        </div>
      </ComponentPage>
    </ComponentsPage>
  );
}
