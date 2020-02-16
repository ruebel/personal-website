import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Track from "./Track";

const Wrapper = styled.div`
  display: grid;
  flex: 1;
  grid-gap: 8px;
  letter-spacing: 2px;
  margin-left: 20px;
  width: 100%;
`;

const Playlist = ({ index, onClick, progress, tracks }) => {
  return (
    <Wrapper>
      {tracks.map((track, i) => (
        <Track
          activeIndex={index}
          index={i}
          key={i}
          onClick={onClick}
          progress={progress}
          track={track}
        />
      ))}
    </Wrapper>
  );
};

Playlist.propTypes = {
  index: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  progress: PropTypes.number,
  tracks: PropTypes.array
};

export default Playlist;
