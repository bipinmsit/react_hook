import React, { useState, useMemo, useCallback, useRef } from "react";
import UseReducer from "./UseReducer";
import UseState from "./UseState";
import UseMemo from "./UseMemo";
import UseCallback from "./UseCallback";
import Child from "./Child";

const App = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const reference = useRef(null);

  //   const array = [1, 2, 3];

  const data = useMemo(() => {
    return [1, 2, 3];
  }, []);

  const handleClick = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);

  const clickHandler = () => {
    reference.current.focus();
    reference.current.style.color = "red"
  };
  return (
    <div>
      <h1>Learning of Hooks</h1>
      <UseState />
      <UseReducer />
      <UseMemo name="Bipin" array={data} />
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <UseCallback eventHandler={handleClick} />

      <hr />

      <Child ref={reference} />
      <button onClick={clickHandler}>Click me</button>
    </div>
  );
};

export default App;
