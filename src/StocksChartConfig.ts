export default function options(
  data: Array<{ name: string; data: Array<object> }>
) {
  return {
    title: {
      text: "AAPL-GGOG-MSFT-TSLA",
      style: {
        color: "white",
        fontWeight: "bold",
      },
    },
    subtitle: {
      text: "stock price by minute",
      style: {
        color: "grey",
        fontWeight: "bold",
      },
    },
    xAxis: {
      gapGridLineWidth: 0,
      labels: {
        style: {
          color: "#434271",
          fontSize: 13,
        },
      },
    },
    yAxis: {
      gridLineWidth: 0,
      gapGridLineWidth: 0,
      opposite: false,
      labels: {
        style: {
          color: "#434271",
          fontSize: 13,
        },
      },
    },
    chart: {
      width: 680,
      height: 450,
      backgroundColor: "transparent",
      style: {
        fontFamily: "'Open Sans', sans-serif",
      },
    },
    plotOptions: {
      series: {
        connectNulls: true,
        marker: {
          enabled: true,
          radius: 2,
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
          type: "hour",
          count: 1,
          text: "1h",
        },
        {
          type: "all",
          count: 1,
          text: "All",
        },
      ],
      selected: 0,
      inputEnabled: false,
      labelStyle: {
        color: "transparent",
      },
    },

    series: [
      {
        name: data[0].name,
        data: data[0].data,
        color: "#ED2B88",
        shadow: {
          color: "#ED2B88",
          width: 4,
        },
      },
      {
        name: data[1].name,
        data: data[1].data,
        color: "#31AFD6",
        shadow: {
          color: "#31AFD6",
          width: 10,
        },
      },
      {
        name: data[2].name,
        data: data[2].data,
        color: "#F5A623",
        shadow: {
          color: "#F5A623",
          width: 10,
        },
      },
      {
        name: data[3].name,
        data: data[3].data,
        color: "#9933CC",
        shadow: {
          color: "#9933CC",
          width: 10,
        },
      },
    ],
  };
}
