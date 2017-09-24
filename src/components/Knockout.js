import styled from 'styled-components';

export default styled.div`
  color: #fff;
  background: #000;
  mix-blend-mode: lighten;
  display: inline-block;
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
  }

  &:before {
    background-image: url(${p => p.src});
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
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
