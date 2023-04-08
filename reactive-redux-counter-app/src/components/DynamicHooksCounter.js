import { useDispatch, useSelector } from "react-redux";
import {
  decrementAction,
  incrementAction,
} from "../redux/dynamicCounter/actionCreators";

function DynamicHooksCounter() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const incrementUseDispatch = () => {
    dispatch(incrementAction());
  };
  const decrementUseDispatch = () => {
    dispatch(decrementAction());
  };
  return (
    <>
      <div className="max-w-md mx-auto mt-10 space-y-5">
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-neutral-300 rounded shadow ">
          <div className="text-2xl font-semibold">{count}</div>
          <div className="flex  space-x-3">
            <button
              className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
              onClick={incrementUseDispatch}
            >
              Increment
            </button>
            <button
              className="bg-purple-400 text-white px-3 py-2 rounded shadow"
              onClick={decrementUseDispatch}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DynamicHooksCounter;
