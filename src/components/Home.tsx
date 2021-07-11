import React from "react";
import ButtonSubmit from "./ButtonSubmit";
import styled from "styled-components/macro";
import StyledLink from "./StyledLink";

const HomeWrapper = styled.div`
  margin: 100px;
  text-align: left;
  a {
    border-bottom: none;
  }
`;
const Title = styled.div`
  font-size: 100px;
  width: 500px;
  margin-bottom: 50px;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Title>Stock Market Tracker</Title>
      <ButtonSubmit href="/login">Sign in</ButtonSubmit>
      <StyledLink to="/register">Register</StyledLink>
    </HomeWrapper>
  );
};

export default Home;
