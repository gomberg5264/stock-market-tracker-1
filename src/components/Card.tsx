import React, { FC } from "react";
import MiniChart from "./MiniChart";
import styled from "styled-components/macro";

type CardProps = {
  data: {
    symbol: string;
    changePercent: number;
    latestPrice: number;
    companyName: string;
    volume: number;
  };
};
const StyledCard = styled.div<any>`
  height: 7rem;
  margin: 10px;
  color: white;
  flex: 0 0 20%;
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  background: #3f3d81;
  padding: 10px 10px 30px 10px;
  transition: all 0.2s ease-in-out;
  .price {
    font-size: 28px;
  }
  .company {
    font-size: 16px;
  }
  .symbol {
    font-size: 20px;
  }
  .percent {
    font-size: 22px;
    padding-top: 30px;
  }
  div:first-child {
    display: flex;
    justify-content: space-between;
    margin: 10px 1rem 0 1rem;
  }
  div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    margin: 0 1rem;
  }

  div:nth-child(3) {
    display: flex;
    justify-content: space-between;
    margin: 0 1rem;
  }
  :hover {
    cursor: pointer;
    transform: scale(1.2);
    z-index: 5;
  }

  @-webkit-keyframes fade-in-top {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-in-top {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  -webkit-animation: fade-in-top 1s both;
  animation: fade-in-top 1s both;
`;

const Card: FC<CardProps> = ({ data }) => {
  const { symbol, latestPrice, companyName, changePercent, volume } = data;

  return (
    <StyledCard>
      <div>
        <span className="symbol">{symbol}</span>
        <span className="company">({companyName})</span>
      </div>
      <div>
        <span>Vol: {volume}</span>
        <span className="price">{`$${latestPrice}`}</span>
      </div>
      <div style={{}}>
        <MiniChart positive={changePercent > 0} symbol={symbol} />

        <span className="percent"> {changePercent}%</span>
      </div>
    </StyledCard>
  );
};

export default Card;
