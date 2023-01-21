// Initiliaze DOM elements query
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// Initilize the State
const InitialState = {
  value: 0,
};

// Create Reducer Function
function counterReducer(state = InitialState, action) {
  if (action.type === "increment") {
    return {
      ...state,
      value: state.value + 1,
    };
  } else if (action.type === "decrement") {
    return {
      ...state,
      value: state.value - 1,
    };
  } else {
    return state;
  }
}

// Create Store
const store = Redux.createStore(counterReducer);

const render = () => {
  const renderState = store.getState();
  counterEl.innerText = renderState.value.toString();
};

// Update UI Initially
render();

store.subscribe(render);

// Button Click Listener
incrementEl.addEventListener("click", () => {
  store.dispatch({
    type: "increment",
  });
});
decrementEl.addEventListener("click", () => {
  store.dispatch({
    type: "decrement",
  });
});
