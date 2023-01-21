import React from "react";
import CountComp from "./CountComp";
import ReuseableButton from "./ReuseableButton";

function Counter({ id, increments, decrements, count }) {
  return (
    <>
      <div className="max-w-md mx-auto mt-10 space-y-5">
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-cyan-50 rounded-lg shadow-lg ">
          <CountComp count={count} />
          <div className="flex space-x-3">
            <ReuseableButton handler={() => increments(id)}>
              Increments
            </ReuseableButton>
            <ReuseableButton handler={() => decrements(id)}>
              Decrements
            </ReuseableButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
