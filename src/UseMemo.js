import React from "react";

const UseMemo = ({ name, array }) => {
  console.log("useMemo Re Render");
  return (
    <div>
      <h4>Example of useMemo</h4>
      <p>My name is {name}</p>
      <p>{array}</p>
    </div>
  );
};

export default React.memo(UseMemo);
