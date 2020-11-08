import React, { FC } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import options from "./StocksChartConfig";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components/macro";

type StocksChartProps = {
  intradayData: Array<{ name: string; data: Array<object> }>;
};

const ChartWrapper = styled(Col)`
  background: transparent;
  border-radius: 1rem;
  margin-top: 1rem;
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
    fill: #7081b6;
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
  .highcharts-data-table tr:hover {
    background: #f1f7ff;
  }
`;

const StocksChart: FC<StocksChartProps> = ({ intradayData }) => {
  return (
    <Row className="m-0">
      <ChartWrapper>
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={"stockChart"}
          options={options(intradayData)}
        />
      </ChartWrapper>
    </Row>
  );
};

export default StocksChart;
