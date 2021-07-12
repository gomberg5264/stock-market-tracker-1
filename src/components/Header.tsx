import React, { FC } from "react";
import styled from "styled-components/macro";

const StyledHeader = styled.div`
  z-index: 1400;
  margin: 0 0 30px 60px;
  font-size: 34px;
`;

const Header: FC = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default Header;
