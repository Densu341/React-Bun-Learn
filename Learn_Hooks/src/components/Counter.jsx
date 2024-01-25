import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // menggantikan componentDidMount dan componentDidUpdate
  useEffect(() => {
    console.count("di dalam useEffect");
    document.title = `You have clicked ${count}x`;
  });

  const increase = () => setCount((prevCount) => prevCount + 1);
  const decrease = () => setCount((prevCount) => prevCount - 1);

  console.count("rendering");

  return (
    <>
      <button onClick={increase}>increase</button>
      <p>Count: {count}</p>
      <button onClick={decrease}>decrease</button>
    </>
  );
}

export default Counter;
