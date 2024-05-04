import { AppProps } from "next/app";
import { Navbar } from "@components/Navbar";
import { setActions } from "@utils";
import { StateProvider, useStateValue } from "@context";
import Head from "next/head";
import "../styles.css";

const initialState = {
  currentLang: "es",
  sidebarFloat: true,
};

export const actionTypes: any = setActions([], initialState);
const reducer = (state: any, action: any) => {
  const { payload, type } = action;
  const actions = {
    [actionTypes.setCurrentLang]: { ...state, currentLang: payload },
    [actionTypes.setSidebarFloat]: { ...state, sidebarFloat: payload },
    [actionTypes.reset]: {
      ...state,
      ...initialState,
    },
  };
  return actions[type] || state;
};

const Wrapper = ({ children }: any) => {
  const [{ currentLang }]: any = useStateValue();

  const references: any = {
    components: "Components",
    "api-doc": "Api Documentation",
  };

  return (
    <>
      <Navbar references={references} />
      {children}
    </>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StateProvider {...{ initialState, reducer }}>
      <Head>
        <title>Drehskil UI</title>
      </Head>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </StateProvider>
  );
}
