import React from 'react';
import styled from 'styled-components';
// import BigTitle from './BigTitle';
import Knockout from './Knockout';
import NavLink from './NavLink';
import Page from './Page';
import Wide from './Wide';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Home = () => {
  return (
    <Page>
      <Wrapper>
        <Knockout src="bg.gif">
          <Wide>RANDY</Wide>
          <Wide>UEBEL</Wide>
          <NavLink to="https://github.com/ruebel">
            <Wide>code</Wide>
          </NavLink>
          <NavLink to="https://www.linkedin.com/in/randy-uebel-06b7145b">
            <Wide>resume</Wide>
          </NavLink>
          <NavLink to="http://huntedhorse.com">
            <Wide>music</Wide>
          </NavLink>
          <NavLink to="/projects">
            <Wide>projects</Wide>
          </NavLink>
        </Knockout>
      </Wrapper>
    </Page>
  );
};

export default Home;
