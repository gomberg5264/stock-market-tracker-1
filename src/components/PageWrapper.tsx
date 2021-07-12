import React, { FC } from "react";
import styled from "styled-components/macro";

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
    url(${(props) =>
      props.home &&
      `${process.env.REACT_APP_AWS_S3_BASE_URL}/background.jpeg`});
  img {
    height: 100%;
    top: 100px;
    position: absolute;
    display: block;
  }
  ${(props) =>
    props.home &&
    `display: flex;
  justify-content: left;
  align-items: center;`};

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
