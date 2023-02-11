import { connect } from "react-redux";
import {
  decrementAction,
  incrementAction,
} from "../redux/counter/actionCreators";

function Counter({ count, incrementDispatch, decrementDispatch }) {
  return (
    <>
      <div className="max-w-md mx-auto mt-10 space-y-5">
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-lime-100 rounded shadow ">
          <div className="text-2xl font-semibold">{count}</div>
          <div className="flex  space-x-3">
            <button
              className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
              onClick={incrementDispatch}
            >
              Increment
            </button>
            <button
              className="bg-purple-400 text-white px-3 py-2 rounded shadow"
              onClick={decrementDispatch}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.value,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    incrementDispatch: (value) => dispatch(incrementAction(value)),
    decrementDispatch: (value) => dispatch(decrementAction(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
