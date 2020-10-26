import React, { useEffect } from "react";
import StyledSummaryCard from "./StyledSummaryCard";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getYesterdayClosePrices } from "./redux/actions/yesterdayClosePrices";

const symbols = ["AAPL", "GOOG", "MSFT", "TSLA"];

function SummaryCards({ currentPrices }) {
  const dispatch = useDispatch();
  const yesterdayClose = useSelector(
    (state) => state.yesterdayClosePrices.prices
  );
  const loading = useSelector((state) => state.yesterdayClosePrices.loading);
  const error = useSelector((state) => state.yesterdayClosePrices.error);

  useEffect(() => {
    dispatch(getYesterdayClosePrices());
  }, []);

  return (
    <Row>
      {loading && <p style={{color:"white"}}>Loading...</p>}
      {!loading &&
        yesterdayClose.length > 0 &&
        currentPrices.map((price, idx) => (
          <Col key={idx}>
            <StyledSummaryCard
              symbol={symbols[idx]}
              currentPrice={price}
              yesterdayClose={yesterdayClose[idx]}
            />
          </Col>
        ))}
      {error && error.message}
    </Row>
  );
}

export default SummaryCards;
