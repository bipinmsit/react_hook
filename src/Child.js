import React, { forwardRef } from "react";

const Child = (props, ref) => {
  return (
    <div>
      <input ref={ref} type="text" />
    </div>
  );
};

export default forwardRef(Child);
