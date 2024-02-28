import React, { useState, useEffect } from "react";

export default function MC3() {

    const [count, setCount] = useState(0)
    const [color, setColor] = useState('green')

    const addCount = () => {
        setCount(c => c + 1)
    }

    const substractCount = () => {
        setCount(c => c - 1)
    }

    const changeColor = () => {
        setColor(c => c === 'green' ? 'red' : 'green')
    }

    useEffect(() => {
        document.title = `count ${count} ${color}`
    }, [count][color])


    return (
        <div>
            <p style={{ color: color }}>count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={substractCount}>Substract</button>
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
}