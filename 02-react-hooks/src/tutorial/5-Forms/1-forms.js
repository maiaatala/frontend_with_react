import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import "./1-Forms.css";
/*  JS
const input = document.getElementById("my text") 
const inputValue - input.value
react
value, onChange
*/

const CrudForms = () => {
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const [people, setPeople] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    // dynamic properties

    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      setPeople([
        ...people,
        { ...person, id: new Date().getTime().toString() },
      ]);
      setPerson({ firstName: "", email: "", age: "" });
    }
  };

  return (
    <section className="section-center">
      <form onSubmit={handleSubmit} className="grocery-form">
        <div className="grocery-form-top-height">
          <h2>Crud</h2>
          {alert.show && <Alert />}
        </div>
        <div className="form-control">
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={person.firstName}
            onChange={handleChange}
            placeholder="John Doe"
          />
          <input
            type="text"
            name="email"
            id="email"
            value={person.email}
            onChange={handleChange}
            placeholder="example@email.com"
          />
          <input
            type="text"
            name="age"
            id="age"
            value={person.age}
            onChange={handleChange}
            placeholder="23"
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
        <div className="form-control">
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
        <div className="form-control">
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      <div className="grocery-container">
        <List />
        {people.map((person) => {
          const { id, firstName, email, age } = person;
          return (
            <div className="item" key={id}>
              <h4>
                {firstName}, {age}
              </h4>
              <p>{email}</p>
            </div>
          );
        })}
        <button className="clear-btn">clear items</button>
      </div>
    </section>
  );
};

const MultipleInputForms = () => {
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    // dynamic properties

    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      setPeople([
        ...people,
        { ...person, id: new Date().getTime().toString() },
      ]);
      setPerson({ firstName: "", email: "", age: "" });
    }
  };

  return (
    <>
      <article>
        <form className="FForms" onSubmit={handleSubmit}>
          <div className="FForms-control">
            <label htmlFor="firstName">Name: </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="FForms-control">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              name="email"
              id="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="FForms-control">
            <label htmlFor="age">Age : </label>
            <input
              type="text"
              name="age"
              id="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit">add person</button>
          </div>
        </form>
        {people.map((person) => {
          const { id, firstName, email, age } = person;
          return (
            <div className="item" key={id}>
              <h4>
                {firstName}, {age}
              </h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

const Forms = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // !always put prevent default
    // console.log(firstName, email);
    if (firstName && email) {
      // const person = { firstName: firstName, email: email };
      // shorthand
      // cuz i dont wanna add packages...
      const person = {
        id: new Date().getTime().toString(),
        firstName,
        email,
        age,
      };
      // console.log(person);
      setPeople((oldPeople) => [...people, person]);
      setFirstName("");
      setEmail("");
    } else {
      console.log("empty values");
    }
  };

  return (
    <>
      <article>
        <form className="FForms" onSubmit={handleSubmit}>
          <div className="FForms-control">
            <label htmlFor="firstName">Name: </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="FForms-control">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="FForms-control">
            <label htmlFor="age">Age : </label>
            <input
              type="text"
              name="age"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">add person</button>
          </div>
        </form>
        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}, 24</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default CrudForms;
