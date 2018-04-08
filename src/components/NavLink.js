import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledAnchor = styled.a`
  text-decoration: none;
  color: inherit;
`;

const NavLink = ({ activeClassName, children, exact = true, to }) => {
  return (
    <StyledAnchor href={to} target="_blank">
      {children}
    </StyledAnchor>
  );
};

NavLink.propTypes = {
  activeClassName: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired,
  exact: PropTypes.bool,
  to: PropTypes.string.isRequired
};

export default NavLink;
