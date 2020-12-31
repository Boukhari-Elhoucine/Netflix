import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import authReducer from "./authReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import paymentReducer from "./paymentReducer";
const rootReducer = combineReducers({
  result: movieReducer,
  auth: authReducer,
  Sub: paymentReducer,
});
const config = {
  key: "root",
  storage,
};

export default persistReducer(config, rootReducer);
