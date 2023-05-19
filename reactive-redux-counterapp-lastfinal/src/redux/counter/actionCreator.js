import { DECREMENT, INCREMENT } from "./actionTypes";

export const incrementCreator = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};

export const decrementCreator = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};
