import { DECREMENT, INCREMENT } from "./actionTypes";

export const incrementAction = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};

export const decrementAction = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};
