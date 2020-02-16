import React from "react";
import styled, { keyframes } from "styled-components";

import { useRouter } from "./RouteContext";

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

const StyledAnchor = styled.a`
  color: ${p => p.theme.color.primary};
  cursor: pointer;
  font-size: 100px;
  text-decoration: none;

  &:hover {
    animation: ${anim} 300ms linear;
    color: ${p => p.theme.color.tertiary};
  }
`;

const Back = () => {
  const { goBack } = useRouter();
  return <StyledAnchor onClick={() => goBack()}>←</StyledAnchor>;
};

export default Back;
