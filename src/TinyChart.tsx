import React, { FC } from "react";

type TinyChartProps = {
  positive: boolean;
  symbol: string;
};

let volColours = {
  MCD: "#9999FF",
  COKE: "#18DFF6",
  FB: "#FFCC5C",
  RACE: "#9999FF",
  MSFT: "#18DFF6",
  DG: "#FFCC5C",
};

const TinyChart: FC<TinyChartProps> = ({ positive, symbol }) => {
  return (
    <svg
      width={100}
      height={50}
      viewBox={"-10 20 130 50"}
      style={{ overflow: "visible", margin: "5px", marginTop: "13px" }}
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
          <stop offset="10%" stopColor={"#7dddfd"} />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      {positive && (
        <g transform={"translate(15,-10)"}>
          {/* <path
            d="M0,80 C10,50 30,30 50,50 C50,50 70,90 100,30"
            fill="none"
            stroke={(volColours as any)[symbol]}
            opacity={0.9}
            strokeWidth={6}
            transform="translate(50,0)"
          /> */}
          <circle
            cx={100}
            cy={40}
            r={60}
            fill="url(#gradient1)"
            opacity={0.4}
          />
          <circle
            cx={100}
            cy={40}
            r={5}
            fill={(volColours as any)[symbol]}
            opacity={0.9}
          />
          <circle
            cx={90}
            cy={20}
            r={5}
            fill={(volColours as any)[symbol]}
            opacity={0.9}
          />
          <circle
            cx={70}
            cy={60}
            r={5}
            fill={(volColours as any)[symbol]}
            opacity={0.9}
          />
          <circle
            cx={50}
            cy={30}
            r={5}
            fill={(volColours as any)[symbol]}
            opacity={0.9}
          />
          <circle
            cx={30}
            cy={70}
            r={5}
            fill={(volColours as any)[symbol]}
            opacity={0.9}
          />
          <circle
            cx={10}
            cy={50}
            r={5}
            fill={(volColours as any)[symbol]}
            opacity={0.9}
          />
          <circle
            cx={0}
            cy={80}
            r={5}
            fill={(volColours as any)[symbol]}
            opacity={0.9}
          />
          <path
            d="M0,80 L10,50 L30,70 L50,30 L70,60 L90,20 L100,40"
            fill="none"
            stroke={(volColours as any)[symbol]}
            opacity={0.9}
            strokeWidth={4}
          />
        </g>
      )}
      {!positive && (
        <g transform={"translate(15 -10)"}>
          <circle cx={70} cy={70} r={50} fill="url(#gradient1)" opacity={0.4} />
          {/* <path
            d="M0,30 C10,50 30,30 50,50 C50,50 60,60 70,70"
            fill="none"
            stroke={(volColours as any)[symbol]}
            opacity={0.9}
            strokeWidth={6}
            transform="translate(50,0)"
          /> */}
          <path
            d="M0,30 L10,50 L30,30 L70,70"
            fill="none"
            stroke={(volColours as any)[symbol]}
            opacity={0.9}
            strokeWidth={6}
          />
          <circle
            cx={0}
            cy={30}
            r={5}
            fill={(volColours as any)[symbol]}
            opacity={0.9}
          />
          <circle
            cx={10}
            cy={50}
            r={5}
            fill={(volColours as any)[symbol]}
            opacity={0.9}
          />
          <circle
            cx={30}
            cy={30}
            r={5}
            fill={(volColours as any)[symbol]}
            opacity={0.9}
          />
          <circle
            cx={70}
            cy={70}
            r={5}
            fill={(volColours as any)[symbol]}
            opacity={0.9}
          />
        </g>
      )}
    </svg>
  );
};

export default TinyChart;
