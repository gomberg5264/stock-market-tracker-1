import React, { useEffect, useState } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import options from "./StocksChartConfig";
import styled from "styled-components";
const ChartWrapper = styled.div`
.highcharts-scrollbar-track{
  fill:transparent;
  stroke:grey;
  rx:10;
  ry:10;

}
.highcharts-scrollbar-thumb{
  rx:10;
  ry:10;
  fill:pink;
}
.highcharts-scrollbar-arrow,
.highcharts-scrollbar-button{
  display:none
}
.highcharts-credits{
  display:none
}
`;
function StocksChart() {
  const [optionsData, setOptionsData] = useState(null);
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_SANDBOX_BASE_URL}stable/stock/market/batch?symbols=aapl,goog,msft,tsla&types=intraday-prices&token=${process.env.REACT_APP_SANDBOX_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        const result = [];
        for (let tick in data) {
          const priceAndTimestamp = data[tick]["intraday-prices"].map(
            (price) => {
              return [
                new Date(`${price.date} ${price.minute}`).getTime(),
                price.close,
              ];
            }
          );
          result.push({
            name: tick,
            data: priceAndTimestamp,
          });
        }
        setOptionsData(options(result));
      });
  }, []);

  return (
    <ChartWrapper>
      {optionsData && (
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={"stockChart"}
          options={optionsData}
        />
      )}
    </ChartWrapper>
  );
}

export default StocksChart;
