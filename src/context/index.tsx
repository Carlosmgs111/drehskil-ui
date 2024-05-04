import React, {
  createContext,
  useContext,
  useReducer,
  Children,
  cloneElement,
  act,
} from "react";

export const StateContext: any = createContext(null);
export const StateProvider = ({
  reducer,
  initialState,
  children,
}: any) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children
        ? Children.toArray(children).map((child: any) =>
            cloneElement(child, { withcontext: "true" })
          )
        : null}
    </StateContext.Provider>
  );
};
export const useStateValue = () => useContext(StateContext);
