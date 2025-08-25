import React from "react";

export default function FirstComponent() {
  console.log("First Component is re-rendered...");
  return (
    <div>
      <p>This is Another Component - First Component</p>
    </div>
  );
}

// comp
// value - huge,big,expansive
// function

// memoisation - prevent(bachana) re-rendring(re-creating)

// memo - HOC
// useMemo - hook
// useCallback - hook
