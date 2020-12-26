import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import authReducer from "./authReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const rootReducer = combineReducers({
  movies: movieReducer,
  auth: authReducer,
});
const config = {
  key: "root",
  storage,
};

export default persistReducer(config, rootReducer);
