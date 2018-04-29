import styled, { keyframes } from 'styled-components';

const introAnim = p => keyframes`
  0% {
    background-color: ${p.theme.color.primary};
    color: ${p.theme.color.secondary};
    width: 25vw;
  }
  50% {
    background-color: ${p.theme.color.primary};
    color: ${p.theme.color.primary};
    width: 25vw;
  }
  100% {
    width: 75vw;
  }
`;

export default styled.div`
  animation: ${introAnim} 2000ms forwards;
  border: 0.125em solid ${p => p.theme.color.primary};
  display: flex;
  flex-direction: column;
  font-size: 6em;
  font-weight: bold;
  line-height: 1;
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
`;
