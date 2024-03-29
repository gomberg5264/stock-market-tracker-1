import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Menu from "./Menu";
import PageWrapper from "./PageWrapper";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import options from "./StocksChartConfig";
import { getIntradayPrices } from "../redux/actions/stocks";
import styled from "styled-components/macro";
import SummaryCards from "./SummaryCards";

const ChartWrapper = styled.div`
  background: transparent;
  text-align: -webkit-center;
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
  .highcharts-data-table tr:hover {
    background: #f1f7ff;
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
  intradayPrices: {
    prices: any;
    loading: boolean;
    error: { message: string };
  };
}
const stocks = ["msft", "ibm", "hpq", "coke", "fb", "xlk", "googl"];

const ChartPage = () => {
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
    dispatch(getIntradayPrices(stocks));
  }, []);

  return (
    <PageWrapper home={false}>
      <Menu headerText="Prices" />
      {!loading && intradayData.length > 0 && (
        <ChartWrapper>
          <SummaryCards currentPrices={currentPrices} />
          <HighchartsReact
            highcharts={Highcharts}
            constructorType={"stockChart"}
            options={options(intradayPrices)}
          />
        </ChartWrapper>
      )}
      {error && error.message}
    </PageWrapper>
  );
};

export default ChartPage;
