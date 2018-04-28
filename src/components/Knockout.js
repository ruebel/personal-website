import styled, { keyframes } from 'styled-components';

const bgAnim = keyframes`
  0% {
    background-position: 1% 0%;
  }
  50% {
    background-position: 99% 100%;
  }
  100% {
    background-position: 1% 0%;
  }
`;

export default styled.div`
  background: ${p => p.theme.color.secondary};
  border: 0.125em solid #fff;
  color: #ff00ff;
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  font-size: 6em;
  font-weight: bold;
  line-height: 1;
  max-width: 75vw;
  min-width: 50vw;
  mix-blend-mode: lighten;
  padding: 0.5em 0.75em 0.5em 0.75em;
  position: relative;
  text-align: center;

  @media (max-width: ${p => p.theme.deviceWidth.largePhone}) {
    font-size: 4em;
    height: 100%;
    justify-content: space-around;
    max-width: none;
    padding: 0.3em;
    width: 100%;
  }

  &:before {
    animation: ${bgAnim} 10s ease infinite;
    background: linear-gradient(311deg, #3baf92, #099cff, #ffa309, #8609ff);
    background-size: 800% 800%;
    bottom: -0.125em;
    content: '';
    display: block;
    left: -0.125em;
    mix-blend-mode: multiply;
    position: absolute;
    right: -0.125em;
    pointer-events: none;
    top: -0.125em;
  }
`;
