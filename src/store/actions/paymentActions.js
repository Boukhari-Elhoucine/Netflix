import axios from "axios";
export const Cancel = (history) => {
  return async (dispatch) => {
    axios.defaults.withCredentials = true;
    dispatch({ type: "PLAN_LOADING" });
    const res = await axios.get("https://netflixbackend.herokuapp.com/cancel");
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
export const Upgrade = (name, history) => {
  return async (dispatch) => {
    axios.defaults.withCredentials = true;
    dispatch({ type: "PLAN_LOADING" });
    try {
      const res = await axios.post(
        "https://netflixbackend.herokuapp.com/upgrade",
        {
          newPlan: name,
        }
      );
      dispatch({ type: "UPGRADE", payload: res.data });
      return history.push("/home");
    } catch (err) {
      return dispatch({ type: "PAYMENT_ERR", payload: err.message });
    }
  };
};
