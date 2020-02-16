import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  color: ${p => (p.isActive ? p.theme.color.tertiary : p.theme.color.primary)};
  cursor: pointer;
  font-size: 0.3em;
  letter-spacing: 4px;
  padding-left: 32px;
  position: relative;
  text-align: left;

  &:hover {
    color: ${p => p.theme.color.tertiary};
    opacity: 1;
    text-decoration: line-through;

    &::before {
      border-color: ${p => p.theme.color.tertiary};
    }
  }

  &::before {
    border-bottom: ${p =>
      p.isActive ? p.theme.color.tertiary : "transparent"} 4px solid;
    content: "${p => p.index + 1}.";
    left: -12px;
    letter-spacing: 1px;
    position: absolute;
    text-align: left;
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
      index={index}
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
