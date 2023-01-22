import React, { useState } from "react";
import Counter from "./SubComponent/Counter";
import Stats from "./SubComponent/Stats";

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
  const IncrementHandle = (id) => {
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
  const DecrementHandle = (id) => {
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
      <div className="h-screen w-screen bg-indigo-100 text-slate-400">
        <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
          Reactive Simple Counter App
        </h1>
        <div className="max-w-md mx-auto mt-10 space-y-5">
          {state.map((count) => (
            <Counter
              key={count.id}
              id={count.id}
              count={count.count}
              increment={IncrementHandle}
              decrement={DecrementHandle}
            />
          ))}
          <Stats count={totalCount()} />
        </div>
      </div>
    </>
  );
}

export default Home;
