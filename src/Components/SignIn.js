import React from "react";
import { Formik, Form, Field } from "formik";
import { TextField, Checkbox } from "formik-material-ui";
import { Container, FormContainer, Submit, H2 } from "../Styles/SignInStyles";
import { Logo } from "../Styles/HomeStyles";
import * as Yup from "yup";
import { Link } from "react-router-dom";
function SignIn() {
  const Schema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });
  return (
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
          initialValues={{ email: "", password: "" }}
          validationSchema={Schema}
        >
          <Form>
            <Field name="email" label="Email" component={TextField} />
            <Field
              name="password"
              label="Password"
              type="password"
              component={TextField}
            />
            <Submit>Sign In</Submit>
          </Form>
        </Formik>
      </FormContainer>
    </Container>
  );
}

export default SignIn;
