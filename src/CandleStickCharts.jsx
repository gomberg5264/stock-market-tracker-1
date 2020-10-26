import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import options from "./CandleStickChartConfig";
import styled from "styled-components";

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

const volColours = {
  AAPL: "#F74AC1",
  GOOG: "#31AFD6",
  MSFT: "#F5A623",
  TSLA: "#23D984",
};
function CandleStickCharts() {
  const [historicalData, setHistoricalData] = useState([]);
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_SANDBOX_BASE_URL}stable/stock/market/batch?symbols=aapl,goog,msft,tsla&types=chart&range=6m&token=${process.env.REACT_APP_SANDBOX_API_KEY}`
    )
      .then((res) => res.json())
      .then((historicalData) => {
        const result = [];
        for (let name in historicalData) {
          const volumeColour = volColours[name];
          const volume = historicalData[name].chart.map((el) => {
            return [new Date(el.date).getTime(), el.volume];
          });
          const ohlc = historicalData[name].chart.map((el) => {
            //timestamp open high low close
            return [
              new Date(el.date).getTime(),
              el.open,
              el.high,
              el.low,
              el.close,
            ];
          });
          result.push({
            name,
            ohlc,
            volume,
            volumeColour,
          });
        }
        setHistoricalData(result);
      });
  }, []);
  return (
    <div>
      {historicalData[0] && (
        <>
          <Row>
            <Col key={historicalData[0].name}>
              <ChartWrapper>
                <HighchartsReact
                  highcharts={Highcharts}
                  constructorType={"stockChart"}
                  options={options(historicalData[0])}
                />{" "}
              </ChartWrapper>
            </Col>
            <Col key={historicalData[1].name}>
              <ChartWrapper>
                <HighchartsReact
                  highcharts={Highcharts}
                  constructorType={"stockChart"}
                  options={options(historicalData[1])}
                />
              </ChartWrapper>
            </Col>
          </Row>
          <Row>
            <Col key={historicalData[2].name}>
              <ChartWrapper>
                <HighchartsReact
                  highcharts={Highcharts}
                  constructorType={"stockChart"}
                  options={options(historicalData[2])}
                />
              </ChartWrapper>
            </Col>
            <Col key={historicalData[3].name}>
              <ChartWrapper>
                <HighchartsReact
                  highcharts={Highcharts}
                  constructorType={"stockChart"}
                  options={options(historicalData[3])}
                />
              </ChartWrapper>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
}

export default CandleStickCharts;
