import React from "react";

const UseCallback = ({ eventHandler }) => {
    console.log("useCallback Re Render")
  return (
    <div>
      <h4>Example of useCallback</h4>
      <button onClick={eventHandler}>Add</button>
    </div>
  );
};

export default React.memo(UseCallback);
