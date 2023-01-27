import React from "react";
import { connect, useSelector } from "react-redux";
import { incrementFunc, decrementFunc } from "./redux/counter/actions";

function HooksCounter({ dispatchIncrements, dispatchDecrements, id }) {
  //!use of useSelector() and must used it top of the component and it works like state in react
  const countState = useSelector((usState) => usState.value);
  //TODO: If I use the useSelector(), then don't need to use mapStateToProps function to get the value
  return (
    <>
      <div className="max-w-md mx-auto mt-10 space-y-5">
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-slate-400 rounded shadow ">
          <div className="text-2xl font-semibold">
            {countState} {id}
          </div>
          <div className="flex  space-x-3">
            <button
              className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
              onClick={dispatchIncrements}
            >
              Increment
            </button>
            <button
              className="bg-purple-400 text-white px-3 py-2 rounded shadow"
              onClick={dispatchDecrements}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     countState: state.value,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     dispatchIncrements: (value) => dispatch(incrementFunc(value)),
//     dispatchDecrements: (value) => dispatch(decrementFunc(value)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default HooksCounter;
