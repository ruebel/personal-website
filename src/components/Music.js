import React from "react";
import NavLink from "./NavLink";
import Wide from "./Wide";

const Music = () => {
  return (
    <div>
      <NavLink href="https://open.spotify.com/artist/7n1WpwSggZpIEceQPJWHCF?si=DGI8urfbT0qQXCKCzuZ57w">
        <Wide noAnimation>{["QUICK COUCH"]}</Wide>
      </NavLink>
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
