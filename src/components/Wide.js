import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 0.25em;

  &:hover {
    color: ${p => p.theme.color.primary};
    mix-blend-mode: exclusion;
  }
`;

const createSpaced = text =>
  text.split('').map((t, i) => <div key={i}>{t}</div>);

const Wide = ({ children }) => <Wrapper>{createSpaced(children)}</Wrapper>;

Wide.propTypes = {
  children: PropTypes.string.isRequired
};

export default Wide;
