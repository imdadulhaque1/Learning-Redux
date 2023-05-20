import React from "react";
import { connect } from "react-redux";
import {
  decrementCreator,
  incrementCreator,
} from "../redux/counter/actionCreator";
import {
  dDecrementCreator,
  dIncrementCreator,
} from "../redux/dynamicCounter/dynamicActionCreator";

const VariableCounter = ({ count, increments, decrements }) => {
  return (
    <>
      <div className="max-w-md mx-auto mt-10 space-y-5">
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-zinc-300 rounded shadow ">
          <div className="text-2xl font-semibold">{count}</div>
          <div className="flex  space-x-3">
            <button
              className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
              onClick={increments}
            >
              Increment
            </button>
            <button
              className="bg-purple-400 text-white px-3 py-2 rounded shadow"
              onClick={decrements}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    count: ownProps.dynamic ? state.dynamicCounter.value : state.counter.value,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increments: ownProps.dynamic
      ? (value) => dispatch(dIncrementCreator(5))
      : (value) => dispatch(incrementCreator(value)),
    decrements: ownProps.dynamic
      ? (value) => dispatch(dDecrementCreator(2))
      : (value) => dispatch(decrementCreator(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VariableCounter);
