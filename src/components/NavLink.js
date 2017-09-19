import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledAnchor = styled.a`
  text-decoration: none;
  color: inherit;
`;

const StyledLink = styled(RouterLink)`text-decoration: none;`;

const NavLink = ({ activeClassName, children, exact = true, to }) => {
  return to.indexOf('.') > -1 ? (
    <StyledAnchor href={to} target="_blank">
      {children}
    </StyledAnchor>
  ) : (
    <StyledLink activeClassName={activeClassName} exact={exact} to={to}>
      {children}
    </StyledLink>
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
