import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import styled from "styled-components/macro";

const StyledTable = styled(Table)`
  && {
    th {
      background-color: rgba(255, 255, 255, 0.2);
      color: white;
      font-family: "Bebas Neue", cursive;
      font-size: 28px;
      border: none;
      :first-child {
        border-radius: 4px 0 0 4px;
      }
      :nth-child(4) {
        border-radius: 0 4px 4px 0;
      }
    }
    td {
      color: white;
      font-family: Helvetica Neue;
      font-size: 16px;
      border: none;
    }
  }
`;

type CellProps = {
  positive: boolean;
};

const StyledCell = styled(TableCell)<CellProps>`
  && {
    color: ${({ positive, theme }) =>
      positive ? theme.green : theme.pink} !important;
  }
`;

const WatchListTable = (quote: any) => {
  return (
    <div>
      <TableContainer>
        <StyledTable aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">SYMBOL</TableCell>
              <TableCell align="left">NAME</TableCell>
              <TableCell align="left">PRICE</TableCell>
              <TableCell align="left">% CHANGE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {quote.quote[0] &&
              quote.quote.map((row: any, idx: number) => (
                <TableRow key={idx}>
                  <TableCell align="left">{row.symbol}</TableCell>
                  <TableCell align="left">{row.companyName}</TableCell>
                  <TableCell align="left">${row.latestPrice}</TableCell>
                  <StyledCell align="left" positive={row.changePercent > 0}>
                    {row.changePercent}
                  </StyledCell>
                </TableRow>
              ))}
          </TableBody>
        </StyledTable>
      </TableContainer>
    </div>
  );
};

export default WatchListTable;
