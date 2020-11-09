import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Card } from "react-bootstrap";
import TinyChart from "./TinyChart";
import { updateStock } from "./redux/actions/stock";
import styled from "styled-components/macro";

type SummaryCardProps = {
  symbol: string;
  changePercent: string;
  currentPrice: number;
  companyName: string;
};
const StyledCard = styled(Card)<any>`
  width: 12.5rem;
  height: 9rem;
  color: white;
  border: transparent;
  background-image: linear-gradient(#4a5fa2c4, #4a5fa2);
  transition: all 0.2s ease-in-out;
  .price {
    font-size: 1.3rem;
  }
  .company {
    font-size: 0.8rem;
  }
  .symbol {
    font-size: 0.9rem;
    margin-left: 1rem;
    color: #18389c;
  }
  .percent {
    font-size: 0.8rem;
    color: #23d984;
  }
  .red {
    color: red;
  }
  :hover {
    box-shadow: 0px 0px 15px white;
    border: 1px solid white;
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

const SummaryCard: FC<SummaryCardProps> = ({
  symbol,
  changePercent,
  currentPrice,
  companyName,
}) => {
  const dispatch = useDispatch();

  const Percentage = () => {
    const percentageString =
      +changePercent > 0 ? `+${changePercent}%` : `${changePercent}%`;

    return (
      <b className={`percent ${+changePercent < 0 && "red"}`}>
        {percentageString}
      </b>
    );
  };

  return (
    <Link to="/info" style={{ textDecoration: "none" }}>
      <StyledCard
        className="pt-3 pb-2 pl-3 pr-1"
        onClick={() => {
          dispatch(updateStock(symbol));
        }}
      >
        <b className="company">{companyName}</b>
        <div>
          <b className="price">{`$${currentPrice}`}</b>
          <b className="symbol">{symbol}</b>
        </div>
        <div>
          <span>
            <TinyChart positive={+changePercent > 0} symbol={symbol} />
          </span>
          <Percentage />
        </div>
      </StyledCard>
    </Link>
  );
};

export default SummaryCard;
