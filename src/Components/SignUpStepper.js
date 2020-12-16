import React, { useState } from "react";
import { Formik, Form, Field, useField } from "formik";
import { TextField } from "formik-material-ui";
import {
  formTheme,
  Label,
  Radio,
  Span,
  Desc,
  Buttons,
  StepperContainer,
} from "../Styles/SignUpStyles";
import {
  Button,
  Typography,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import * as Yup from "yup";
function SignUpStepper() {
  return (
    <FormikStepper initialValues={{ email: "", password: "", plan: "" }}>
      <FormikStep
        label="Personel Info"
        validationSchema={Yup.object({
          email: Yup.string().email().required(),
          password: Yup.string().min(4).required(),
        })}
      >
        <Typography variant="h5">Welcome</Typography>
        <Typography variant="h5">Joining Netflix is easy.</Typography>
        <Typography variant="body1">
          Enter your Email and password and you'll be watching in no time.
        </Typography>
        <Field
          name="email"
          label="Email"
          variant="outlined"
          component={TextField}
          fullWidth
        />
        <Field
          name="password"
          label="Password"
          variant="outlined"
          type="password"
          component={TextField}
          fullWidth
        />
      </FormikStep>
      <FormikStep
        label="Choose Plan"
        validationSchema={Yup.object({
          plan: Yup.string().required(),
        })}
      >
        <MyRadio label="Basic" name="plan" value="basic" type="radio" />
        <MyRadio label="Standard" name="plan" value="standard" type="radio" />
        <MyRadio label="Premium" name="plan" value="premium" type="radio" />
      </FormikStep>
    </FormikStepper>
  );
}
export function MyRadio({ label, checked, ...props }) {
  const [field] = useField(props);
  return (
    <>
      <Label checked={field.checked}>
        <Radio {...field} {...props} />
        <Span>
          {label}
          <Desc>
            <h4>Price</h4>
            <h4>Video Quality</h4>
            <h4>Resolution</h4>
            <h4>Screens</h4>
          </Desc>
        </Span>
      </Label>
    </>
  );
}
export function FormikStep({ children }) {
  return <>{children}</>;
}
export function FormikStepper({ children, ...props }) {
  const childrenArray = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const current = childrenArray[step];
  return (
    <ThemeProvider theme={formTheme}>
      <Formik
        {...props}
        validationSchema={current.props.validationSchema}
        onSubmit={async (values) => {
          if (step === childrenArray.length - 1) {
            await props.onSubmit(values);
          } else {
            setStep((step) => step + 1);
            console.log(values);
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

export default SignUpStepper;
