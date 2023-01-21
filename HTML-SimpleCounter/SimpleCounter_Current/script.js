// Select DOM elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// Initilize the State
let countn = 0;

// event listeners
incrementEl.addEventListener("click", () => {
  countn++;
  counterEl.innerHTML = count;
});
decrementEl.addEventListener("click", () => {
  countn--;
  counterEl.innerHTML = count;
});
