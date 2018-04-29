import React from 'react';
import styled from 'styled-components';
import Knockout from './Knockout';
import NavLink from './NavLink';
import Page from './Page';
import Wide from './Wide';

const Video = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100vw;
  min-height: 100vh;
  mix-blend-mode: multiply;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

class Home extends React.Component {
  state = {
    expanded: false
  };

  componentDidMount() {
    setTimeout(() => this.setState({ expanded: true }), 1000);
  }

  render() {
    return (
      <Page>
        <Video autoPlay loop poster="poster.jpg">
          <source src="bg.mp4" type="video/mp4" />
          <source src="bg.mp4" type="video/ogg" />
          Your browser does not support the video tag.
        </Video>
        <Wrapper>
          <Knockout>
            {this.state.expanded ? (
              <div>
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
              </div>
            ) : (
              <div>Ü</div>
            )}
          </Knockout>
        </Wrapper>
      </Page>
    );
  }
}

export default Home;
