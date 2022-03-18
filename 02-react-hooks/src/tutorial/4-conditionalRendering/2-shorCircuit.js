import React, { useState, useEffect } from "react";

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [inpText, setInpText] = useState("");

  /*   const firstValue = text || "hello world";
  const secondValue = text && "hello world2";
  /* if text = false 
    firstValue = "Hello World"
    secondValue = ""
  if text = true
    firstValue = {text}
    secondValue = "Hello World"
  */

  const handleSubmit = (e) => {
    e.preventDefault(); // ! PRECISA DISSO SEMPRE
    setText(inpText);
  };

  const handleChange = (e) => {
    setInpText(e.target.value);
  };

  return (
    <>
      {/* <h1>v1: {firstValue}</h1>
      <h1 style={{ margin: "0" }}>v2: {secondValue}</h1> */}
      <div style={{ minHeight: "100px" }}>
        <h1 style={{ marginTop: "0px" }}>{text || "Under Construction"}</h1>
        <h2>{!text && "Tell me your name..."}</h2>
        <h2>{text && "My Site"}</h2>
      </div>
      <div className="Forms">
        <form onSubmit={handleSubmit}>
          {/* <label>Name: </label> */}
          <input type="text" value={inpText} onChange={handleChange} />
          <button className="btn" onClick={handleSubmit}>
            apply
          </button>
        </form>
      </div>
    </>
  );
};

const TernaryOperator = () => {
  const [isError, setIsError] = useState(true);

  return (
    <>
      <button
        style={{ marginTop: "100px" }}
        className="btn"
        onClick={() => setIsError(!isError)}
      >
        Toggle Component
      </button>
      {isError ? (
        <div>
          <h2 style={{ marginTop: "0px" }}>No Component</h2>
        </div>
      ) : (
        <ShortCircuit />
      )}
    </>
  );
};

export default TernaryOperator;
