import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Back from "./Back";
import Dewey from "./Dewey";
import Home from "./Home";
import Knockout from "./Knockout";
import Music from "./Music";
import Page from "./Page";
import Video from "./Video";
import { RouteProvider } from "./RouteContext";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const getPage = page => {
  switch (page) {
    case "dewey":
      return Dewey;
    case "music":
      return Music;
    default:
      return Home;
  }
};

const App = () => {
  const [expanded, setExpanded] = useState(false);
  const [page, setPage] = useState("home");
  const [history, setHistory] = useState([]);

  const handleSetPage = nextPage => {
    setHistory([...history, page]);
    setPage(nextPage);
  };

  const handleGoBack = () => {
    if (history.length > 0) {
      setPage(history[history.length - 1]);
      setHistory(history.slice(0, history.length - 1));
    }
  };

  useEffect(() => {
    setTimeout(() => setExpanded(true), 1000);
  });

  const CurrentPage = getPage(page);

  return (
    <RouteProvider
      value={{ goBack: handleGoBack, history, page, setPage: handleSetPage }}
    >
      <Page>
        <Video src="bg.mp4" />
        <Wrapper>
          <Knockout>
            {page !== "home" && <Back />}
            {expanded ? <CurrentPage setPage={setPage} /> : <div>Ü</div>}
          </Knockout>
        </Wrapper>
      </Page>
    </RouteProvider>
  );
};

export default App;
