import { createContext, useContext } from "react";

export const defaultRouteContext = {
  goBack: () => {},
  history: [],
  page: "home",
  setPage: () => {}
};

const RouteContext = createContext(defaultRouteContext);

export const useRouteContext = () => useContext(RouteContext);

export const RouteProvider = RouteContext.Provider;
