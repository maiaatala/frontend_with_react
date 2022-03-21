import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./1-Forms.css";
const List = ({ people, removeItem, editItem }) => {
  return (
    <div>
      {people.map((person) => {
        const { id, firstName, email, age } = person;
        return (
          <article key={id} className="people-item">
            <h3 style={{ textTransform: "None" }}>
              {firstName}, {age} {email}
            </h3>
            <div className="form-btn-container">
              <button
                className="edit-btn"
                onClick={() => editItem(id)}
                type="button"
              >
                <FaEdit />
              </button>
              <button
                className="delete-btn"
                onClick={() => removeItem(id)}
                type="button"
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
