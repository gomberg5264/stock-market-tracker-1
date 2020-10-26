import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SummaryCards from "./SummaryCards";
import StocksChart from "./StocksChart";
import CandleStickCharts from "./CandleStickCharts";

function App() {
  const [historicalData, setHistoricalData] = useState([]);
  const [currentPrices, setCurrentPrices] = useState([]);
  
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_SANDBOX_BASE_URL}stable/stock/market/batch?symbols=aapl,goog,msft,tsla&types=intraday-prices&token=${process.env.REACT_APP_SANDBOX_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        const currentPricesList = [];
        const result = [];
        for (let tick in data) {
          const priceAndTimestamp = data[tick]["intraday-prices"].map(
            (price) => {
              return [
                new Date(`${price.date} ${price.minute}`).getTime(),
                price.close,
              ];
            }
          );
          result.push({
            name: tick,
            data: priceAndTimestamp,
          });
          currentPricesList.push(priceAndTimestamp[priceAndTimestamp.length - 1][1]);
        }
        setHistoricalData(result);
        setCurrentPrices(currentPricesList);
      });
  }, []);

  return (
    <div className="App m-4">
      <Container style={{ maxWidth: "60rem" }}>
        {historicalData[0] && (
          <>
            <SummaryCards currentPrices={currentPrices} />
            <StocksChart historicalData={historicalData} />
          </>
        )}
        <CandleStickCharts />
      </Container>
    </div>
  );
}

export default App;
