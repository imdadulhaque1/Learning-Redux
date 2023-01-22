import React from "react";
import ButtonCom from "./ButtonCom";
import CountCom from "./CountCom";

function Counter({ id, increment, decrement, count }) {
  return (
    <>
      <div className="p-4 h-auto flex flex-col items-center justify-center bg-stone-100 shadow-lg rounded">
        <CountCom count={count} />
        <div className="flex space-x-3">
          <ButtonCom handler={() => increment(id)}>Increments</ButtonCom>
          <ButtonCom handler={() => decrement(id)}>Decrements</ButtonCom>
        </div>
      </div>
    </>
  );
}

export default Counter;
