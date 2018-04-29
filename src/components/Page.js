import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Footer from './Footer';

const Wrapper = styled.div`
  background: #120402;
  min-height: 100vh;
  width: 100%;
`;

const Page = ({ children, videoReady }) => {
  return (
    <Wrapper videoReady={videoReady}>
      {children}
      <Footer>© {new Date().getFullYear()} Randy Uebel</Footer>
    </Wrapper>
  );
};

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  videoReady: PropTypes.bool
};

export default Page;
