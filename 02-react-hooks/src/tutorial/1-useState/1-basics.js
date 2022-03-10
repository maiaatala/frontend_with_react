import React, { useState } from "react";

// * useState(value) = [value, function]
// * functions controlls the state of the value

const UseStateBasics = () => {
  const [title, setTitle] = useState("random title");

  const handleClick = () => {
    if (title === "random title") {
      setTitle("hello world");
    } else {
      setTitle("random title");
    }
  };

  return (
    <React.Fragment>
      <h1>{title}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;

// ! important notes
/* 
hooks always start with the word use
component names must start with uppercase
they must be in the function/component body
cannot be called in condition 
*/
