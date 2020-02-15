import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  color: ${p => (p.isActive ? p.theme.color.tertiary : p.theme.color.primary)};
  cursor: pointer;
  font-size: 0.3em;
  letter-spacing: 4px;
  margin-left: 12px;
  position: relative;

  &:hover {
    color: ${p => p.theme.color.tertiary};
    opacity: 1;
    text-decoration: line-through;

    &::before {
      background-color: ${p => p.theme.color.tertiary};
    }
  }

  &::before {
    background-color: ${p =>
      p.isActive ? p.theme.color.tertiary : p.theme.color.primary};
    bottom: 0;
    content: "";
    height: 12%;
    left: -12px;
    position: absolute;
    width: ${p => (p.isActive ? p.progress * 98 + 2 : 2)}%;
  }

  @media (max-width: ${p => p.theme.deviceWidth.desktop}) {
    font-size: 20px;
  }

  @media (max-width: ${p => p.theme.deviceWidth.largePhone}) {
    font-size: 15px;
  }
`;

const Track = ({ activeIndex, index, onClick, progress, track }) => {
  return (
    <Wrapper
      isActive={index === activeIndex}
      off={Math.abs(index - activeIndex)}
      onClick={() => onClick(index)}
      progress={progress}
    >
      {track.title}
    </Wrapper>
  );
};

Track.propTypes = {
  activeIndex: PropTypes.number,
  index: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  progress: PropTypes.number,
  track: PropTypes.object
};

export default Track;
