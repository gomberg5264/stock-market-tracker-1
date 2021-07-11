import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    pink: string;
    blue: string;
  }
}

export const darkTheme: DefaultTheme = {
  pink: "#d6126f",
  blue: "#1C3350",
};
