import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCreator,
  incrementCreator,
} from "../redux/counter/actionCreator";

const HooksCounter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(incrementCreator());
  };

  const decrementHandler = () => {
    dispatch(decrementCreator());
  };
  return (
    <>
      <div className="max-w-md mx-auto mt-10 space-y-5">
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-zinc-300 rounded shadow ">
          <div className="text-2xl font-semibold">{count}</div>
          <div className="flex  space-x-3">
            <button
              className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
              onClick={incrementHandler}
            >
              Increment
            </button>
            <button
              className="bg-purple-400 text-white px-3 py-2 rounded shadow"
              onClick={decrementHandler}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HooksCounter;
