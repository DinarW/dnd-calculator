export const enterNumber = (number: string) => ({
  type: 'ENTER_NUMBER',
  payload: { number: number === ',' ? '.' : number }
});

export const enterOperator = (operator: string) => ({
  type: 'ENTER_OPERATOR',
  payload: { operator }
});

export const pressEqual = () => ({
  type: 'PRESS_EQUAL',
});
