import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";

const StyledCard = styled(Card)`
  max-width: 13rem;
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

function SummaryCard({ symbol, yesterdayClose, currentPrice }) {
  const Percentage = () => {
    const changePercentage = (
      ((currentPrice - yesterdayClose) * 100) /
      yesterdayClose
    ).toFixed(2);
    const percentageString =
      changePercentage > 0 ? `+${changePercentage}` : changePercentage;

    return (
      <b className={`percent ${changePercentage < 0 && "red"}`}>
        {percentageString}
      </b>
    );
  };

  return (
    <StyledCard className="p-2">
      <div>
        <b className="current">{`$${currentPrice}`}</b>
        <b className="symbol">{symbol}</b>
      </div>
      <div>
        <span>little chart</span>
        <Percentage />
      </div>
    </StyledCard>
  );
}

export default SummaryCard;
