export type actionType = {
  type: string;
  payload?: any;
};

export type itemNameType = "display" | "operators" | "keyboard" | "equalButton";

export type placeType = "side" | "canvas";

export type itemType = {
  place: placeType;
  order?: number;
  dragged?: boolean;
};

export type itemsStateType = {
  [index in itemNameType]: itemType;
};

export type calcStateType = {
  firstArgument: string[];
  secondArgument: string[];
  operator: string;
  enter: "firstArgument" | "secondArgument";
};

export type appStateType = {
  mode: "Runtime" | "Constructor";
};

export default interface rootStateType {
  items: itemsStateType;
  app: appStateType;
  calc: calcStateType;
}
