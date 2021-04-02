import React from "react";
import styled from "styled-components";

import Gallery from "./Gallery";
import Player from "./Player";
import Wide from "./Wide";

const SideBySide = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;

  @media (max-width: ${p => p.theme.deviceWidth.largePhone}) {
    grid-template-columns: none;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-gap: 10px;
`;

const clientId = "ca1f6b04464964bb9ed82eaa129f5cc7";

const Dewey = () => {
  return (
    <Wrapper>
      <Wide noAnimation>{["Dewey Decibel"]}</Wide>
      <Wide noAnimation isSmall>
        {["The Dusting"]}
      </Wide>
      <SideBySide>
        <Gallery srcs={["dustingCover.jpg", "dustingBack.jpg"]} />
        <Player
          clientId={clientId}
          resolveUrl="https://soundcloud.com/user-981664689/sets/the-dusting/s-y9fVY"
        />
      </SideBySide>
    </Wrapper>
  );
};

export default Dewey;
