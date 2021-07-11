import React, { FC } from "react";
import styled from "styled-components/macro";
import background from "../img/background.jpeg";

const StyledPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  font-family: "Bebas Neue", cursive;
  background-image: radial-gradient(
    168.45% 88.95% at 52.54% 0%,
    rgba(229, 0, 110, 0.8) 23.89%,
    rgba(9, 41, 79, 0.8) 74.1%,
    rgba(26, 21, 39, 0.8) 100%
    ), url(${background});
  img {
    height: 100%;
    top: 100px;
    position: absolute;
    display: block;
  }
  text-align: center;
  color: white;
  overflow-x: hidden;
  a:hover {
    text-decoration: none;
  }
`;

const PageWrapper: FC = ({ children }) => {
  return <StyledPageWrapper>{children}</StyledPageWrapper>;
};

export default PageWrapper;
