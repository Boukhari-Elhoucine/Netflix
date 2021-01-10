import React from "react";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import {
  Container,
  FormContainer,
  Submit,
  H2,
  ErrorBox,
  ErrorText,
  Box,
  Header,
  Text,
} from "../Styles/SignInStyles";
import { Logo } from "../Styles/HomeStyles";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { formTheme, useStyles } from "../Styles/Theme";
import { connect } from "react-redux";
import { Login } from "../store/actions/authActions";
import { useHistory } from "react-router-dom";
function SignIn({ SignIn, errors, loading }) {
  const classes = useStyles();
  const history = useHistory();
  const Schema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });
  return (
    <ThemeProvider theme={formTheme}>
      <Container>
        <Header>
          <Link to="/">
            <Logo
              src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png"
              alt="netflix"
            />
          </Link>
        </Header>
        <Box>
          <FormContainer>
            <H2>Sign In</H2>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={Schema}
              onSubmit={async (values) => {
                return await SignIn(values, history);
              }}
            >
              <Form>
                <Field
                  name="email"
                  label="Email"
                  component={TextField}
                  variant="filled"
                  className={classes.root}
                />
                <Field
                  name="password"
                  label="Password"
                  type="password"
                  variant="filled"
                  component={TextField}
                  className={classes.root}
                />
                {errors && (
                  <ErrorBox>
                    <ErrorText>{errors}</ErrorText>
                  </ErrorBox>
                )}
                <Submit type="submit" disabled={loading}>
                  Sign In
                </Submit>
                <Text>
                  new to netflix
                  <Link
                    to="/signup"
                    style={{ color: "red", textDecoration: "none" }}
                  >
                    {" "}
                    create account here
                  </Link>
                </Text>
              </Form>
            </Formik>
          </FormContainer>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    SignIn: (creds, history) => dispatch(Login(creds, history)),
  };
};
const mapStateToProps = (state) => {
  return {
    errors: state.auth.login_err,
    loading: state.auth.loading,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
