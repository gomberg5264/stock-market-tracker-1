import React, { FC } from "react";
import styled from "styled-components/macro";

const UserForm = styled.form`
  form {
    width: 100%;
  }
  label {
    font-size: 18px;
  }
  .buttons {
    margin: 30px 0;
  }
  .MuiTextField-root {
    background: white;
    border-radius: 8px;
    margin: 8px 0px 16px 0px;
  }
  .MuiFormControlLabel-label,
  .MuiFormControlLabel-label {
    color: white;
    font-family: "Bebas Neue", cursive;
  }
`;

//backdrop-filter: blur(10px);
//box-shadow: 20px 20px 40px -6px rgba(0,0,0,0.2);
//transition: all 0.2s ease-in-out;
//text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
// &:hover {
//   background: rgba(255,255,255,0.1);
//   box-shadow: 4px 4px 60px 8px rgba(0,0,0,0.2);
// }

// &[type="email"],
// &[type="password"] {
  
//   &:focus {
//     background: rgba(255,255,255,0.1);
//     box-shadow: 4px 4px 60px 8px rgba(0,0,0,0.2);
//   }

type FormProps = {
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
};

const StyledForm: FC<FormProps> = ({ children, onSubmit }) => {
  return <UserForm onSubmit={onSubmit}>{children}</UserForm>;
};

export default StyledForm;
