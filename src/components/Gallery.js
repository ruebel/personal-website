import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const Img = styled.img`
  max-height: 400px;

  @media (max-width: ${p => p.theme.deviceWidth.largePhone}) {
    max-height: 300px;
  }
`;

const anim = keyframes`
  0% {
    transform: skew(0, 0) scale(1, 1);
  }
  33% {
    transform: skew(5deg, 0deg) scale(1, 1.1);
  }
  66% {
    transform: skew(-5deg, 0deg) scale(1, 1.1);
  }
  100% {
    transform: skew(0, 0) scale(1, 1);
  }
`;

const Next = styled.button`
  background: rgba(0, 0, 0, 0.1);
  border: none;
  box-shadow: none;
  color: white;
  cursor: pointer;
  font-size: 43px;
  outline: none;
  position: absolute;
  right: 60px;
  top: 30px;
  transition: all 300ms linear;

  &:hover {
    animation: ${anim} 300ms linear;
    background: rgba(0, 0, 0, 0.4);
    color: ${p => p.theme.color.primary};
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

const Gallery = ({ srcs = [] }) => {
  const [index, setIndex] = useState(0);

  return (
    <Wrapper>
      <Img src={srcs[index]} />
      <Next onClick={() => setIndex((index + 1) % srcs.length)}>➡</Next>
    </Wrapper>
  );
};

Gallery.propTypes = {
  srcs: PropTypes.arrayOf(PropTypes.string)
};

export default Gallery;
