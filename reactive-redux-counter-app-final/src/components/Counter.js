import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const increments = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrements = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-10 space-y-5">
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-lime-100 rounded shadow ">
          <div className="text-2xl font-semibold">{count}</div>
          <div className="flex  space-x-3">
            <button
              className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
              onClick={increments}
            >
              Increment
            </button>
            <button
              className="bg-purple-400 text-white px-3 py-2 rounded shadow"
              onClick={decrements}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
