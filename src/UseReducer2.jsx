import { useReducer } from "react";

const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { count: state.count + 1 };
    case ACTION.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <button onClick={() => dispatch({ type: ACTION.INCREMENT })}>+</button>
      {state.count}
      <button onClick={() => dispatch({ type: ACTION.DECREMENT })}>-</button>
    </div>
  );
}
