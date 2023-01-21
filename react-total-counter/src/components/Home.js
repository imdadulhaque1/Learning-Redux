import React, { useState } from "react";
import Counter from "./SubComponents/Counter";
import Stats from "./SubComponents/Stats";

const initialState = [
  {
    id: 1,
    count: 0,
  },
  {
    id: 2,
    count: 0,
  },
  {
    id: 3,
    count: 0,
  },
];

function Home() {
  const [state, setState] = useState(initialState);
  const totalCount = () => {
    return state.reduce((total, counter) => total + counter.count, 0);
  };

  const IncrementHandler = (id) => {
    const updatedCounter = state.map((countObj) => {
      if (countObj.id === id) {
        return {
          ...countObj,
          count: countObj.count + 1,
        };
      }
      return { ...countObj };
    });
    setState(updatedCounter);
  };
  const DecrementHandler = (id) => {
    const updatedCounter = state.map((countObj) => {
      if (countObj.id === id) {
        return {
          ...countObj,
          count: countObj.count - 1,
        };
      }
      return { ...countObj };
    });
    setState(updatedCounter);
  };
  return (
    <>
      <div className="w-screen h-screen p-10 bg-stone-200 text-state-700">
        <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
          React Simple Counter Application
        </h1>
        <div className="max-w-md mx-auto mt-10 space-y-5">
          {state.map((count) => (
            <Counter
              key={count.id}
              id={count.id}
              count={count.count}
              increments={IncrementHandler}
              decrements={DecrementHandler}
            />
          ))}

          <Stats count={totalCount()} />
        </div>
      </div>
    </>
  );
}

export default Home;
