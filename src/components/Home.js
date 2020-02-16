import React from "react";
import NavLink from "./NavLink";
import Wide from "./Wide";

const Home = () => {
  return (
    <div>
      <Wide>{["RANDY", "RANDALL"]}</Wide>
      <Wide>{["UEBEL", "ÜBEL"]}</Wide>
      <NavLink href="https://github.com/ruebel">
        <Wide>{["code", "github"]}</Wide>
      </NavLink>
      <NavLink href="https://www.linkedin.com/in/randy-uebel-06b7145b">
        <Wide>{["resume", "linkedin"]}</Wide>
      </NavLink>
      <NavLink to="music">
        <Wide>{["music", "noise"]}</Wide>
      </NavLink>
    </div>
  );
};

export default Home;
