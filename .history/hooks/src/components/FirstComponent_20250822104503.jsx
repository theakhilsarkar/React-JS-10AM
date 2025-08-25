import React, { memo, useState } from "react";

const FirstComponent = memo(() => {
  console.log("First Component is re-rendered...");
  const [count, setCount] = useState(0);
  return (
    <div>
    <h1>{count}</h1>
    <button onC>++</button>
      <p>This is Another Component - First Component</p>
    </div>
  );
});

export default FirstComponent;

// comp
// value - huge,big,expansive
// function

// memoisation - prevent(bachana) re-rendring(re-creating)

// memo - HOC
// useMemo - hook
// useCallback - hook
