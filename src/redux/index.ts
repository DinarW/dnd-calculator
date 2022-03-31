import { createStore, combineReducers } from "redux";
import itemsReducer from "./reducers/itemsReducer";
import appReducer from "./reducers/appReducer";

const rootReducer = combineReducers({
  app: appReducer,
  items: itemsReducer,
});

const store = createStore(rootReducer);

export default store;
