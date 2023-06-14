const store = require("./app/store");
const { counterActions } = require("./features/counter/counterSlice");
const {
  dynamicCounterActions,
} = require("./features/dynamicCounter/dynamicCounterSlice");

// initial State
console.log(`Initial State: ${JSON.stringify(store.getState())}`);

// subscribe to state chnages
store.subscribe(() => {
  console.log(store.getState());
});

// // dispatch actions
store.dispatch(counterActions.increment());
store.dispatch(counterActions.increment());
store.dispatch(counterActions.decrement());

// Dynamic action dispatch
store.dispatch(dynamicCounterActions.dynamicIncrement(10));
store.dispatch(dynamicCounterActions.dynamicIncrement(5));
store.dispatch(dynamicCounterActions.dynamicDecrement(5));
