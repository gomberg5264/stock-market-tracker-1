import React, { useEffect } from "react";
import AppBar from "./AppBar";
import FormattedDate from "./FormattedDate";
import { Card, Col, Row } from "react-bootstrap";
import CandleStickCharts from "./CandleStickCharts";
import { useDispatch, useSelector } from "react-redux";
import { getIntradayPrices } from "./redux/actions/intradayPrices";
import MiniStocksChart from "./MiniStockChart";
import styled from "styled-components/macro";
import Loading from "./Loading";

const TypingEffect = `
  width:0;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  white-space: nowrap; /* Keeps the content on a single line */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation-name: typing;
  animation-duration: 3s; 
  animation-timing-function: steps(60, end); 
  animation-fill-mode: forwards;
  
  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;
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
    ${TypingEffect}
  }
  .price {
    font-size: 2rem;
    font-weight: bold;
    ${TypingEffect}
    animation-delay: 1s;
  }

  .percent {
    font-size: 1rem;
    color: #23d984;
    ${TypingEffect}
    animation-delay: 1s;
  }
  .red {
    color: #d00000;
  }
  .date {
    color: #ffe484;
    ${TypingEffect}
    animation-delay: 2s;
  }
  .market {
    float: right;
  }

  @-webkit-keyframes fade-in-top {
    0% {
      -webkit-transform: translateY(-50px);
      transform: translateY(-50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes fade-in-top {
    0% {
      -webkit-transform: translateY(-50px);
      transform: translateY(-50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }

  -webkit-animation: fade-in-top 1s cubic-bezier(0.645, 0.045, 0.355, 1) both;
  animation: fade-in-top 1s cubic-bezier(0.645, 0.045, 0.355, 1) both;
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
        {loading && <Loading />}
        {!loading && selectedStockQuoteData && (
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
                      <FormattedDate />
                    </Col>
                    <Col>
                      <MiniStocksChart intradayData={intradayPrices} />
                      <span className="market">
                        US Market is{" "}
                        {selectedStockQuoteData.isUSMarketOpen
                          ? "Open"
                          : "Closed"}
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
