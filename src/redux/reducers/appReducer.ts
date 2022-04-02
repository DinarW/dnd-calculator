import { appStateType, actionType } from "../types";

const initialState: appStateType = {
  mode: "Constructor",
};

const appReducer = (state: appStateType = initialState, action: actionType) => {
  switch (action.type) {
    case "SWITCH_MODE":
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};

export default appReducer;
