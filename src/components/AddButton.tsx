import React, { FC } from "react";
import styled from "styled-components/macro";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const StyledAddButton = styled(Button)`
  && {
    font-family: Bebas Neue;
    float: right;
    font-size: 20px;
    color: white;
    border: 1px solid white;
    border-radius: 4px;
    padding: 8px 20px;
    :hover {
      background: rgba(255, 255, 255, 0.2);
    }
    .MuiButton-label {
      line-height: 1;
    }
  }
`;
type AddButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const AddButton: FC<AddButtonProps> = ({ onClick }) => {
  return (
    <StyledAddButton onClick={onClick}>
      <AddIcon />
      Add Symbol
    </StyledAddButton>
  );
};

export default AddButton;
