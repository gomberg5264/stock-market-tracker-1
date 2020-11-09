import React from "react";
import styled from "styled-components/macro";
const Wrapper = styled.div`
  text-align: center;
  width: 250px;
  display: inline-block;


  .loader {
    position: absolute;
    height: 20px;
    width: 20px;
    border: 2px solid #4a5fa2;
    border-radius: 100%;
    animation: loading 3s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
  .circle1 {
    background-color: #59c2c7;
  }
  .circle2 {
    background-color: #8c6daf;

    animation-delay: 0.1s;
  }
  .circle3 {
    background-color: #8faede;
    animation-delay: 0.2s;
  }
  .circle4 {
    background-color: #f9a74b;
    animation-delay: 0.3s;
  }
  .circle5 {
    background-color: #60beeb;
    animation-delay: 0.4s;
  }
  .circle6 {
    background-color: #9e7fe8;
    animation-delay: 0.5s;
  }

  .letter-changer:after {
    color: white;
    font-weight: bold;
    content: "Loading";
    animation: changeText 3s linear infinite;
  }

  @keyframes changeText {
    0% {
      content: "Loading";
    }

    25% {
      content: "Loading.";
    }

    50% {
      content: "Loading..";
    }

    75% {
      content: "Loading...";
    }
  }

  @keyframes loading {
    0% {
      -webkit-transform: translateX(0px);
      transform: translateX(0px);
    }
    45% {
      -webkit-transform: translateX(225px);
      transform: translateX(225px);
    }
    65% {
      -webkit-transform: translateX(225px);
      transform: translateX(225px);
    }
    95% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
`;

const Loading = () => (
  <Wrapper>
    <div className="loader circle1"></div>
    <div className="loader circle2"></div>
    <div className="loader circle3"></div>
    <div className="loader circle4"></div>
    <div className="loader circle5"></div>
    <div className="loader circle6"></div>
    <div className="letter-changer pt-4"></div>
  </Wrapper>
);

export default Loading;
