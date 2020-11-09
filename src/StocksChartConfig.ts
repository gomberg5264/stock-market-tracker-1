export default function options(
  data: Array<{ name: string; data: Array<object> }>
) {
  return {
    xAxis: {
      gapGridLineWidth: 0,
      labels: {
        style: {
          color: "white",
          fontSize: 13,
        },
      },
    },
    yAxis: {
      gridLineWidth: 0,
      gapGridLineWidth: 0,
      opposite: false,
      labels:false,
    },
    chart: {
      width: 1200,
      height: 380,
      backgroundColor: "transparent",
      style: {
        fontFamily: "'Open Sans', sans-serif",
      },
    },
    navigator: {
      adaptToUpdatedData: true,
      maskFill: 'rgba(255, 255, 255, 0.1)',
      maskInside: true,
      outlineWidth: 0,
      handles: {
        backgroundColor: '#FFFFFF',
        borderColor: '#D1D1D1',
      },
      series: {
        type: 'areaspline',
        fillOpacity: 1,
        lineWidth: 0,
        color:'white',
      },
      xAxis: {
        gridLineWidth: 0,
        labels: {
          enabled: false
        }
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
          color: "lightblue",
          width: 5,
        },
      },
      {
        name: data[1].name,
        data: data[1].data,
        color: "#31AFD6",
        shadow: {
          color: "#31AFD6",
          width: 5,
        },
      },
      {
        name: data[2].name,
        data: data[2].data,
        color: "#F5A623",
        shadow: {
          color: "#F5A623",
          width: 5,
        },
      },
      {
        name: data[3].name,
        data: data[3].data,
        color: "#9999FF",
        shadow: {
          color: "#9999FF",
          width: 5,
        },
      },
      {
        name: data[4].name,
        data: data[4].data,
        color: "#75f3c5",
        shadow: {
          color: "#75f3c5",
          width: 5,
        },
      },
      {
        name: data[5].name,
        data: data[5].data,
        color: "orange",
        shadow: {
          color: "orange",
          width: 5,
        },
      },
    ],
  };
}
