import React, { FC } from "react";
import { Card } from "react-bootstrap";
import TinyChart from "./TinyChart";
import styled from "styled-components/macro";

type SummaryCardProps = {
  symbol: string;
  yesterdayClose: number;
  currentPrice: number;
};
const StyledCard = styled(Card)<any>`
  width: 10.5rem;
  height: 7rem;
  background: transparent;
  border: 1px solid #46537d;
  border-radius: 0.7rem;
  color: #a8a7b7;
  .current {
    font-size: 1.3rem;
  }
  .symbol {
    font-size: 0.9rem;
    margin-left: 1rem;
    color: grey;
  }
  div {
    text-align: center;
  }
  .percent {
    font-size: 0.8rem;
    color: #23d984;
  }
  .red {
    color: #b3426c;
  }
`;

const SummaryCard: FC<SummaryCardProps> = ({
  symbol,
  yesterdayClose,
  currentPrice,
}) => {
  const changePercentage = (
    ((currentPrice - yesterdayClose) * 100) /
    yesterdayClose
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
    <StyledCard className="pt-2 pb-2 pl-1 pr-1 m-1">
      <div>
        <b className="current">{`$${currentPrice}`}</b>
        <b className="symbol">{symbol}</b>
      </div>
      <div>
        <span>
          <TinyChart positive={ +changePercentage > 0} symbol={symbol} />
        </span>
        <Percentage />
      </div>
    </StyledCard>
  );
};

export default SummaryCard;
