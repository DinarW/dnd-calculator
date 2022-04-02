import type {
  itemsStateType,
  itemNameType,
  placeType,
  actionType,
} from "../types";

const initialState: itemsStateType = {
  display: {
    place: "side",
  },
  operators: {
    place: "side",
  },
  keyboard: {
    place: "side",
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
      const { name, order }: { name: itemNameType; order: number } =
        action.payload;
      return {
        ...state,
        [name]: {
          ...state[name],
          order,
        },
      };
    }
    case "CHANGE_PLACE": {
      const { name, place }: { name: itemNameType; place: placeType } =
        action.payload;
      return {
        ...state,
        [name]: {
          ...state[name],
          place,
        },
      };
    }
    case "TOGGLE_DRAGGED": {
      const name: itemNameType = action.payload.name;
      return {
        ...state,
        [name]: {
          ...state[name],
          dragged: !state[name]?.dragged,
        },
      };
    }
    default:
      return state;
  }
};

export default itemsReducer;
