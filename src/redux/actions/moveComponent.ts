import { itemNameType, placeType } from "../types";

export const changePlace = (name: itemNameType, place: placeType) => ({
  type: "CHANGE_PLACE",
  payload: { name, place },
});

export const chageOrder = (name: itemNameType, order: number) => ({
  type: "CHANGE_ORDER",
  payload: { name, order }
});
