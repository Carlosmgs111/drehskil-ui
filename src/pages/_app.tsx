import { AppProps } from "next/app";
import { Navbar } from "@components/Navbar";
import { setActions } from "@utils";
import { StateProvider, useStateValue } from "@context";

const initialState = {
  currentLang: "es",
  sidebarFloat: true,
};

const actionTypes: any = setActions(["setAuth", "setLoading"], initialState);
const reducer = (state: any, action: any) => {
  const { payload, type } = action;
  const actions = {
    [actionTypes.setAuth]: {
      ...state,
      ...payload,
    },
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
    components: "components",
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
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </StateProvider>
  );
}
