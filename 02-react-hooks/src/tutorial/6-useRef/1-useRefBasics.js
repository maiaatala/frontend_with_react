import React, { useRef, useEffect } from "react";

// * the way to set up uncontrolled inputs with React
/* 
works a lot like useState
useRef preserves values inbetween renders
does not trigger re-render
target dom nodes/elements
*/
const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current);
  };

  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
    //since useRef hook wont trigger a re-render, we can freely use it to focus on page
  });

  return (
    <>
      <form action="" className="Forms" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
          <button type="submit" className="btn">
            submit
          </button>
        </div>
      </form>
      <div ref={divContainer}>hello World</div>
    </>
  );
};

export default UseRefBasics;
