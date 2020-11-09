import React, { useEffect } from "react";
import AppBar from "./AppBar";
import { Col, Row } from "react-bootstrap";
import SummaryCards from "./SummaryCards";
import StocksChart from "./StocksChart";
import { useDispatch, useSelector } from "react-redux";
import { getIntradayPrices } from "./redux/actions/intradayPrices";
import styled from "styled-components/macro";
import Loading from "./Loading";
const HomeWrapper = styled.div`
  background: #4a5fa2;
  height: ${window.innerHeight};
  display: grid;
  .App {
    display: inline-block;
    text-align: center;
  }
`;

interface RootState {
  intradayPrices: {
    prices: any;
    loading: boolean;
    error: { message: string };
  };
}

function Home() {
  const dispatch = useDispatch();
  const intradayData = useSelector(
    (state: RootState) => state.intradayPrices.prices
  );
  const intradayPrices = intradayData[0];
  const currentPrices = intradayData[1];
  const loading = useSelector(
    (state: RootState) => state.intradayPrices.loading
  );
  const error = useSelector((state: RootState) => state.intradayPrices.error);
  useEffect(() => {
    dispatch(getIntradayPrices());
  }, []);

  return (
    <HomeWrapper>
      <AppBar />
      <div className="App mr-4 ml-4 mt-2">
        {loading && <Loading />}
        {!loading && intradayData.length > 0 && (
          <Row className="mr-0 ml-0 p-0">
            <Col className="p-0">
              <SummaryCards currentPrices={currentPrices} />
              <StocksChart intradayData={intradayPrices} />
            </Col>
          </Row>
        )}
        {error && error.message}
      </div>
    </HomeWrapper>
  );
}

export default Home;
