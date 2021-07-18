import React from "react";
import Menu from "./Menu";
import PageWrapper from "./PageWrapper";
import CandleStickCharts from "./CandleStickChart";
import { Grid } from "@material-ui/core";
interface RootState {
  intradayPrices: {
    prices: any;
    loading: boolean;
    error: { message: string };
  };
}
const symbols = ["msft", "ibm", "hpq", "googl", "coke", "fb", "xlk"];
const Dashboard = () => {
  return (
    <PageWrapper home={false}>
      <Menu headerText="Historical Prices" />
      <Grid justify="center" container>
        {symbols.map((symbol: string) => (
          <Grid item xs={5}>
            <CandleStickCharts symbol={symbol} />
          </Grid>
        ))}
      </Grid>
    </PageWrapper>
  );
};

export default Dashboard;
