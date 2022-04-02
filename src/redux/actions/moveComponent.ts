import { itemNameType, placeType } from "../types";

export const toggleDragged = (name: itemNameType) => ({
  type: "TOGGLE_DRAGGED",
  payload: { name }
});

export const changePlace = (name: itemNameType, place: placeType) => ({
  type: "CHANGE_PLACE",
  payload: { name, place },
});

export const changeOrder = (name: itemNameType, order: number) => ({
  type: "CHANGE_ORDER",
  payload: { name, order }
});
