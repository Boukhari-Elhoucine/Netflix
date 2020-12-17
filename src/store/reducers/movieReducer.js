const initialState = {
  originals: [],
  trending: [],
};

const MoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_NETFLIX":
      return {
        ...state,
        originals: action.payload,
      };
    case "GET_TRENDING":
      return {
        ...state,
        trending: action.payload,
      };
    default:
      return state;
  }
};
export default MoviesReducer;
