import React, { FC } from "react";
import styled from "styled-components/macro";
import background from "../img/background.jpeg";

const StyledPageWrapper = styled.div<WrapperProps>`
  width: 100%;
  height: 100vh;
  font-family: "Bebas Neue", cursive;
  background-image: radial-gradient(
      168.45% 88.95% at 52.54% 0%,
      rgba(229, 0, 110, ${(props) => (props.home ? 0.8 : 1)}) 23.89%,
      rgba(9, 41, 79, ${(props) => (props.home ? 0.8 : 1)}) 74.1%,
      rgba(26, 21, 39, ${(props) => (props.home ? 0.8 : 1)}) 100%
    ),
    url(${(props) => props.home && background});
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
  .main {
    margin: 0 90px;
    text-align: left;
  }
`;
type WrapperProps = {
  home: boolean;
};

const PageWrapper: FC<WrapperProps> = ({ children, home }) => {
  return <StyledPageWrapper home={home}>{children}</StyledPageWrapper>;
};

export default PageWrapper;
