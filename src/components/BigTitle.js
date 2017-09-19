import styled from 'styled-components';

export default styled.div`
  -webkit-background-clip: text;
  background-image: url(${p => p.src});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  background-size: cover;
  color: ${p => p.theme.color.primary};
  display: inline-block;
  flex: 1 1 0;
  font-size: 6em;
  font-weight: bold;
  line-height: 1;
  padding: 0.5em 0.75em 0.5em 0.75em;
  position: relative;
  text-align: center;
  -webkit-text-fill-color: transparent;

  max-width: 75vw;
  min-width: 50vw;

  @media (max-width: ${p => p.theme.deviceWidth.largePhone}) {
    width: 100%;
    max-width: none;
  }

  &:before,
  &:after {
    position: absolute;
    content: '';
  }

  &:before {
    z-index: -2;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: inherit;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: 50% 50%;
  }

  &:after {
    position: absolute;
    z-index: -1;
    top: 0.125em;
    right: 0.125em;
    bottom: 0.125em;
    left: 0.125em;
    background-color: #000;
  }
`;
