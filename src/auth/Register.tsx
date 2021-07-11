import React, { useState, useEffect, ChangeEvent, MouseEvent } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/actions/auth";
import TextField from "@material-ui/core/TextField";
import ButtonSubmit from "../components/ButtonSubmit";
import StyledLink from "../components/StyledLink";
import StyledPaper from "./StyledPaper";
import StyledForm from "./StyledForm";
import Menu from "../components/Menu";

interface State {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  showPassword: boolean;
}

interface RootState {
  register: {
    loading: boolean;
    error: string;
    registered: boolean;
  };
}

const Register = () => {
  const dispath = useDispatch();
  const history = useHistory();
  const [values, setValues] = useState<State>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
  });

  const error = useSelector((state: RootState) => state.register.error);
  const registered = useSelector(
    (state: RootState) => state.register.registered
  );

  useEffect(() => {
    if (registered) history.push("/login");
  });

  const handleChange =
    (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const newUser = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    dispath(registerUser(newUser));
  };

  return (
    <>
      {" "}
      <Menu headerText="Stock Market Tracker" />
      <StyledPaper title="Register">
        <StyledForm onSubmit={handleSubmit}>
          <label>Name</label>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange("name")}
          />
          <label>Email</label>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange("email")}
          />
          <label>Password</label>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange("password")}
          />
          <label>Confirm Password</label>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange("confirmPassword")}
          />
          <div className="buttons">
            <ButtonSubmit>Register</ButtonSubmit>
            <StyledLink to="/login">Sign in</StyledLink>
          </div>
        </StyledForm>
      </StyledPaper>
    </>
  );
};

export default Register;
