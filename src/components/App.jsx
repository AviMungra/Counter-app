import React, { useState } from "react";

function App() {
  // const state = useState(1);

  /* You can also write the above line (in the comment) as below if you don't want to separately import the "useState" function using named import:

        const state = React.useState();

     This is because "useState" function is already present in React and we have already import React.
     So we can just call the function whenever we want using dot notation
  */

  const [count, setCount] = useState(1); // Used the concept of Destructuring of ES6 to destructure an array which we get from the "useState" function as output

  // function to increase the count value
  function increase() {
    setCount(count + 1); // setting the value of "count" variable using "setCount" function of the "useState" fucntion
  }

  // function to decrease the count value
  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>Counter <div>{count}</div></h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
