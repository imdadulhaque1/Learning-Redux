import { INCREMENT, DECREMENT } from "./actionTypes";

// Initializing Action Creators
const incrementFunc = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};
const decrementFunc = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

module.exports = {
  incrementFunc,
  decrementFunc,
};
