import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../data";
// reducer function

const Index = () => {
  const [name, setName] = useState("");
  const [people, setPeople] = useState(data);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // const handleChange = () => {};

  return (
    <>
      {showModal && <Modal />}
      <form onSubmit={handleSubmit} className="Forms">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          add
        </button>
      </form>
    </>
  );
};

export default Index;
