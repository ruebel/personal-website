import React from "react";
import PropTypes from "prop-types";
import styled, { css, keyframes } from "styled-components";
import { withSoundCloudAudio } from "react-soundplayer/addons";

import Playlist from "./Playlist";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const spin = css`
  animation: ${rotate} 200ms linear infinite;
`;

const Loading = styled.div`
  align-self: center;
  color: ${p => p.theme.color.primary};
  cursor: pointer;
  font-size: 130px;

  &:hover {
    color: ${p => p.theme.color.active};
    text-decoration: line-through;
  }

  @media (max-width: ${p => p.theme.deviceWidth.largePhone}) {
    right: 5px;
    top: 5px;
  }

  ${p => p.pending && spin};
`;

const Wrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  pointer-events: auto;
  width: 100%;
`;

class Player extends React.Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    playlist: PropTypes.object,
    soundCloudAudio: PropTypes.object
  };

  state = {
    index: -1,
    progress: 0
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.playlist) {
      const progress = nextProps.currentTime / nextProps.duration;
      if (progress !== prevState.progress) {
        return {
          progress
        };
      }
    } else {
      return prevState;
    }
    return { progress: 0 };
  }

  playTrack = index => {
    const { soundCloudAudio } = this.props;

    if (soundCloudAudio.playing && this.state.index === index) {
      // Track is already playing so stop it
      soundCloudAudio.pause();
    } else {
      // Play Track
      this.setState({ index });
      soundCloudAudio.play({ playlistIndex: index });
    }
  };

  render() {
    const { onClose, playlist } = this.props;
    return (
      <Wrapper>
        {playlist ? (
          <Playlist
            index={this.state.index}
            onClick={this.playTrack}
            progress={this.state.progress}
            tracks={playlist.tracks}
          />
        ) : (
          <Loading pending onClick={onClose}>
            X
          </Loading>
        )}
      </Wrapper>
    );
  }
}

export default withSoundCloudAudio(Player);
