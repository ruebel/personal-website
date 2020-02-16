import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Back from "./Back";
import Knockout from "./Knockout";
import Page from "./Page";
import Video from "./Video";
import { useRouter } from "./RouteContext";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const App = () => {
  const { Component, page } = useRouter();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setTimeout(() => setExpanded(true), 1000);
  });

  return (
    <Page>
      <Video src="bg.mp4" />
      <Wrapper>
        <Knockout>
          {expanded && page !== "home" && <Back />}
          {expanded ? <Component /> : <div>Ü</div>}
        </Knockout>
      </Wrapper>
    </Page>
  );
};

export default App;
