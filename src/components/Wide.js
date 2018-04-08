import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 0.25em;
  transition: all 300ms ease-in-out;

  @media (max-width: ${p => p.theme.deviceWidth.largePhone}) {
    margin: 0.8em 0;
  }

  &:hover {
    color: ${p => p.theme.color.primary};
    mix-blend-mode: difference;
    transform: skew(5deg, 0deg) scale(1, 1.1);
  }
`;

const createSpaced = text =>
  text.split('').map((t, i) => <div key={i}>{t}</div>);

const Wide = ({ children }) => <Wrapper>{createSpaced(children)}</Wrapper>;

Wide.propTypes = {
  children: PropTypes.string.isRequired
};

export default Wide;
