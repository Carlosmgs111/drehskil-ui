import ComponentsPage from "./index";
import { ComponentPage } from "@/containers/ComponentPage";
import { Modal } from "@components/Modal";
import { useState } from "react";

export default function OmniModal() {
  const [currentModal, setCurrentModal]: any = useState();
  const [valueA, setValueA] = useState("Drehskil UI");
  const [valueB, setValueB] = useState("Omni Modal");
  const images = [
    "https://www.shutterstock.com/image-illustration/dramatic-clouds-pattern-on-hill-600nw-1625948488.jpg",
    "https://www.shutterstock.com/image-illustration/beautiful-rural-village-mountain-nature-600nw-1797138253.jpg",
    "https://www.shutterstock.com/image-illustration/artwork-grassy-summer-field-600nw-2206027475.jpg",
  ];
  const formTemplate = ({ value, onChange }: any) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        flexWrap: "wrap",
        border: "solid black 1px",
        padding: "1.2rem",
        borderRadius: "0.8rem",
      }}
    >
      <button
        style={{
          padding: "1rem",
          fontSize: "2rem",
          borderRadius: ".8rem",
          border: "none",
          outline: "none",
          color: "black",
          background:
            "radial-gradient(circle at 80% 20%, var(--main-color-900), var(--main-color-700), var(--main-color-500))",
          fontFamily: "Rubik",
          cursor: "pointer",
        }}
        onClick={() =>
          setCurrentModal(
            <div>
              <div
                style={{
                  width: "fit-content",
                  height: "fit-content",
                  display: "flex",
                  padding: "4rem",
                  fontSize: "3.2rem",
                  backgroundColor: "var(--main-color-300)",
                  color: "black",
                  borderRadius: "2rem",
                }}
              >
                <span>
                  🎉 <br />
                  Haz Escrito: <br />
                  <span style={{ fontSize: "4rem" }}>{value}</span>
                </span>
              </div>
            </div>
          )
        }
      >
        Show Modal
      </button>
      <input
        type="text"
        value={value}
        onChange={onChange}
        style={{
          padding: "1rem",
          outline: "none",
          border: "none",
          borderRadius: "2rem",
        }}
      />
    </div>
  );
  return (
    <ComponentsPage componentId="omni-modal">
      <ComponentPage>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "8rem",
          }}
        >
          <Modal setInjected={setCurrentModal}>{currentModal}</Modal>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "4rem",
              flexWrap: "wrap",
            }}
          >
            {formTemplate({
              onChange: (e: any) => setValueA(e.target.value),
              value: valueA,
            })}
            {images.map((image, index) => (
              <div
                key={index}
                style={{
                  background: `url(${image})`,
                  minWidth: "22rem",
                  minHeight: "12rem",
                  maxWidth: "26rem",
                  maxHeight: "22rem",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  borderRadius: "0.8rem",
                  cursor: "pointer",
                }}
                onClick={() =>
                  setCurrentModal(<img alt="one pic" width={600} src={image} />)
                }
              ></div>
            ))}

            {formTemplate({
              onChange: (e: any) => setValueB(e.target.value),
              value: valueB,
            })}
          </div>
        </div>
      </ComponentPage>
    </ComponentsPage>
  );
}
