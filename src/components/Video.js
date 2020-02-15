import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const VideoBase = styled.video`
  margin-bottom: -5px;
  min-height: 100vh;
  min-width: 100vw;
  mix-blend-mode: multiply;
  @media (max-width: ${p => p.theme.deviceWidth.largePhone}) {
    transform: translateX(25%);
  }
`;

const Wrapper = styled.div`
  background: ${p =>
    p.ready
      ? `linear-gradient(311deg, #246655, #099cff, #ffa309, #8609ff)`
      : "transparent"};
  background-size: 400% 400%;
  animation: bgAnim 10s ease infinite;

  @keyframes bgAnim {
    0% {
      background-position: 1% 0%;
    }
    50% {
      background-position: 99% 100%;
    }
    100% {
      background-position: 1% 0%;
    }
  }
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100vw;
  min-height: 100vh;
`;

class Video extends React.Component {
  static propTypes = {
    src: PropTypes.string.isRequired
  };

  state = {
    ready: false
  };

  onReady = () => {
    setTimeout(() => this.setState({ ready: true }), 200);
  };

  render() {
    const { src } = this.props;
    return (
      <Wrapper ready={this.state.ready}>
        <VideoBase autoPlay loop muted onLoadedData={this.onReady} playsInline>
          <source src={src} type="video/mp4" />
          <source src={src} type="video/ogg" />
          Your browser does not support the video tag.
        </VideoBase>
      </Wrapper>
    );
  }
}

export default Video;
