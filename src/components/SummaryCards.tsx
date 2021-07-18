import React, { FC, useEffect } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { getQuote } from "../redux/actions/quote";
import styled from "styled-components/macro";

type SummaryCardsProps = {
  currentPrices: Array<{ name: string; currentPrice: number }>;
};

interface RootState {
  quote: {
    data: Array<object>;
    loading: boolean;
    error: { message: string };
  };
}

const Wrapper = styled.div`
  justify-content: start;
  width: 80vw;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  height: 220px;
  align-items: center;
  ::-webkit-scrollbar {
    width: 3px;
    height: 10px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
`;

const symbols = ["msft", "ibm", "hpq", "googl", "coke", "fb", "xlk"];

const SummaryCards: FC<SummaryCardsProps> = ({ currentPrices }) => {
  const dispatch = useDispatch();
  const quoteData: any = useSelector((state: RootState) => state.quote.data);
  const loading = useSelector((state: RootState) => state.quote.loading);
  const error = useSelector((state: RootState) => state.quote.error);

  useEffect(() => {
    dispatch(getQuote(symbols));
  }, []);
  console.log(currentPrices.length);
  console.log(quoteData);

  return (
    <Wrapper>
      {loading && <div />}
      {!loading &&
        currentPrices.length > 0 &&
        quoteData.map((q: any) => <Card data={q} />)}
      {error && error.message}
    </Wrapper>
  );
};

export default SummaryCards;
