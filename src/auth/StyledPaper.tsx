import React, { FC } from "react";
import {
  Container,
  Paper,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import styled from "styled-components/macro";

type PaperProps = {
  title: string;
};

const StyledSignPaper = styled(Paper)`
  && {
    background: linear-gradient(180deg, #1c3350 0%, rgba(0, 0, 0, 0) 100%);
    box-shadow: 0px 2px 12px 4px rgb(255 255 255 / 10%);
    color: white;
    padding: 26px 40px;
    text-align: left;
    width: 350px;
    margin-bottom: 50px;
    .title {
      text-align: center;
      font-size: 50px;
      margin-bottom: 30px;
    }
    .MuiCheckbox-root {
      color: white;
    }
    .Mui-checked {
      color: ${({ theme }) => theme.pink};
    }

    @-webkit-keyframes swing-in-top-fwd {
      0% {
        -webkit-transform: rotateX(-100deg);
        transform: rotateX(-100deg);
        -webkit-transform-origin: top;
        transform-origin: top;
        opacity: 0;
      }
      100% {
        -webkit-transform: rotateX(0deg);
        transform: rotateX(0deg);
        -webkit-transform-origin: top;
        transform-origin: top;
        opacity: 1;
      }
    }
    @keyframes swing-in-top-fwd {
      0% {
        -webkit-transform: rotateX(-100deg);
        transform: rotateX(-100deg);
        -webkit-transform-origin: top;
        transform-origin: top;
        opacity: 0;
      }
      100% {
        -webkit-transform: rotateX(0deg);
        transform: rotateX(0deg);
        -webkit-transform-origin: top;
        transform-origin: top;
        opacity: 1;
      }
    }

    -webkit-animation: swing-in-top-fwd 0.5s
      cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
    animation: swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)
      both;
  }
`;

const StyledPaper: FC<PaperProps> = ({ children, title }) => {
  return (
    <Container component="main" maxWidth="xs">
      <StyledSignPaper>
        <div className="title">{title}</div>

        {children}
        <FormControlLabel
          control={<Checkbox value="allowExtraEmails" color="primary" />}
          label="I agree to  the terms and conditions of Privacy Policy."
        />
      </StyledSignPaper>
    </Container>
  );
};

export default StyledPaper;
