import React from "react";
import data from "./data";
import List from "./List";
import "./birthday.css";

function Birthday() {
  const [people, setPeople] = React.useState(data);
  const [text, setText] = React.useState("clear all");

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays today</h3>
        <List people={people} />
        <button
          onClick={() =>
            setPeople((oldPeople) => {
              if (oldPeople.length === 0) {
                setText("clear all");
                return data;
              } else {
                setText("undo");
                return [];
              }
            })
          }
        >
          {text}
        </button>
      </section>
    </main>
  );
}

export default Birthday;
