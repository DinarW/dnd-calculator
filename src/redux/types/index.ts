export type actionType = {
  type: string,
  payload?: any,
};

export type itemNameType =
    | "display"
    | "operators"
    | "numbers"
    | "equalButton";

export type placeType = "side" | "canvas";

export type itemType = {
  place: placeType;
  order?: number;
};

export type itemsStateType = {
  [index in itemNameType]: itemType;
};

export type appStateType = {
  mode: "Runtime" | "Constructor";
}

export default interface rootStateType {
  items: itemsStateType;
  app: appStateType;
}
