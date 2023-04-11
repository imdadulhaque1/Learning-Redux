import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  dynamicDecrementCreator,
  dynamicIncrementCreator,
} from "../redux/dynamicCounter/dynamicActionCreators";

const DynamicHooksCounter = () => {
  const count = useSelector((state) => state.dynamicCounter.value);
  const dispatch = useDispatch();

  const dIncrementValue = (value) => {
    dispatch(dynamicIncrementCreator(value));
  };

  const dDecrementValue = (value) => {
    dispatch(dynamicDecrementCreator(value));
  };
  return (
    <>
      <div className="max-w-md mx-auto mt-10 space-y-5">
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-lime-100 rounded shadow ">
          <div className="text-2xl font-semibold">{count}</div>
          <div className="flex  space-x-3">
            <button
              className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
              onClick={() => dIncrementValue(5)}
            >
              Increment
            </button>
            <button
              className="bg-purple-400 text-white px-3 py-2 rounded shadow"
              onClick={() => dDecrementValue(2)}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DynamicHooksCounter;
