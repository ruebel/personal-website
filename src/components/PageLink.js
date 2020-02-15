import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useRouteContext } from "./RouteContext";

const StyledAnchor = styled.a`
  text-decoration: none;
  color: inherit;
`;

const NavLink = ({ activeClassName, children, exact = true, to }) => {
  const { setPage } = useRouteContext();
  return <StyledAnchor onClick={() => setPage(to)}>{children}</StyledAnchor>;
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
