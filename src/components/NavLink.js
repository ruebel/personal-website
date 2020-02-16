import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useRouter } from "./RouteContext";

const StyledAnchor = styled.a`
  text-decoration: none;
  color: inherit;
`;

const NavLink = ({ children, exact = true, href, to }) => {
  const { setPage } = useRouter();

  const props = href
    ? { href, target: "_blank" }
    : {
        onClick: () => setPage(to)
      };

  return <StyledAnchor {...props}>{children}</StyledAnchor>;
};

NavLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired,
  exact: PropTypes.bool,
  href: PropTypes.string,
  to: PropTypes.string
};

export default NavLink;
