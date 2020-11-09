import React, { useEffect } from "react";
import AppBar from "./AppBar";
import { Card, Col, Row } from "react-bootstrap";
import CandleStickCharts from "./CandleStickCharts";
import { useDispatch, useSelector } from "react-redux";
import { getIntradayPrices } from "./redux/actions/intradayPrices";
import MiniStocksChart from "./MiniStockChart";
import styled from "styled-components/macro";

const StyledCard = styled(Card)<any>`
  background: #30437f;
  border: 2px solid #8b99c3;
  border-radius: 0.3rem;
  .header {
    color: white;
    padding: 1rem;
    background-image: linear-gradient(#8b99c3, #30437f);
  }
  .company {
    font-size: 1.25rem;
    font-weight: bold;
  }
  .price {
    font-size: 2rem;
    font-weight: bold;
  }

  .percent {
    font-size: 1rem;
    color: #23d984;
  }
  .red {
    color: #d00000;
  }
  .date {
    color: #ffe484;
  }
  .market {
    float: right;
  }
`;

interface QuoteRootState {
  quote: {
    data: any;
    loading: boolean;
    error: { message: string };
  };
}
interface StockRootState {
  stock: { name: string };
}
interface IntradayRootState {
  intradayPrices: {
    prices: any;
    loading: boolean;
    error: { message: string };
  };
}
function InfoPage() {
  const dispatch = useDispatch();

  const intradayData = useSelector(
    (state: IntradayRootState) => state.intradayPrices.prices
  );

  const quoteData: any = useSelector(
    (state: QuoteRootState) => state.quote.data
  );

  const selectedStockName = useSelector(
    (state: StockRootState) => state.stock.name
  );
  const selectedStockQuoteData = quoteData.filter(
    (company: any) => company.symbol === selectedStockName
  )[0];

  const intradayPrices = intradayData[0].filter(
    (prices: any) => prices.name === selectedStockName
  )[0];
  
  const loading = useSelector((state: QuoteRootState) => state.quote.loading);
  const error = useSelector((state: QuoteRootState) => state.quote.error);

  useEffect(() => {
    dispatch(getIntradayPrices());
  }, []);

  const ChangePercentage = () => {
    const percentageString =
      +selectedStockQuoteData.changePercent > 0
        ? `+${selectedStockQuoteData.changePercent}%`
        : `${selectedStockQuoteData.changePercent}%`;

    return (
      <b
        className={`percent ${
          +selectedStockQuoteData.changePercent < 0 && "red"
        }`}
      >
        {percentageString}
      </b>
    );
  };
  const Change = () => {
    const percentageString =
      +selectedStockQuoteData.change > 0
        ? `+${selectedStockQuoteData.change}`
        : `${selectedStockQuoteData.change}`;

    return (
      <b className={`percent ${+selectedStockQuoteData.change < 0 && "red"}`}>
        ({percentageString})
      </b>
    );
  };

  return (
    <>
      <AppBar />
      <div className="App mr-4 ml-4 mt-2">
        {loading && <p>Loading...</p>}
        {!loading && quoteData.length > 0 && (
          <>
            <Row className="mr-0 ml-0 p-0">
              <Col className="p-0">
                <StyledCard>
                  <Row className="header m-0">
                    <Col>
                      <div className="company">
                        {selectedStockQuoteData.companyName} (
                        {selectedStockName})
                      </div>
                      <div className="price">
                        ${selectedStockQuoteData.latestPrice} <Change />
                        <ChangePercentage />
                      </div>
                      <div className="date">08 Novemeber 2020</div>
                    </Col>
                    <Col>
                      <MiniStocksChart intradayData={intradayPrices} />
                      <span className="market">
                        Market is{" "}
                        {selectedStockQuoteData.isUSMarketOpen
                          ? "open"
                          : "closed"}
                      </span>
                    </Col>
                  </Row>
                  <CandleStickCharts />
                </StyledCard>
              </Col>
            </Row>
          </>
        )}

        {error && error.message}
      </div>
    </>
  );
}

export default InfoPage;
