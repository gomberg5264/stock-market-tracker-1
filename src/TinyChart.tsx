import React, { FC } from "react";

type TinyChartProps = {
  positive: boolean;
  symbol: string;
};

let volColours = {
  AAPL: "#ED2B88",
  GOOG: "#31AFD6",
  MSFT: "#F5A623",
  TSLA: "#9933CC",
};

const TinyChart: FC<TinyChartProps> = ({ positive, symbol }) => {
  return (
    <svg
      width={100}
      height={50}
      viewBox={"-10 20 130 50"}
      style={{ overflow: "visible", margin: "5px" }}
    >
      <defs>
        <radialGradient
          id="gradient1"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          <stop offset="0%" stop-color={(volColours as any)[symbol]} />
          <stop offset="100%" stop-color="#1F1C43" />
        </radialGradient>
      </defs>
      {positive && (
        <g transform={"translate(-35 -10)"}>
          <circle
            cx={140}
            cy={40}
            r={60}
            fill="url(#gradient1)"
            opacity={0.4}
          />
          <path
            d="M0,80 C10,50 30,30 50,50 C50,50 70,90 100,30"
            fill="none"
            stroke={(volColours as any)[symbol]}
            opacity={0.7}
            strokeWidth={6}
            transform="translate(50,0)"
          />
        </g>
      )}
      {!positive && (
        <g transform={"translate(-35 -10)"}>
          <circle
            cx={110}
            cy={60}
            r={50}
            fill="url(#gradient1)"
            opacity={0.4}
          />
          <path
            d="M0,30 C10,50 30,30 50,50 C50,50 60,60 70,70"
            fill="none"
            stroke={(volColours as any)[symbol]}
            opacity={0.7}
            strokeWidth={6}
            transform="translate(50,0)"
          />
        </g>
      )}
    </svg>
  );
};

export default TinyChart;
