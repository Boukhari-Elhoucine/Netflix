import axios from "../../api/axios";
import { api_key } from "../../api/index";
export const SearchMovies = (name) => {
  return async (dispatch) => {
    const search = `/search/movie?api_key=${api_key}&language=en-US&query=${name}&page=1&include_adult=false`;
    try {
      const res = await axios.get(search);
      dispatch({ type: "GET_MOVIES", payload: res.data.results });
    } catch (err) {
      dispatch({ payload: err });
    }
  };
};
