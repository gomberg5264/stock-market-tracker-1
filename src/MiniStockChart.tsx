import React, { FC } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components/macro";

type StocksChartProps = {
  intradayData: Array<{ name: string; data: Array<object> }>;
};

const ChartWrapper = styled(Col)`
  margin-bottom: -3rem;
  .highcharts-scrollbar {
    display: none;
  }
  .highcharts-credits {
    display: none;
  }
`;
function options(data: any) {
  return {
    xAxis: {
      gridLineWidth: 0,
      gapGridLineWidth: 0,
      opposite: false,
      labels: false,
      visible: false,
    },
    yAxis: {
      gridLineWidth: 0,
      gapGridLineWidth: 0,
      opposite: false,
      labels: false,
      visible: false,
    },
    chart: {
      width: 500,
      height: 150,
      backgroundColor: "transparent",
    },
    navigator: {
      enabled: false,
    },
    rangeSelector: {
      enabled: false,
    },
    exporting: false,
    plotOptions: {
      series: {
        connectNulls: true,
        marker: {
          enabled: true,
          radius: 4,
        },
        states: {
          hover: {
            lineWidth: 4,
          },
        },
      },
    },
    tooltip: {
      crosshairs: false,
    },

    series: [
      {
        name: data.name,
        data: data.data.slice(-30),
        color: "orange",
        shadow: {
          color: "orange",
          width: 2,
        },
      },
    ],
  };
}

const MiniStocksChart: FC<StocksChartProps> = ({ intradayData }) => {
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

export default MiniStocksChart;
