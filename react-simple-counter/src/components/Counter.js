import React from 'react'

function Counter() {
  return (
    <>
        <div className="max-w-md mx-auto mt-10 space-y-5">
            <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-slate-100 rounded shadow ">
                <div className="text-2xl font-semibold" id="counter2">0</div>
                <div className="flex  space-x-3">
                    <button className="bg-indigo-400 text-white px-3 py-2 rounded shadow" id="increment2">Increment</button>
                    <button className="bg-purple-400 text-white px-3 py-2 rounded shadow" id="decrement2">Decrement</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Counter;