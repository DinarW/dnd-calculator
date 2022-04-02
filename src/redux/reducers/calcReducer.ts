import { actionType, calcStateType } from "../types";

const initialState: calcStateType = {
  firstArgument: ["0"],
  secondArgument: ["0"],
  operator: "",
  enter: "firstArgument",
};

const calculate = (
  firstArg: number,
  secondArg: number,
  operator: string
): number => {
  switch (operator) {
    case "х": {
      return firstArg * secondArg;
    }
    case "+": {
      return firstArg + secondArg;
    }
    case "-": {
      return firstArg - secondArg;
    }
    case "/": {
      return firstArg / secondArg;
    }
    default: {
      return NaN;
    }
  }
};

const calcReducer = (
  state: calcStateType = initialState,
  action: actionType
) => {
  switch (action.type) {
    case "ENTER_NUMBER": {
      const number: number = action.payload.number;
      const argument = state.enter;

      return {
        ...state,
        [argument]: [...state[argument], number],
      };
    }
    case "ENTER_OPERATOR": {
      const operator: string = action.payload.operator;
      return {
        ...state,
        operator: operator,
        enter: "secondArgument",
      };
    }
    case "PRESS_EQUAL": {
      const firstArg = parseFloat(state.firstArgument.join(""));
      const secondArg = parseFloat(state.secondArgument.join(""));

      if (
        Number.isNaN(firstArg) ||
        Number.isNaN(secondArg) ||
        !state.operator
      ) {
        break;
      }

      const result = calculate(firstArg, secondArg, state.operator);
      return {
        ...initialState,
        firstArgument: result.toFixed(10).toString().split(""),
      };
    }
    default: {
      return state;
    }
  }
};

export default calcReducer;
