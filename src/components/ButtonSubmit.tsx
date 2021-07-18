import React, { FC } from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components/macro";

const StyledButton = styled(Button)`
  && {
    color: white;
    background: ${({ theme }) => theme.yellow};
    font-size: 24px;
    font-family: "Bebas Neue", cursive;
    width: 200px;
    border-radius: 25px;
    margin-right: 20px;
    :hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }
`;

type ButtonProps = {
  href?: string;
};

const ButtonSubmit: FC<ButtonProps> = ({ children, href }) => {
  return (
    <StyledButton type="submit" href={href}>
      {children}
    </StyledButton>
  );
};

export default ButtonSubmit;
