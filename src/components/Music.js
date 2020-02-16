import React from "react";
import NavLink from "./NavLink";
import Wide from "./Wide";

const Music = () => {
  return (
    <div>
      <NavLink href="http://huntedhorse.com">
        <Wide noAnimation>{["HUNTED HORSE"]}</Wide>
      </NavLink>
      <NavLink to="dewey">
        <Wide noAnimation>{["DEWEY DECIBEL"]}</Wide>
      </NavLink>
    </div>
  );
};

export default Music;
