import React, { useState } from "react";

export default function CounterApp() {

    const [count,setCount] =useState(0)

    const Increament= () => {
        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
    }
    const Decreament= () => {
        setCount(c => c - 1)
        setCount(c => c - 1)
        setCount(c => c - 1)
    }
    const Reset= () => {
        setCount(0)
    }

    return(
        <div className="counter-container">
            <p className="counter-display">{count}</p>
            <button className="counter-button" onClick = {Decreament}>Decreament</button>
            <button className="counter-button" onClick = {Reset}>Reset</button>
            <button className="counter-button" onClick = {Increament}>Increament</button>
        </div>
    );
}
