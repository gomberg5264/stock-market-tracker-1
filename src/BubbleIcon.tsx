import React from "react";
import styled from "styled-components/macro";

const BubbleSVG = styled.svg`
  overflow: visible;
  @-webkit-keyframes heartbeat {
    from {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: center center;
      transform-origin: center center;
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    10% {
      -webkit-transform: scale(0.91);
      transform: scale(0.91);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    17% {
      -webkit-transform: scale(0.98);
      transform: scale(0.98);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    33% {
      -webkit-transform: scale(0.87);
      transform: scale(0.87);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    45% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }
  @keyframes heartbeat {
    from {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: center center;
      transform-origin: center center;
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    10% {
      -webkit-transform: scale(0.91);
      transform: scale(0.91);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    17% {
      -webkit-transform: scale(0.98);
      transform: scale(0.98);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    33% {
      -webkit-transform: scale(0.87);
      transform: scale(0.87);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    45% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }

  -webkit-animation: heartbeat 2s ease-in-out 2s infinite both;
  animation: heartbeat 2s ease-in-out 2s infinite both;

  rect:hover {
    fill: red;
    border-radius: 0.2.rem;
  }
`;

const BubbleIcon = () => (
  <BubbleSVG height="28" viewBox="0 0 18 20" width="33">
    <rect
      x={0}
      y={0}
      width="25"
      height="25"
      style={{ fill: "transparent" }}
    />
    <circle
      cx="7.2"
      cy="14.4"
      r="3.2"
      fill={"orange"}
      stroke={"white"}
      strokeWidth={1}
    />
    <circle
      cx="14.8"
      cy="18"
      r="2"
      fill={"white"}
      stroke={"white"}
      strokeWidth={1}
    />
    <circle
      cx="15.2"
      cy="8.8"
      r="4.8"
      fill={"rgb(153 153 255)"}
      stroke={"white"}
      strokeWidth={1}
    />
  </BubbleSVG>
);

export default BubbleIcon;
