// const arr = [1, 2, 3, 4, 5, 6];

// const totalArray = arr.reduce((prevNum, currentNum) => {
//   return prevNum + currentNum;
// }, 0);
// console.log(totalArray);

const actions = [
  { type: "increment", payload: 1 },
  { type: "increment", payload: 1 },
  { type: "increment", payload: 1 },
  { type: "decrement", payload: 1 },
];

const InitialState = {
  value: 0,
};

const counterReducer = (state, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === "decrement") {
    return {
      ...state,
      value: state.value - action.payload,
    };
  } else {
    return {
      state,
    };
  }
};

const finalResult = actions.reduce(counterReducer, InitialState);
console.log(finalResult);
