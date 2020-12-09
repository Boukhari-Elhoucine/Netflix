import React from "react";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { Container, FormContainer, Submit, H2 } from "../Styles/SignInStyles";
import { Logo } from "../Styles/HomeStyles";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { formTheme, useStyles } from "../Styles/Theme";
function SignIn() {
  const classes = useStyles();
  const Schema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });
  return (
    <ThemeProvider theme={formTheme}>
      <Container>
        <Link to="/">
          <Logo
            src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png"
            alt="netflix"
          />
        </Link>
        <FormContainer>
          <H2>Sign In</H2>
          <Formik
            initialValues={{ email: "", password: "", remember: false }}
            validationSchema={Schema}
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
              <MyCheckBox />
              <Submit>Sign In</Submit>
            </Form>
          </Formik>
        </FormContainer>
      </Container>
    </ThemeProvider>
  );
}

export function MyCheckBox() {
  return <FormControlLabel control={<Checkbox />} label="Remember me" />;
}
export default SignIn;
