const initialState = {
  searchMovies: [],
};

const MoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIES":
      return {
        ...state,
        searchMovies: action.payload,
      };
    default:
      return state;
  }
};
export default MoviesReducer;
