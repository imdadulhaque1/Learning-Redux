import { DDECREMENT, DINCREMENT } from "./actionTypes";

export const incrementAction = () => {
  return {
    type: DINCREMENT,
  };
};

export const decrementAction = () => {
  return {
    type: DDECREMENT,
  };
};
