import React from "react";
import Counter from "./Counter";

function Home() {
  return (
    <>
      <div className="w-screen h-screen p-10 bg-stone-200 text-state-700">
        <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
          React Simple Counter Application
        </h1>
        <div className="max-w-md mx-auto mt-10 space-y-5">
          <Counter />
        </div>
      </div>
    </>
  );
}

export default Home;
