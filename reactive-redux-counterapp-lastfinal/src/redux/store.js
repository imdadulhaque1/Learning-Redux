import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";

const myLogger = (store) => (next) => (action) => {
  console.log(`Current Action: ${JSON.stringify(action)}`);
  console.log(`Before Action: ${JSON.stringify(store.getState())}`);

  const upcommingState = [action].reduce(rootReducer, store.getState());
  console.log(`Upcomming Action: ${JSON.stringify(upcommingState)}`);

  //TODO: Passing Action
  return next(action);
};

const store = createStore(rootReducer, applyMiddleware(myLogger));

export default store;
