import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SummaryCard from "./SummaryCard";
import StocksChart from "./StocksChart";

const symbols = ["AAPL", "GOOG", "MSFT", "TSLA"];

function App() {
  const [yesterdayClose, setYesterdayClose] = useState([]);
  const [prices, setPrices] = useState([]);

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
    fetch(
      `${process.env.REACT_APP_SANDBOX_BASE_URL}stable/stock/market/batch?symbols=aapl,goog,msft,tsla&types=price&token=${process.env.REACT_APP_SANDBOX_API_KEY}`
    )
      .then((res) => res.json())
      .then((pricesList) => {
        setPrices(Object.values(pricesList));
      });
  }, []);

  return (
    <div className="App m-4">
      <Container style={{ maxWidth: "60rem" }}>
        <Row>
          {prices[0] &&
            prices.map((price, idx) => (
              <Col key={idx}>
                <SummaryCard
                  symbol={symbols[idx]}
                  currentPrice={price.price}
                  yesterdayClose={yesterdayClose[idx]}
                />
              </Col>
            ))}
        </Row>
        <Row>
          <StocksChart />
        </Row>
        <Row>small charts</Row>
      </Container>
    </div>
  );
}

export default App;
