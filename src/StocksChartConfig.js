export default function options(data) {
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
        width: 900,
        backgroundColor: "transparent",
        style: {
          fontFamily: "'Open Sans', sans-serif",
        },
      },
      colors: ["#F74AC1", "#31AFD6", "#F5A623", "#23D984"],
      rangeSelector: {
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
      
      },
  
      series: [
        {
          name: data[0].name,
          data: data[0].data,
        },
        {
          name: data[1].name,
          data: data[1].data,
        },
        {
          name: data[2].name,
          data: data[2].data,
        },
        {
          name: data[3].name,
          data: data[3].data,
        },
      ],
    };
  }