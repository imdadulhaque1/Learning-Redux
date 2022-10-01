// !=====> Select DOM Elements
const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById("decrement");

//TODO: =====>Initial State define of Counter View
let count = 0;

// ?=====> Event Listner
incrementEl.addEventListener("click", ()=>{
    count++; //incrementing based on click
    counterEl.innerText=count;
})
decrementEl.addEventListener("click", ()=>{
    count--; //incrementing based on click
    counterEl.innerText=count;
})