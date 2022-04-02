import { createStore, combineReducers } from "redux";
import itemsReducer from "./reducers/itemsReducer";
import calcReducer from "./reducers/calcReducer";
import appReducer from "./reducers/appReducer";

const rootReducer = combineReducers({
  app: appReducer,
  items: itemsReducer,
  calc: calcReducer,
});

const store = createStore(rootReducer);

export default store;
