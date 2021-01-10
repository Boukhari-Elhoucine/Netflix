const initialState = {
  searchMovies: null,
  movieTrailer: "",
  loading: false,
};

const MoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIES":
      return {
        ...state,
        searchMovies: action.payload,
        loading: false,
      };
    case "INIT_SEARCH":
      return {
        ...state,
        searchMovies: action.payload,
        loading: false,
      };
    case "TRAILER":
      return {
        ...state,
        movieTrailer: action.payload,
      };
    case "SET_TRAILER":
      return {
        ...state,
        movieTrailer: action.payload,
      };

    case "NOT_FOUND":
      return {
        ...state,
        movieTrailer: "",
      };
    case "LOADING_MOVIES":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
export default MoviesReducer;
