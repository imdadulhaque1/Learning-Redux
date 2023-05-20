import { DDECREMENT, DINCREMENT } from "./dynamicActionTypes";

export const dIncrementCreator = (value) => {
  return {
    type: DINCREMENT,
    payload: value,
  };
};

export const dDecrementCreator = (value) => {
  return {
    type: DDECREMENT,
    payload: value,
  };
};
