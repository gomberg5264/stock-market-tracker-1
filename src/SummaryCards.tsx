import React, { FC, useEffect } from "react";
import StyledSummaryCard from "./StyledSummaryCard";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getQuote } from "./redux/actions/quote";

type SummaryCardsProps = {
  currentPrices: Array<number>;
};

interface RootState {
  quote: {
    data: Array<object>;
    loading: boolean;
    error: { message: string };
  };
}

const symbols = ["MCD", "COKE", "FB", "RACE", "MSFT", "DG"];

const SummaryCards: FC<SummaryCardsProps> = ({ currentPrices }) => {
  const dispatch = useDispatch();
  const quoteData: any = useSelector((state: RootState) => state.quote.data);
  const loading = useSelector((state: RootState) => state.quote.loading);
  const error = useSelector((state: RootState) => state.quote.error);

  useEffect(() => {
    dispatch(getQuote());
  }, []);

  return (
    <Row className="m-0" style={{ width: "100%", flexWrap: "unset" }}>
      {loading && <div />}
      {!loading &&
        quoteData.map(
          (q: { changePercent: string; companyName: string }, idx: number) => (
            <Col key={idx} className="pl-0 pr-0">
              <StyledSummaryCard
                symbol={symbols[idx]}
                currentPrice={currentPrices[idx]}
                changePercent={q["changePercent"]}
                companyName={q["companyName"]}
              />
            </Col>
          )
        )}
      {error && error.message}
    </Row>
  );
};

export default SummaryCards;
