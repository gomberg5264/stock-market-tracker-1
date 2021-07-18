import React, { FC } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import options from "./CandleStickChartConfig";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";
import { getHistoricalPrices } from "../redux/actions/stocks";

const ChartWrapper = styled.div`
  text-align: -webkit-center;
  .symbol {
    font-size: 20px;
  }
  .highcharts-scrollbar-track {
    fill: transparent;
    stroke: grey;
    height: 10px;
    rx: 4;
    ry: 4;
  }
  .highcharts-scrollbar-thumb {
    height: 10px;
    rx: 4;
    ry: 4;
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
  @-webkit-keyframes fade-in-left {
    0% {
      -webkit-transform: translateX(-50px);
      transform: translateX(-50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes fade-in-left {
    0% {
      -webkit-transform: translateX(-50px);
      transform: translateX(-50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }

  -webkit-animation: fade-in-left 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in-left 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;
interface RootState {
  historicalPrices: {
    prices: any;
    loading: boolean;
    error: { message: string };
  };
}

type ChartProps = {
  symbol: string;
};

const CandleStickCharts: FC<ChartProps> = ({ symbol }) => {
  const historical = useSelector(
    (state: RootState) => state.historicalPrices.prices
  );
  const selectedStockHistoricalData = historical.filter(
    (stock: any) => stock.name.toLowerCase() === symbol
  )[0];
  console.log(selectedStockHistoricalData);
  const loading = useSelector(
    (state: RootState) => state.historicalPrices.loading
  );
  const error = useSelector((state: RootState) => state.historicalPrices.error);

  return (
    <div>
      {!loading && historical.length > 0 && historical[0] && (
        <ChartWrapper>
          <span className="symbol">{symbol}</span>

          <HighchartsReact
            highcharts={Highcharts}
            constructorType={"stockChart"}
            options={options(selectedStockHistoricalData)}
          />
        </ChartWrapper>
      )}
      {error && error.message}
    </div>
  );
};

export default CandleStickCharts;
