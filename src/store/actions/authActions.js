import axios from "axios";
import { CardElement } from "@stripe/react-stripe-js";
export const SignUp = (stripe, elements, creds, history) => {
  return async (dispatch) => {
    dispatch({ type: "LOADING" });
    axios.defaults.withCredentials = true;
    const lastStatus = localStorage.getItem("invoiceStatus");
    if (lastStatus === "requires_action") {
      const client_secret = localStorage.getItem("client_secret");
      const customer_id = localStorage.getItem("customer_id");
      const subscription_id = localStorage.getItem("subscription_id");
      stripe
        .confirmCardPayment(client_secret, {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              email: creds.email,
            },
          },
        })
        .then(async (result) => {
          localStorage.setItem("invoiceStatus", "");
          localStorage.setItem("client_secret", "");
          const res = await axios.post(
            "https://netflixbackend.herokuapp.com/signup",
            {
              customer_id,
              subscription_id,
              ...creds,
            }
          );
          localStorage.setItem("customer_id", "");
          localStorage.setItem("subscription_id", "");
          const { user } = res.data;
          dispatch({ type: "CREATED", payload: user });
          return history.push("/home");
        })
        .catch((err) => dispatch({ type: "ERR", payload: err.response.data }));
    } else {
      try {
        const result = await stripe.createPaymentMethod({
          type: "card",
          card: elements.getElement(CardElement),
          billing_details: {
            email: creds.email,
          },
        });
        const res = await axios.post(
          "https://netflixbackend.herokuapp.com/checkout",
          {
            payment_method: result.paymentMethod.id,
            ...creds,
          }
        );
        const {
          status,
          client_secret,
          customer_id,
          subscription_id,
        } = res.data;

        if (status === "requires_action") {
          let result = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
              card: elements.getElement(CardElement),
              billing_details: {
                email: creds.email,
              },
            },
          });
          if (result.error) {
            localStorage.setItem("invoiceStatus", status);
            localStorage.setItem("client_secret", client_secret);
            localStorage.setItem("customer_id", customer_id);
            localStorage.setItem("subscription_id", subscription_id);
            return dispatch({ type: "ERR", payload: result.error });
          } else {
            const res = await axios.post(
              "https://netflixbackend.herokuapp.com/signup",
              {
                customer_id,
                subscription_id,
                ...creds,
              }
            );
            dispatch({
              type: "CREATED",
              payload: res.data,
            });
            return history.push("/home");
          }
        } else {
          const res = await axios.post(
            "https://netflixbackend.herokuapp.com/signup",
            {
              customer_id,
              subscription_id,
              ...creds,
            }
          );

          dispatch({
            type: "CREATED",
            payload: res.data,
          });
          return history.push("/home");
        }
      } catch (err) {
        dispatch({ type: "ERR", payload: err });
      }
    }
  };
};
export const Login = (creds, history) => {
  return async (dispatch) => {
    axios.defaults.withCredentials = true;
    dispatch({ type: "LOADING" });
    return await axios
      .post("https://netflixbackend.herokuapp.com/login", creds)
      .then((response) => {
        dispatch({
          type: "LOGGED_IN",
          payload: response.data,
        });
        return history.push("/home");
      })
      .catch((err) =>
        dispatch({ type: "SIGN_IN_ERR", payload: err.response.data })
      );
  };
};
export const Logout = (history) => {
  return async (dispatch) => {
    axios.defaults.withCredentials = true;
    return await axios
      .get("https://netflixbackend.herokuapp.com/logout")
      .then(() => {
        dispatch({ type: "LOGGED_OUT" });
        return history.push("/");
      })
      .catch((err) => dispatch({ type: "ERR", payload: err.response.data }));
  };
};
