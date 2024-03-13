import { useReducer } from "react";

const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement"
}

function reducer(state, action) {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { count: state.count + 1 }
    case ACTION.DECREMENT:
      return { count: state.count - 1 }
    default:
      return state
  }
}

export default function UseReducer2() {

  const [state, dispatch] = useReducer(reducer, { count: 0 })

  function increment() {
    dispatch({ type: ACTION.INCREMENT })
  }

  function decrement() {
    dispatch({ type: ACTION.DECREMENT })
  }

  return (
    <div>
      <button onClick={increment}>+</button>
      {state.count}
      <button onClick={decrement}>-</button>
    </div>
  );

}

