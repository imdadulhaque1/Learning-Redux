const store = require("./app/store");
const { counterActions } = require("./features/counter/counterSlice");

// initial State
console.log(store.getState());

// subscribe to state chnages
store.subscribe(() => {
  console.log(store.getState());
});

// dispatch actions
store.dispatch(counterActions.increment());
store.dispatch(counterActions.increment());
store.dispatch(counterActions.decrement());
