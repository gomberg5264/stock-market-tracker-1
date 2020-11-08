import React, { useEffect } from "react";
import AppBar from "./AppBar";
import { Col, Row } from "react-bootstrap";
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
interface RootStockState {}

function InfoPage() {
  const dispatch = useDispatch();
  const intradayData = useSelector(
    (state: RootState) => state.intradayPrices.prices
  );
  const stockName:any = useSelector((state: RootStockState) => state);
  console.log(stockName);
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
    <>
     <AppBar/>
      <div className="App m-4">
        {loading && <p>Loading...</p>}
        {!loading && intradayData.length > 0 && (
          <>
            <Row className="mr-0 ml-0 p-0">
              <Col className="p-0">
                //details 
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
