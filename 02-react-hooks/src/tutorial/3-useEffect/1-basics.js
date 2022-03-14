import React from "react";

/* 
* It allows you to do the side effects
any work outside of the componente:
- changing doc title
- signing up for subscriptions
- setting up event listener
! can have multiple useEffects
*/

/* 
! runs AFTER every re-render
cleanup function & second parameter
*/

/*
! second parameter: list of dependencies
[] : only runs on the first render
[value] : only runs when something about that value changes
*/

export default function useEffectBasics() {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    console.log("call useEffect");
    if (value > 0) {
      document.title = `New Messages(${value})`;
    } else {
      document.title = `React App`;
    }
  }, [value]);

  console.log("render component");

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
  /* everytime we click on the button, we re-render the value and call the useEffect function */
}
