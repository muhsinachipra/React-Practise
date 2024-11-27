import { useState, useEffect } from "react";

export default function MC3() {

    // const [count, setCount] = useState(0)
    // const [color, setColor] = useState('green')

    // const addCount = () => {
    //     setCount(c => c + 1)
    // }

    // const substractCount = () => {
    //     setCount(c => c - 1)
    // }

    // const changeColor = () => {
    //     setColor(c => c === 'green' ? 'red' : 'green')
    // }

    // useEffect(() => {
    //     document.title = `count ${count} ${color}`
    // }, [count][color])


    // return (
    //     <div>
    //         <p style={{ color: color }}>count: {count}</p>
    //         <button onClick={addCount}>Add</button>
    //         <button onClick={substractCount}>Substract</button>
    //         <button onClick={changeColor}>Change Color</button>
    //     </div>
    // );


    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        console.log("EVENT LISTENER ADDED")

        return () => {
            window.removeEventListener('resize', handleResize)
            console.log("EVENT LISTENER REMOVED")
        }
    }, [])

    useEffect(() => {
        document.title = `SIZE ${width} X ${height}`
    }, [width, height])

    const handleResize = () => {
        setHeight(window.innerHeight)
        setWidth(window.innerWidth)
    }

    return (
        <div>
            <p>width : {width}</p>
            <p>height : {height}</p>
        </div>
    )
}