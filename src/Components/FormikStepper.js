import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Button, Step, Stepper, StepLabel } from "@material-ui/core";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import { Formik, Form } from "formik";
import { formTheme, Buttons, StepperContainer } from "../Styles/SignUpStyles";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { SignUp } from "../store/actions/authActions";
function FormikStepper({ children, ...props }) {
  const history = useHistory();
  const childrenArray = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const current = childrenArray[step];
  const elements = useElements();
  const stripe = useStripe();
  return (
    <ThemeProvider theme={formTheme}>
      <Formik
        {...props}
        validationSchema={current.props.validationSchema}
        onSubmit={async (values) => {
          if (step === childrenArray.length - 1) {
            if (!stripe) {
              return;
            } else {
              props.pay(stripe, elements, values, history);
            }
          } else {
            setStep((step) => step + 1);
          }
        }}
      >
        <Form>
          <StepperContainer>
            <Stepper alternativeLabel activeStep={step}>
              {childrenArray.map((childe) => (
                <Step key={childe.props.label}>
                  <StepLabel>{childe.props.label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </StepperContainer>
          {current}
          <Buttons>
            {step > 0 ? (
              <Button
                variant="contained"
                color="primary"
                onClick={() => setStep((step) => step - 1)}
                style={{ marginRight: "10px" }}
              >
                Back
              </Button>
            ) : null}
            <Button
              color="primary"
              type="submit"
              variant="contained"
              fullWidth={step === 0 ? true : false}
            >
              Continue
            </Button>
          </Buttons>
        </Form>
      </Formik>
    </ThemeProvider>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    pay: (stripe, elements, creds, history) =>
      dispatch(SignUp(stripe, elements, creds, history)),
  };
};
export default connect(null, mapDispatchToProps)(FormikStepper);
