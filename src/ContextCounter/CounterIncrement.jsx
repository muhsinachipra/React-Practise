import { useContext } from "react"
import { CounterContext } from "./CounterContext"
import { Link } from "react-router-dom"

const CounterIncrement = () =>{
    const {increment} = useContext(CounterContext)

    return (
        <div className="">
            <h2>Increment Page</h2>
            <button onClick={increment}>Increment Counter</button>
            <Link to='/counter-display'>
            <button>Go To Display Page</button>
            </Link>
        </div>
    )
}

export default CounterIncrement