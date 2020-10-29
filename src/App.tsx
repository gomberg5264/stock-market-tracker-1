import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import SummaryCards from "./SummaryCards";
import StocksChart from "./StocksChart";
import CandleStickCharts from "./CandleStickCharts";
import { useDispatch, useSelector } from "react-redux";
import { getIntradayPrices } from "./redux/actions/intradayPrices";

interface RootState {
  intradayPrices: {
    prices: any;
    loading: boolean;
    error: { message: string };
  };
}

function App() {
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
    <div className="App m-4">
        {loading && <p>Loading...</p>}
        {!loading && intradayData.length > 0 && (
          <>
            <Row className="mr-0 ml-0 p-0">
              <Col className="p-0">
                <SummaryCards currentPrices={currentPrices} />
                <StocksChart intradayData={intradayPrices} />
              </Col>
              <Col className="p-0">
                <CandleStickCharts />
              </Col>
            </Row>
          </>
        )}
      
      {error && error.message}
    </div>
  );
}

export default App;
