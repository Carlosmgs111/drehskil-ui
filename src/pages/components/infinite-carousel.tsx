import ComponentsPage from "./index";
import { ComponentPage } from "@/containers/ComponentPage";
import { Slider } from "../../components/Slider";
import {
  JestSVG,
  ReactSVG,
  StyledComponentsSVG,
  NextjsSVG,
  ReactRouterSVG,
  WebpackSVG,
  AxiosSVG,
  MongodbSVG,
  PostgresSqlSVG,
  ExpressSVG,
  SequelizeSVG,
  MongooseSVG,
  CSSSVG,
  HTMLSVG,
} from "@/icons";

export default function InfiniteCarousel() {
  return (
    <ComponentsPage
      componentId="infinite-carousel"
    >
      <ComponentPage>
        <div style={{ width: "180%" }}>
          <Slider>
            <JestSVG />
            <ReactSVG />
            <StyledComponentsSVG />
            <NextjsSVG />
            <ReactRouterSVG />
            <WebpackSVG />
            <AxiosSVG />
          </Slider>
          <Slider toRight={true}>
            <MongodbSVG />
            <PostgresSqlSVG />
            <ExpressSVG />
            <SequelizeSVG />
            <MongooseSVG />
            <CSSSVG />
            <HTMLSVG />
          </Slider>
        </div>
      </ComponentPage>
    </ComponentsPage>
  );
}
