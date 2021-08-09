import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);

  console.log("useState Re Render")
  return (
    <div>
    <h4>Example from useState</h4>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={() => setCount(count - 1)}>Dec</button>
    </div>
  );
};

export default React.memo(UseState);
