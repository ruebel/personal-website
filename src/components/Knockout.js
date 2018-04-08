import styled from 'styled-components';

export default styled.div`
  color: #ff00ff;
  background: #000;
  mix-blend-mode: lighten;
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  font-size: 6em;
  font-weight: bold;
  line-height: 1;
  position: relative;
  text-align: center;
  padding: 0.5em 0.75em 0.5em 0.75em;
  border: 0.125em solid #fff;

  max-width: 75vw;
  min-width: 50vw;

  @media (max-width: ${p => p.theme.deviceWidth.largePhone}) {
    width: 100%;
    max-width: none;
    padding: 0.3em;
    font-size: 4em;
    justify-content: space-around;
    height: 100%;
  }

  &:before {
    background: linear-gradient(311deg, #246655, #099cff, #ffa309, #8609ff);
    background-size: 800% 800%;
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
    mix-blend-mode: multiply;
    display: block;
    position: absolute;
    top: -0.125em;
    left: -0.125em;
    bottom: -0.125em;
    right: -0.125em;
    content: '';
    pointer-events: none;
  }
`;
