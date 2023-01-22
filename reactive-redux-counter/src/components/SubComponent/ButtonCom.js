import React from "react";

function ButtonCom({ children, handler }) {
  return (
    <>
      <button
        className=" bg-purple-500 text-white px-3 py-2 rounded-md shadow-md"
        onClick={handler}
      >
        {children}
      </button>
    </>
  );
}

export default ButtonCom;
