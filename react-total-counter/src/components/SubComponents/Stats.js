import React from "react";

const Stats = ({ count }) => {
  return (
    <div className="p-4 h-40 flex flex-col items-center justify-center space-y-5 bg-white shadow rounded-xl hover:bg-purple-200">
      <div className="text-2xl font-semibold"> Total Count: {count}</div>
    </div>
  );
};

export default Stats;
