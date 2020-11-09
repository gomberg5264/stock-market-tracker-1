import React, { useEffect } from "react";
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
`;
interface RootState {
  historicalData: {
    data: any;
    loading: boolean;
    error: { message: string };
  };
}
interface StockRootState {
  stock: { name: string };
}

const CandleStickCharts = () => {
  const dispatch = useDispatch();
  const historical = useSelector(
    (state: RootState) => state.historicalData.data
  );
  const stockName = useSelector((state: StockRootState) => state.stock.name);

  const selectedStockHistoricalData = historical.filter(
    (stock: any) => stock.name === stockName
  )[0];

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
      {!loading && historical.length > 0 && historical[0] && (
        <>
          <ChartWrapper>
            <HighchartsReact
              highcharts={Highcharts}
              constructorType={"stockChart"}
              options={options(selectedStockHistoricalData)}
            />
          </ChartWrapper>
        </>
      )}
      {error && error.message}
    </div>
  );
};

export default CandleStickCharts;
