import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    pink: string;
    green: string;
    blue: string;
    purple: string;
    yellow: string;
  }
}

export const darkTheme: DefaultTheme = {
  pink: "#d6126f",
  green: "#A4FF49",
  blue: "#1C3350",
  purple: "#49418C",
  yellow: "#F9A35F",
};
