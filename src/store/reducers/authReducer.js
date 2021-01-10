const initialState = {
  user: null,
  err: null,
  login_err: null,
  authenticated: false,
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATED":
      return {
        user: action.payload,
        authenticated: true,
        err: null,
        loading: false,
      };
    case "LOGGED_IN": {
      return {
        user: action.payload,
        authenticated: true,
        err: null,
        loading: false,
      };
    }
    case "LOGGED_OUT":
      return (state = initialState);

    case "ERR":
      return {
        ...state,
        err: action.payload,
        loading: false,
      };
    case "SIGN_IN_ERR":
      return {
        ...state,
        login_err: action.payload,
        loading: false,
      };
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
export default authReducer;
