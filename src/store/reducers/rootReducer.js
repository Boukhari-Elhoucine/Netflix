import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import authReducer from "./authReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import paymentReducer from "./paymentReducer";
const config = {
  key: "root",
  storage,
  blacklist: ["result", "auth"],
};
const authConfig = {
  key: "auth",
  storage,
  blacklist: ["err", "login_err"],
};
const rootReducer = combineReducers({
  result: movieReducer,
  auth: persistReducer(authConfig, authReducer),
  Sub: paymentReducer,
});
export default persistReducer(config, rootReducer);
