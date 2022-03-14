import React from "react";

export default function Cleanup() {
  const [size, setSize] = React.useState(window.innerWidth);
  console.log(size);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  React.useEffect(() => {
    console.log("trig");
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
      // good practice to not add a ton of event listeners
    };
  });

  return (
    <>
      <h1>Window</h1>
      <h2>{size} PX</h2>
    </>
  );
}
