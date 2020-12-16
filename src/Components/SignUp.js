import React from "react";
import { Header, Logo, SignIn } from "../Styles/HomeStyles";
import { Section, FormContainer } from "../Styles/SignUpStyles";
import SignUpStepper from "./SignUpStepper";
import { Link } from "react-router-dom";
function SignUp() {
  return (
    <div>
      <Header>
        <Link to="/">
          <Logo
            src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png"
            alt="netflix"
          />
        </Link>
        <Link to="/login">
          <SignIn>Sign In</SignIn>
        </Link>
      </Header>
      <Section>
        <FormContainer>
          <SignUpStepper />
        </FormContainer>
      </Section>
    </div>
  );
}

export default SignUp;
