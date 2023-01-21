//TODO: =====> Select DOM Elements
const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById("decrement");

//TODO: =====>Initial State define of Counter View
let count = 0;

//=====> Event Listner
incrementEl.addEventListener("click", ()=>{
    count++; //incrementing based on click
    counterEl.innerText=count;
})
decrementEl.addEventListener("click", ()=>{
    count--; //incrementing based on click
    counterEl.innerText=count;
})

//! <-----------This is not reusable code---------->
//TODO: =====> Select DOM Elements
const counter2El = document.getElementById('counter2');
const increment2El = document.getElementById('increment2');
const decrement2El = document.getElementById("decrement2");

const counter3El = document.getElementById('counter3');
const increment3El = document.getElementById('increment3');
const decrement3El = document.getElementById("decrement3");

//TODO: =====>Initial State define of Counter View
let count2 = 0;
let count3 = 0;

// ?=====> Event Listner
increment2El.addEventListener("click", ()=>{
    count2++; //incrementing based on click
    counter2El.innerText=count2;
})
decrement2El.addEventListener("click", ()=>{
    count2--; //incrementing based on click
    counter2El.innerText=count2;
})

increment3El.addEventListener("click", ()=>{
    count3++; //incrementing based on click
    counter3El.innerText=count3;
})
decrement3El.addEventListener("click", ()=>{
    count3--; //incrementing based on click
    counter3El.innerText=count3;
})