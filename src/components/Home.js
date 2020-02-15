import React from "react";
import NavLink from "./NavLink";
import PageLink from "./PageLink";
import Wide from "./Wide";

const Home = () => {
  return (
    <div>
      <Wide>{["RANDY", "RANDALL"]}</Wide>
      <Wide>{["UEBEL", "ÜBEL"]}</Wide>
      <NavLink to="https://github.com/ruebel">
        <Wide>{["code", "github"]}</Wide>
      </NavLink>
      <NavLink to="https://www.linkedin.com/in/randy-uebel-06b7145b">
        <Wide>{["resume", "linkedin"]}</Wide>
      </NavLink>
      <PageLink to="music">
        <Wide>{["music", "noise"]}</Wide>
      </PageLink>
    </div>
  );
};

export default Home;
