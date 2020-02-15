import React from "react";
import NavLink from "./NavLink";
import PageLink from "./PageLink";
import Wide from "./Wide";

const Music = () => {
  return (
    <div>
      <NavLink to="http://huntedhorse.com">
        <Wide noAnimation>{["Hunted Horse"]}</Wide>
      </NavLink>
      <PageLink to="dewey">
        <Wide noAnimation>{["Dewey Decibel"]}</Wide>
      </PageLink>
    </div>
  );
};

export default Music;
