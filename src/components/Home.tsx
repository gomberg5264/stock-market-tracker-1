import React from "react";
import ButtonSubmit from "./ButtonSubmit";
import styled from "styled-components/macro";
import StyledLink from "./StyledLink";
import PageWrapper from "./PageWrapper";

const HomeWrapper = styled.div`
  margin: 100px;
  text-align: left;
  a {
    border-bottom: none;
  }
  @-webkit-keyframes fade-in-left {
    0% {
      -webkit-transform: translateX(-50px);
      transform: translateX(-50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes fade-in-left {
    0% {
      -webkit-transform: translateX(-50px);
      transform: translateX(-50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }

  -webkit-animation: fade-in-left 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in-left 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;
const Title = styled.div`
  font-size: 100px;
  width: 500px;
  margin-bottom: 50px;
`;

const Home = () => {
  return (
    <PageWrapper home={true}>
      <HomeWrapper>
        <Title>Stock Market Tracker</Title>
        <ButtonSubmit href="/login">Sign in</ButtonSubmit>
        <StyledLink to="/register">Register</StyledLink>
      </HomeWrapper>
    </PageWrapper>
  );
};

export default Home;
