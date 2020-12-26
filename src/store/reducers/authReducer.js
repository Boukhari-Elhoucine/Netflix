const initialState = {
  user: {},
  err: {},
  authenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATED":
      return {
        ...state,
        user: action.payload,
        authenticated: true,
      };
    case "LOGGED_IN": {
      return {
        ...state,
        user: action.payload,
        authenticated: true,
      };
    }
    case "LOGGED_OUT": {
      return (state = initialState);
    }
    case "ERR":
      return {
        ...state,
        err: action.payload,
      };
    default:
      return state;
  }
};
export default authReducer;
