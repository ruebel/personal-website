import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Footer from './Footer';

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
`;

const Page = ({ children }) => {
  return (
    <Wrapper>
      {children}
      <Footer>© {new Date().getFullYear()} Randy Uebel</Footer>
    </Wrapper>
  );
};

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

export default Page;
