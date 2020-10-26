import React, { FC, useEffect } from "react";
import StyledSummaryCard from "./StyledSummaryCard";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getYesterdayClosePrices } from "./redux/actions/yesterdayClosePrices";

type SummaryCardsProps = {
  currentPrices: Array<number>;
};

interface RootState {
  yesterdayClosePrices: {
    prices: Array<number>;
    loading: boolean;
    error: { message: string };
  };
}

const symbols = ["AAPL", "GOOG", "MSFT", "TSLA"];

const SummaryCards: FC<SummaryCardsProps> = ({ currentPrices }) => {
  const dispatch = useDispatch();
  const yesterdayClose = useSelector(
    (state: RootState) => state.yesterdayClosePrices.prices
  );
  const loading = useSelector(
    (state: RootState) => state.yesterdayClosePrices.loading
  );
  const error = useSelector(
    (state: RootState) => state.yesterdayClosePrices.error
  );

  useEffect(() => {
    dispatch(getYesterdayClosePrices());
  }, []);

  return (
    <Row className="m-0">
      {loading && <p style={{ color: "white" }}>Loading...</p>}
      {!loading &&
        yesterdayClose.length > 0 &&
        currentPrices.map((price, idx) => (
          <StyledSummaryCard
            key={idx}
            symbol={symbols[idx]}
            currentPrice={price}
            yesterdayClose={yesterdayClose[idx]}
          />
        ))}
      {error && error.message}
    </Row>
  );
};

export default SummaryCards;
