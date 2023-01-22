import React from "react";

function Stats({ count }) {
  return (
    <div className="p-4 h-40 flex flex-col items-center justify-center space-y-5 rounded-lg shadow-md bg-white">
      <div className="text-2xl">Total Counts: {count}</div>
    </div>
  );
}

export default Stats;
