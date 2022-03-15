import React, { useState, useEffect } from "react";

const ShortCircuit = () => {
  const [text, setText] = useState("");

  const firstValue = text || "hello world";
  const secondValue = text && "hello world2";

  /* if text = false 
    firstValue = "Hello World"
    secondValue = ""
  if text = true
    firstValue = {text}
    secondValue = "Hello World"
  */

  return (
    <>
      {/* <h1>v1: {firstValue}</h1>
      <h1 style={{ margin: "0" }}>v2: {secondValue}</h1> */}
      <h1>{text || "Under Construction"}</h1>
      <h2>{!text && "try again later..."}</h2>
      <h2>{text && "My Site"}</h2>
      <button
        className="btn"
        onClick={() => {
          setText((prev) => {
            if (!prev) {
              return "John Doe";
            }
            return "";
          });
        }}
      >
        change txt
      </button>
    </>
  );
};

export default ShortCircuit;
