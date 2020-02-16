import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

export const defaultRouteContext = {
  goBack: () => {},
  history: [],
  page: "home",
  setPage: () => {}
};

const RouteContext = createContext(defaultRouteContext);

export const useRouter = () => useContext(RouteContext);

const getRoute = (page, routeDefinition) => {
  return routeDefinition[page] || routeDefinition.home;
};

const setUrl = page => {
  document.title = `Ü | ${page}`;
  window.history.pushState({ pageTitle: document.title }, "", `/${page}`);
};

const getPath = () => {
  return window.location.pathname.replace("/", "") || "home";
};

export const RouteProvider = ({ children, routeDefinition }) => {
  const [page, setPage] = useState(getPath());
  const [history, setHistory] = useState([]);

  const handleSetPage = nextPage => {
    setHistory([...history, page]);
    setPage(nextPage);
    setUrl(nextPage);
  };

  const handleGoBack = () => {
    if (history.length > 0) {
      const lastPage = history[history.length - 1];
      setPage(lastPage);
      setHistory(history.slice(0, history.length - 1));
      setUrl(lastPage);
    } else {
      setPage("home");
      setUrl("home");
    }
  };

  const route = getRoute(page, routeDefinition);

  const context = {
    ...route,
    goBack: handleGoBack,
    history,
    page,
    setPage: handleSetPage
  };

  return (
    <RouteContext.Provider value={context}>{children}</RouteContext.Provider>
  );
};

RouteProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired,
  routeDefinition: PropTypes.shape
};
