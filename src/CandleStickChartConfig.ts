export default function options(data: {
  name: string;
  ohlc: Array<object>;
  volume: Array<object>;
}) {
  return {
    chart: {
      width:1200,
      height:380,
      backgroundColor: "transparent",
      style: {
        fontFamily: "'Open Sans', sans-serif",
      },
    },
    navigator: {
      enabled: false
  },
    rangeSelector: {
      buttonTheme: {
        fill: "none",
        stroke: "none",
        r: 10,
        style: {
          color: "white",
          fontWeight: "bold",
        },
        states: {
          hover: {
            fill: "grey",
          },
          select: {
            fill: "#31AFD6",
            style: {
              color: "white",
            },
          },
        },
      },
      buttons: [
        {
          type: "month",
          count: 1,
          text: "1m",
        },
        {
          type: "month",
          count: 3,
          text: "3m",
        },
        {
          type: "month",
          count: 6,
          text: "6m",
        },
        {
          type: "year",
          count: 1,
          text: "1y",
        },
      ],
      selected: 1,
      inputEnabled: false,
      labelStyle: {
        color: "transparent",
      },
    },
    xAxis: {
      gapGridLineWidth: 0,
      labels: {
        style: {
          color: "white",
          fontSize: 13,
        },
      },
    },
    yAxis: [
      {
        labels: {
          align: "right",
          x: -3,
          style: {
            color: "#434271",
            fontSize: 13,
          },
        },
        visible:false,
        title: {
          text: "OHLC",
        },
        height: "60%",
        lineWidth: 2,
        resize: {
          enabled: true,
        },
      },
      {
        labels: {
          align: "right",
          x: -3,
          style: {
            color: "#434271",
            fontSize: 13,
          },
        },
        visible:false,
        title: {
          text: "Volume",
        },
        top: "65%",
        height: "35%",
        offset: 0,
        lineWidth: 2,
      },
    ],

    tooltip: {
      split: true,
    },

    plotOptions: {
      candlestick: {
        lineColor: "#18DFF6",
        upLineColor: "#FF4088", 
        upColor: "transparent",
      },
    },

    series: [
      {
        type: "candlestick",
        name: data.name,
        data: data.ohlc,
        color: "transparent",
        shadow: {
          color: "#18DFF6",
          width: 4,
        },
      },
      {
        type: "column",
        name: "Volume",
        data: data.volume,
        yAxis: 1,
        color: "#75f3c5",
        shadow: {
          color: "#75f3c5",
          width: 4,
        },
      },
    ],
  };
}
