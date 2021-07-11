import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

const PinkLink = styled(Link)`
  && {
    font-size: 22px;
    font-family: "Bebas Neue", cursive;
    color: inherit;
    border-bottom: 1px solid ${({ theme }) => theme.pink};
    text-decoration: none;
  }
`;

type LinkProps = {
  to: string;
};
const StyledLink: FC<LinkProps> = ({ children, to }) => {
  return <PinkLink to={to}>{children}</PinkLink>;
};

export default StyledLink;
