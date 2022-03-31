import type { itemsStateType, itemNameType, placeType, actionType } from "../types";

const initialState: itemsStateType = {
  display: {
    place: "canvas",
  },
  operators: {
    place: "side",
  },
  numbers: {
    place: "canvas",
  },
  equalButton: {
    place: "side",
  },
};

const itemsReducer = (
  state: itemsStateType = initialState,
  action: actionType
) => {
  switch (action.type) {
    case "CHANGE_ORDER": {
      const { name, order }: { name: itemNameType, order: number } =
        action.payload;
      return {
        ...state,
        [name]: {
          ...state[name],
          order
        }
      }
    }
    case "CHANGE_PLACE": {
      const { name, place }: { name: itemNameType; place: placeType } =
        action.payload;
      return {
        ...state,
        [name]: {
          ...state[name],
          place
        }
      };
    }
    default:
      return state;
  }
};

export default itemsReducer;
