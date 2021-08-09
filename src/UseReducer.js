import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return state + 1;
      break;

    case "dec":
      return state - 1;
      break;

    default:
      break;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("useReducer Re Render")

  return (
    <div>
      <h4>Example from useReducer</h4>
      <p>{state}</p>
      <button onClick={() => dispatch({ type: "inc" })}>Inc</button>
      <button onClick={() => dispatch({ type: "dec" })}>Dec</button>
    </div>
  );
};

export default React.memo(UseReducer);
