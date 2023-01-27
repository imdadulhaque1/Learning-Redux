import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementFunc, decrementFunc } from "./redux/counter/actions";

function HooksCounter() {
  //!use of useSelector() and must used it top of the component and it works like state in react
  const countState = useSelector((usState) => usState.value);
  const dispatch = useDispatch();
  const dispatchIncrements = (incrementValue) => {
    dispatch(incrementFunc(incrementValue));
  };
  const dispatchDecrements = (decrementValue) => {
    dispatch(decrementFunc(decrementValue));
  };
  return (
    <>
      <div className="max-w-md mx-auto mt-10 space-y-5">
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-slate-400 rounded shadow ">
          <div className="text-2xl font-semibold">{countState}</div>
          <div className="flex  space-x-3">
            <button
              className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
              onClick={(incValue) => dispatchIncrements(incValue)}
            >
              Increment
            </button>
            <button
              className="bg-purple-400 text-white px-3 py-2 rounded shadow"
              onClick={(decValue) => dispatchDecrements(decValue)}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HooksCounter;
