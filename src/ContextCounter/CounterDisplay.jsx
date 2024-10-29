import { useContext } from "react"
import { CounterContext } from "./CounterContext"
import { Link } from "react-router-dom"


const CounterDisplay = () => {
    const { count } = useContext(CounterContext)

    return (
        <div className="">
            <h2>counter value: {count}</h2>
            <Link to='/increment'>
                <button>go to increment page</button>
            </Link>
        </div>
    )
}

export default CounterDisplay