import axios from "axios";
export const Cancel = (history) => {
  return async (dispatch) => {
    axios.defaults.withCredentials = true;
    const res = await axios.get("http://localhost:5000/cancel");
    const { status } = res.data;
    if (status === "canceled") {
      dispatch({ type: "CANCELED", payload: status });
      dispatch({ type: "LOGGED_OUT" });
      return history.push("/");
    } else {
      return dispatch({ type: "PAYMENT_ERR", payload: res.data });
    }
  };
};
export const Upgrade = (name) => {
  return async (dispatch) => {
    axios.defaults.withCredentials = true;
    try {
      const res = await axios.post("http://localhost:5000/upgrade", {
        newPlan: name,
      });
      return dispatch({ type: "UPGRADE", payload: res.data });
    } catch (err) {
      return dispatch({ type: "PAYMENT_ERR", payload: err.response.data });
    }
  };
};
