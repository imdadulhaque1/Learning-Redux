import { DECREMENT, INCREMENT } from "./actionTypes";

export const incrementCreator = () => {
  return {
    type: INCREMENT,
  };
};
export const decrementCreator = () => {
  return {
    type: DECREMENT,
  };
};
