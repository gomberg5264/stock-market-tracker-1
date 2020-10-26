export default function options(data: {
  name: string;
  ohlc: Array<object>;
  volume: Array<object>;
  volumeColour: string;
}) {
  return {
    chart: {
      width:250,
      height:295,
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
      ],
      selected: 0,
      inputEnabled: false,
      labelStyle: {
        color: "transparent",
      },
    },

    title: {
      text: `${data.name} Historical`,
      style: {
        color: "white",
        fontWeight: "bold",
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
        lineColor: data.volumeColour,
        upLineColor: "silver", 
        upColor: "silver",
      },
    },

    series: [
      {
        type: "candlestick",
        name: data.name,
        data: data.ohlc,
        color: data.volumeColour,
        shadow: {
          color: data.volumeColour,
          width: 4,
        },
      },
      {
        type: "column",
        name: "Volume",
        data: data.volume,
        yAxis: 1,
        color: data.volumeColour,
        shadow: {
          color: data.volumeColour,
          width: 4,
        },
      },
    ],
  };
}
