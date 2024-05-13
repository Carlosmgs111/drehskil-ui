import ComponentsPage from "../index";
import { ComponentPage } from "@/containers/ComponentPage";
import { Loader, LOADER_SIZES } from "@/components/Loader";

export default function LoaderPage() {
  return (
    <ComponentsPage componentId="loader">
      <ComponentPage>
        <div
          style={{
            display: "flex",
            gap: "4rem",
            padding: " 8rem 4rem",
            height: "10rem",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
          >
            <Loader size={LOADER_SIZES.XS}></Loader>
            <span>XS</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
          >
            <Loader size={LOADER_SIZES.S}></Loader>
            <span>S</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
          >
            <Loader size={LOADER_SIZES.M}></Loader>
            <span>M</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
          >
            <Loader size={LOADER_SIZES.L}></Loader>
            <span>L</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
          >
            <Loader size={LOADER_SIZES.XL}></Loader>
            <span>XL</span>
          </div>
        </div>
      </ComponentPage>
    </ComponentsPage>
  );
}
