import { DDECREMENT, DINCREMENT } from "./dynamicActionTypes";

export const dynamicIncrementCreator = (value) => {
  return {
    type: DINCREMENT,
    payload: value,
  };
};
export const dynamicDecrementCreator = (value) => {
  return {
    type: DDECREMENT,
    payload: value,
  };
};
