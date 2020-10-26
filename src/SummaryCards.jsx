import React, { useEffect, useState } from "react";
import StyledSummaryCard from "./StyledSummaryCard";
import { Col, Row } from "react-bootstrap";

const symbols = ["AAPL", "GOOG", "MSFT", "TSLA"];

function SummaryCards({ currentPrices }) {
  const [yesterdayClose, setYesterdayClose] = useState([]);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_SANDBOX_BASE_URL}stable/stock/market/batch?symbols=aapl,goog,msft,tsla&types=previous&token=${process.env.REACT_APP_SANDBOX_API_KEY}`
    )
      .then((res) => res.json())
      .then((yesterday) => {
        const data = [];
        for (let tick in yesterday) {
          data.push(yesterday[tick]["previous"]["close"]);
        }
        setYesterdayClose(data);
      });
  }, []);

  return (
    <Row>
      {currentPrices.map((price, idx) => (
        <Col key={idx}>
          <StyledSummaryCard
            symbol={symbols[idx]}
            currentPrice={price}
            yesterdayClose={yesterdayClose[idx]}
          />
        </Col>
      ))}
    </Row>
  );
}

export default SummaryCards;
