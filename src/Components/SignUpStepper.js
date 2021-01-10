import React, { useState, useEffect } from "react";
import { Field, useField } from "formik";
import { TextField } from "formik-material-ui";
import { loadStripe } from "@stripe/stripe-js";
import FormikStepper from "./FormikStepper";
import { Elements, CardElement } from "@stripe/react-stripe-js";
import {
  Label,
  Radio,
  Span,
  Desc,
  CardContainer,
} from "../Styles/SignUpStyles";
import { Typography } from "@material-ui/core";
import * as Yup from "yup";
import axios from "axios";
const Stripe = loadStripe(
  "pk_test_51HQDhvLKgDia2s4j59Tdsquu1HO7YwmaCXJTLkcM6nlzh0tKQxoS6W3MhCWjcPUp4nhJBpcvG9fkZt9BvjVpwCyP004tg0Fm1g"
);
function SignUpStepper() {
  const [plans, setPlans] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await axios.get("http://localhost:5000/plan");
      setPlans(response.data);
    }
    getData();
  }, []);
  return (
    <Elements stripe={Stripe}>
      <FormikStepper
        initialValues={{
          email: "",
          password: "",
          plan: "",
          firstName: "",
          lastName: "",
        }}
      >
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
            plan: Yup.string().required("please choose a plan"),
          })}
        >
          <MyRadio
            data={plans.length && plans[1]}
            label="Basic"
            name="plan"
            value="basic"
            type="radio"
          />
          <MyRadio
            data={plans.length && plans[0]}
            label="Standard"
            name="plan"
            value="standard"
            type="radio"
          />
          <MyRadio
            data={plans.length && plans[2]}
            label="Premium"
            name="plan"
            value="premium"
            type="radio"
          />
        </FormikStep>
        <FormikStep
          label="Checkout"
          validationSchema={Yup.object({
            firstName: Yup.string().required(),
            lastName: Yup.string().required(),
          })}
        >
          <Typography variant="h5"> Checkout</Typography>
          <Field
            name="firstName"
            label="First Name"
            variant="outlined"
            component={TextField}
            fullWidth
          />
          <Field
            name="lastName"
            label="Last Name"
            variant="outlined"
            component={TextField}
            fullWidth
          />
          <CardContainer>
            <CardElement name="card" />
          </CardContainer>
        </FormikStep>
      </FormikStepper>
    </Elements>
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
            <h4>Price:{props.data.price}</h4>
            <h4>Video Quality:{props.data.quality}</h4>
            <h4>Resolution:{props.data.resolution}</h4>
            <h4>Screens{props.data.screen}</h4>
          </Desc>
        </Span>
      </Label>
    </>
  );
}
export function FormikStep({ children }) {
  return <>{children}</>;
}

export default SignUpStepper;
