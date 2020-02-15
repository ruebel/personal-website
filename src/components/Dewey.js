import React from "react";
import Player from "./Player";
import Wide from "./Wide";

const clientId = "ca1f6b04464964bb9ed82eaa129f5cc7";

const Dewey = () => {
  return (
    <div>
      <Wide noAnimation>{["Dewey Decibel"]}</Wide>
      <Wide noAnimation isSmall>
        {["The Dusting"]}
      </Wide>
      <Player
        clientId={clientId}
        resolveUrl="https://soundcloud.com/user-981664689/sets/the-dusting/s-y9fVY"
      />
    </div>
  );
};

export default Dewey;
