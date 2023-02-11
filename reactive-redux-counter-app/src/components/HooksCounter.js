import { useDispatch, useSelector } from "react-redux";
import {
  decrementAction,
  incrementAction,
} from "../redux/counter/actionCreators";

function HooksCounter() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const incrementUseDispatch = (value) => {
    dispatch(incrementAction(value));
  };
  const decrementUseDispatch = (value) => {
    dispatch(decrementAction(value));
  };
  return (
    <>
      <div className="max-w-md mx-auto mt-10 space-y-5">
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-lime-100 rounded shadow ">
          <div className="text-2xl font-semibold">{count}</div>
          <div className="flex  space-x-3">
            <button
              className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
              onClick={() => incrementUseDispatch(5)}
            >
              Increment
            </button>
            <button
              className="bg-purple-400 text-white px-3 py-2 rounded shadow"
              onClick={() => decrementUseDispatch(5)}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HooksCounter;
