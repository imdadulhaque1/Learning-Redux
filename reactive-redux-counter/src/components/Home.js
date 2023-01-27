import React from "react";
import Counter from "./Counter";
import HooksCounter from "./HooksCounter";

function Home() {
  return (
    <>
      <div className="w-screen h-screen p-10 bg-slate-200 text-state-700">
        <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
          Reactive Redux Counter Application
        </h1>
        <div className="max-w-md mx-auto mt-10 space-y-5">
          <HooksCounter id="1" />
        </div>
      </div>
    </>
  );
}

export default Home;
