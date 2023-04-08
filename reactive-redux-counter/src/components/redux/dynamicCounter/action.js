import { INCREMENT, DECREMENT } from "./actionTypes";

// Initializing Action Creators
export const incrementFunc = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};
export const decrementFunc = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};
