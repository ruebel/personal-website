import React from 'react';
import styled from 'styled-components';
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
        <Knockout>
          <Wide>{['RANDY', 'RANDALL']}</Wide>
          <Wide>{['UEBEL', 'ÜBEL']}</Wide>
          <NavLink to="https://github.com/ruebel">
            <Wide>{['code', 'github']}</Wide>
          </NavLink>
          <NavLink to="https://www.linkedin.com/in/randy-uebel-06b7145b">
            <Wide>{['resume', 'linkedin']}</Wide>
          </NavLink>
          <NavLink to="http://huntedhorse.com">
            <Wide>{['music']}</Wide>
          </NavLink>
        </Knockout>
      </Wrapper>
    </Page>
  );
};

export default Home;
