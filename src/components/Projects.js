import React from 'react';
import styled from 'styled-components';
import BigTitle from './BigTitle';
import NavLink from './NavLink';
import Page from './Page';
import Wide from './Wide';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Projects = () => {
  return (
    <Page>
      <Wrapper>
        <BigTitle src="bg.gif">
          <NavLink to="https://ruebel.github.io/granular/">
            <Wide>granular</Wide>
          </NavLink>
          <NavLink to="https://ruebel.github.io/synth-react-redux/">
            <Wide>synth</Wide>
          </NavLink>
          <NavLink to="/">
            <Wide>&lt;home</Wide>
          </NavLink>
        </BigTitle>
      </Wrapper>
    </Page>
  );
};

export default Projects;
