import React, { FC } from "react";
import Highcharts from "highcharts/highstock";
import { useSelector } from "react-redux";
import HighchartsReact from "highcharts-react-official";
import styled from "styled-components/macro";

type StocksChartProps = {
  positive: boolean;
  symbol: string;
};

const ChartWrapper = styled.span`
  padding-bottom: 10px;
  svg,
  div {
    overflow: visible !important;
  }
  .highcharts-scrollbar {
    display: none;
  }
  .highcharts-xaxis,
  .highcharts-background,
  .highcharts-xaxis-labels {
    display: none;
  }
  .highcharts-credits {
    display: none;
  }
`;

function options(data: any, color: string) {
  return {
    xAxis: {
      gridLineWidth: 0,
      gapGridLineWidth: 0,
    },
    yAxis: {
      gridLineWidth: 0,
      gapGridLineWidth: 0,
      opposite: false,
      labels: false,
      visible: false,
    },
    chart: {
      width: 100,
      height: 120,
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
          radius: 1,
        },
        states: {
          hover: {
            lineWidth: 1,
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
        color: color,
        shadow: {
          color: color,
          width: 2,
        },
      },
    ],
  };
}
interface RootState {
  intradayPrices: {
    prices: any;
    loading: boolean;
    error: { message: string };
  };
}

const MiniChart: FC<StocksChartProps> = ({ symbol, positive }) => {
  const color = positive ? "#A4FF49" : "#d6126f";
  const intradayData = useSelector(
    (state: RootState) => state.intradayPrices.prices
  );

  const intradayPrices = intradayData[0].filter(
    (item: any) => item.name === symbol
  )[0];

  return (
    <ChartWrapper>
      <HighchartsReact
        style={{ overflow: "visible" }}
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={options(intradayPrices, color)}
      />
    </ChartWrapper>
  );
};

export default MiniChart;
