import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import options from "./CandleStickChartConfig";
import styled from "styled-components/macro";
import { useDispatch, useSelector } from "react-redux";
import { getHistoricalData } from "./redux/actions/historicalData";

const ChartWrapper = styled.div`
  text-align: -webkit-center;
  .highcharts-scrollbar-track {
    fill: transparent;
    stroke: grey;
    rx: 10;
    ry: 10;
  }
  .highcharts-scrollbar-thumb {
    rx: 10;
    ry: 10;
    fill: #3494c5;
    stroke-width: 0;
  }
  .highcharts-scrollbar-rifles {
    stroke-width: 0;
  }
  .highcharts-scrollbar-arrow,
  .highcharts-scrollbar-button {
    display: none;
  }
  .highcharts-credits {
    display: none;
  }
`;
interface RootState {
  historicalData: {
    data: Array<{
      name: string;
      ohlc: Array<object>;
      volume: Array<object>;
      volumeColour: string;
    }>;
    loading: boolean;
    error: { message: string };
  };
}

const CandleStickCharts = () => {
  const dispatch = useDispatch();
  const historicalData = useSelector(
    (state: RootState) => state.historicalData.data
  );
  const loading = useSelector(
    (state: RootState) => state.historicalData.loading
  );
  const error = useSelector((state: RootState) => state.historicalData.error);

  useEffect(() => {
    dispatch(getHistoricalData());
  }, []);
  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && historicalData.length > 0 && historicalData[0] && (
        <>
          <Row className="m-0 p-0">
            <ChartWrapper>
              <HighchartsReact
                highcharts={Highcharts}
                constructorType={"stockChart"}
                options={options(historicalData[0])}
              />
            </ChartWrapper>
            <ChartWrapper>
              <HighchartsReact
                highcharts={Highcharts}
                constructorType={"stockChart"}
                options={options(historicalData[1])}
              />
            </ChartWrapper>
          </Row>
          <Row className="m-0 p-0">
            <ChartWrapper>
              <HighchartsReact
                highcharts={Highcharts}
                constructorType={"stockChart"}
                options={options(historicalData[2])}
              />
            </ChartWrapper>
            <ChartWrapper>
              <HighchartsReact
                highcharts={Highcharts}
                constructorType={"stockChart"}
                options={options(historicalData[3])}
              />
            </ChartWrapper>
          </Row>
        </>
      )}
      {error && error.message}
    </div>
  );
};

export default CandleStickCharts;
