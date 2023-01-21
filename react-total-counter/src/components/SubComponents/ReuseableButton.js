import React from "react";

function ReuseableButton({ children, handler }) {
  return (
    <div>
      <button
        className="bg-indigo-400 text-white px-4 py-3 text-xl rounded-lg shadow-lg hover:bg-violet-600"
        onClick={handler}
      >
        {children}
      </button>
    </div>
  );
}

export default ReuseableButton;
