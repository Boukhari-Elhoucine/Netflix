import axios from "axios";
import { CardElement } from "@stripe/react-stripe-js";
export const SignUp = (stripe, elements, creds, history) => {
  return async (dispatch) => {
    axios.defaults.withCredentials = true;
    const lastStatus = localStorage.getItem("invoiceStatus");
    if (lastStatus === "requires_action") {
      const client_secret = localStorage.getItem("client_secret");
      const customer_id = localStorage.getItem("customer_id");
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
          const res = await axios.post("http://localhost:5000/signup", {
            customer_id,
            ...creds,
          });
          localStorage.setItem("customer_id", "");
          const { user } = res.data;
          dispatch({ type: "CREATED", payload: user });
          return history.push("/home");
        })
        .catch((err) => dispatch({ type: "ERR", payload: err }));
    } else {
      try {
        const result = await stripe.createPaymentMethod({
          type: "card",
          card: elements.getElement(CardElement),
          billing_details: {
            email: creds.email,
          },
        });
        const res = await axios.post("http://localhost:5000/checkout", {
          payment_method: result.paymentMethod.id,
          ...creds,
        });
        const { status, client_secret, customer_id } = res.data;

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
            return dispatch({ type: "ERR", payload: result.error });
          } else {
            const res = await axios.post("http://localhost:5000/signup", {
              customer_id,
              ...creds,
            });
            const { user } = res.data;
            dispatch({ type: "CREATED", payload: user });
            return history.push("/home");
          }
        } else {
          const res = await axios.post("http://localhost:5000/signup", {
            customer_id,
            ...creds,
          });
          const { user } = res.data;
          dispatch({ type: "CREATED", payload: user });
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
    return await axios
      .post("http://localhost:5000/login", creds)
      .then((response) => {
        dispatch({ type: "LOGGED_IN", payload: response.data.user });
        return history.push("/home");
      })
      .catch((err) => dispatch({ type: "ERR", payload: err }));
  };
};
export const Logout = (history) => {
  return async (dispatch) => {
    return await axios
      .get("http://localhost:5000/logout")
      .then(() => {
        dispatch({ type: "LOGGED_OUT" });
        return history.push("/");
      })
      .catch((err) => dispatch({ type: "ERR", payload: err }));
  };
};