import { useState, useEffect } from "react";

function Main() {
  const [toggleOne, setToggleOne] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect 1 ran.");
  }, []);

  useEffect(() => {
    console.log("useEffect 2 ran.");
    if (toggleTwo) console.log("if true this runs");
  }, [toggleTwo]);

  // useEffect(() => {
  //   const myInterval = setInterval(() => {
  //     console.log(`useEffect 3 with interval ${count} is running.`);
  //   }, 1000);
  //   return () => {
  //     console.log(
  //       `UseEffect3 cleanup ran.\nsetInterval number ${count} is being cleared out`
  //     );
  //     clearInterval(myInterval);
  //   };
  // }, [count]);

  return (
    <div>
      {console.log("render or re-render")}
      <h1>Main Component</h1>
      <button onClick={() => setToggleOne(!toggleOne)}>ToggleOne</button>
      <button onClick={() => setToggleTwo(!toggleTwo)}>ToggleTwo</button>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  );
}

export default Main;
