import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { FaEdit, FaTrash } from "react-icons/fa";
// * use reducer is important when working with teams
import reducer from "./reducer";
import { data } from "../../data";

const defaultState = {
  people: data,
  isModalOpen: false,
  modalContent: "hello World",
};

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <div>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={handleSubmit} className=" section-center Forms">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn" style={{ background: "black" }}>
          add
        </button>
      </form>
      <div className="section-center people-container ">
        {state.people.map((person) => {
          return (
            <div key={person.id} className="people-item">
              <h3>{person.name}</h3>
              <button
                className="delete-btn"
                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", payload: person.id })
                }
              >
                <FaTrash />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
