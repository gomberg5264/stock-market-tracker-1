import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Card } from "react-bootstrap";
import TinyChart from "./TinyChart";
import { updateStock } from "./redux/actions/stock";
import styled from "styled-components/macro";

type SummaryCardProps = {
  symbol: string;
  previousClose: number;
  currentPrice: number;
};
const StyledCard = styled(Card)<any>`
  width: 10.5rem;
  height: 7rem;
  background-image: linear-gradient(#4a5fa2c4, #4a5fa2);
  border: transparent;
  color: white;
  .current {
    font-size: 1.3rem;
  }
  .symbol {
    font-size: 0.9rem;
    margin-left: 1rem;
    color: #18389c;
  }
  div {
    text-align: center;
  }
  .percent {
    font-size: 0.8rem;
    color: #23d984;
  }
  .red {
    color: red;
  }
  :hover {
    box-shadow: 0px 0px 5px #00ffff;
    border: 1px solid #00ffff;
    cursor: pointer;
  }
`;

const SummaryCard: FC<SummaryCardProps> = ({
  symbol,
  previousClose,
  currentPrice,
}) => {
  const dispatch = useDispatch();
  const changePercentage = (
    ((currentPrice - previousClose) * 100) /
    previousClose
  ).toFixed(2);
  const Percentage = () => {
    const percentageString =
      +changePercentage > 0 ? `+${changePercentage}%` : `${changePercentage}%`;

    return (
      <b className={`percent ${+changePercentage < 0 && "red"}`}>
        {percentageString}
      </b>
    );
  };

  return (
    <Link to="/info" style={{ textDecoration: "none" }}>
      <StyledCard
        className="pt-2 pb-2 pl-1 pr-1 m-1"
        onClick={() => {
          dispatch(updateStock(symbol));
        }}
      >
        <div>
          <b className="current">{`$${currentPrice}`}</b>
          <b className="symbol">{symbol}</b>
        </div>
        <div>
          <span>
            <TinyChart positive={+changePercentage > 0} symbol={symbol} />
          </span>
          <Percentage />
        </div>
      </StyledCard>
    </Link>
  );
};

export default SummaryCard;
