import rootReducer from "../rootReducer";

//! Create Our First middleware
const myLogger = (store) => (next) => (action) => {
  console.log(`Action: ${JSON.stringify(action)}`);
  console.log(`Before: ${JSON.stringify(store.getState())}`);

  //! Upcomming Action
  const upcommingState = [action].reduce(rootReducer, store.getState());

  console.log(`Upcomming State: ${JSON.stringify(upcommingState)}`);

  //! Pass Action
  return next(action);
};
export default myLogger;
