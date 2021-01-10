import axios from "../../api/axios";
import { api_key } from "../../api/index";
import movieTrailer from "movie-trailer";
export const SearchMovies = (name) => {
  return async (dispatch) => {
    dispatch({ type: "LOADING_MOVIES" });
    const search = `/search/movie?api_key=${api_key}&language=en-US&query=${name}&page=1&include_adult=false`;
    try {
      const res = await axios.get(search);
      dispatch({ type: "GET_MOVIES", payload: res.data.results });
    } catch (err) {
      dispatch({ type: "FAILED", payload: err });
    }
  };
};
export const setSearch = () => {
  return {
    type: "INIT_SEARCH",
    payload: null,
  };
};
export const getTrailer = (name) => {
  return (dispatch) => {
    movieTrailer(name || "")
      .then((url) => {
        const UrlParams = new URLSearchParams(new URL(url).search);
        const link = UrlParams.get("v");
        if (link) {
          return dispatch({ type: "TRAILER", payload: link });
        }
      })
      .catch((err) => {
        alert("trailer not found");
        return dispatch({ type: "NOT_FOUND" });
      });
  };
};
export const setTrailer = () => {
  return {
    type: "SET_TRAILER",
    payload: "",
  };
};
