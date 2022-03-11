import React from "react";

const UseStateObject = () => {
  const [person, setPerson] = React.useState({
    name: "peter",
    age: 24,
    message: "random message",
  });

  const changeMessage = () => {
    setPerson({ ...person, message: "hello world" });
    // use the spread operator to copy the values of the object into the new object
    // or you will redeclare the object as only the set attribute
  };

  console.log(person);
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>{person.message}</h4>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
