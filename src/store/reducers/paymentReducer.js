const initalState = {
  status: null,
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
      };
    }
    default:
      return state;
  }
};
export default paymentReducer;
