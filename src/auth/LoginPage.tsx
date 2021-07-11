import React, { useState, useEffect, ChangeEvent } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/actions/auth";
import { TextField } from "@material-ui/core";
import ButtonSubmit from "../components/ButtonSubmit";
import StyledLink from "../components/StyledLink";
import StyledPaper from "./StyledPaper";
import StyledForm from "./StyledForm";
import Menu from "../components/Menu";
interface State {
  email: string;
  password: string;
  showPassword: boolean;
}

interface LoadRootState {
  loadUser: {
    token: string;
    loading: boolean;
    error: string;
    isAuthenticated: boolean;
  };
}
interface LoginRootState {
  login: {
    loading: boolean;
    error: string;
    isAuthenticated: boolean;
  };
}

const LoginPage = () => {
  const dispath = useDispatch();
  const history = useHistory();
  const [values, setValues] = useState<State>({
    email: "",
    password: "",
    showPassword: false,
  });

  const isAuthenticatedLogin = useSelector(
    (state: LoginRootState) => state.login.isAuthenticated
  );
  const isAuthenticatedLoadUser = useSelector(
    (state: LoadRootState) => state.loadUser.isAuthenticated
  );
  const loadingLogin = useSelector(
    (state: LoginRootState) => state.login.loading
  );
  const loadingLoadUser = useSelector(
    (state: LoadRootState) => state.loadUser.loading
  );
  const error = useSelector((state: LoginRootState) => state.login.error);

  useEffect(() => {
    if (isAuthenticatedLogin || isAuthenticatedLoadUser)
      history.push("/dashboard");
  }, [isAuthenticatedLogin, isAuthenticatedLoadUser]);

  const handleChange =
    (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const user = {
      email: values.email,
      password: values.password,
    };
    dispath(loginUser(user));
    history.push("/dashboard");
  };

  return (
    <>
      <Menu headerText="Stock Market Tracker" />
      {!loadingLogin ||
        (!loadingLoadUser && (
          <StyledPaper title="Sign in">
            <StyledForm onSubmit={handleSubmit}>
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
              <div className="buttons">
                <ButtonSubmit>Sign In</ButtonSubmit>
                <StyledLink to="/register">Register</StyledLink>
              </div>
            </StyledForm>
          </StyledPaper>
        ))}
    </>
  );
};

export default LoginPage;
