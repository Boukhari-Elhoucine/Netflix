const initalState = {
  status: null,
  err: null,
  loading: false,
};

const paymentReducer = (state = initalState, action) => {
  switch (action.type) {
    case "CANCELED":
      return {
        ...state,
        status: action.payload,
      };
    case "LOGGED_OUT":
      return (state = initalState);
    case "UPGRADE": {
      return {
        ...state,
        status: action.payload,
        loading: false,
      };
    }
    case "PLAN_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "PAYMENT_ERR":
      return {
        ...state,
        err: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default paymentReducer;
