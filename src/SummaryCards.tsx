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
      {loading && <p style={{ color: "white" }}>Loading...</p>}
      {!loading &&
        quoteData.map((q: { previousClose: number }, idx: number) => (
          <Col className="pl-0 pr-0">
            <StyledSummaryCard
              key={idx}
              symbol={symbols[idx]}
              currentPrice={currentPrices[idx]}
              previousClose={q["previousClose"]}
            />
          </Col>
        ))}
      {error && error.message}
    </Row>
  );
};

export default SummaryCards;
