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

const getLocalStorage = () => {
  let people = localStorage.getItem("people");
  if (people) {
    return JSON.parse(people);
  } else {
    return [];
  }
};

const CrudForms = () => {
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const [people, setPeople] = useState(getLocalStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "worked",
    type: "danger",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    // dynamic properties
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(person.firstName && person.email && person.age)) {
      showAlert(true, "danger", "please enter value");
    } else if (person.firstName && person.email && person.age && isEditing) {
      // console.log("Editing");
      showAlert(true, "success", "Content Edited");
      setPeople(
        people.map((p) => {
          if (p.id === editId) {
            return {
              ...p,
              firstName: person.firstName,
              email: person.email,
              age: person.age,
            };
          }
          return p;
        })
      );
      setIsEditing(false);
      setPerson({ firstName: "", email: "", age: "" });
    } else {
      // show alert
      showAlert(true, "success", "Form Added");
      setPeople([
        ...people,
        { ...person, id: new Date().getTime().toString() },
      ]);
      setPerson({ firstName: "", email: "", age: "" });
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    showAlert(true, "danger", "List Empty");
    setPeople([]);
  };

  const removeItem = (id) => {
    showAlert(true, "danger", "Item Removed");
    setPeople(people.filter((person) => person.id !== id));
  };

  const editItem = (id) => {
    const specificPerson = people.find((person) => person.id === id);
    setIsEditing(true);
    setEditId(id);
    setPerson(specificPerson);
  };

  useEffect(() => {
    localStorage.setItem("people", JSON.stringify(people));
  }, [people]);

  return (
    <section className="section-center">
      <form onSubmit={handleSubmit} className="pform">
        <div className="form-top-height">
          <h2>Crud</h2>
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} people={people} />
          )}
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
            name="age"
            id="age"
            value={person.age}
            onChange={handleChange}
            placeholder="23"
          />
          <input
            type="text"
            name="email"
            id="email"
            value={person.email}
            onChange={handleChange}
            placeholder="example@email.com"
            style={{ textTransform: "lowercase" }}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {people.length > 0 && (
        <div className="people-container">
          <List people={people} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
};

// const MultipleInputForms = () => {
//   const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
//   const [people, setPeople] = useState([]);

//   const handleChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     console.log(name, value);

//     // dynamic properties

//     setPerson({ ...person, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (person.firstName && person.email && person.age) {
//       setPeople([
//         ...people,
//         { ...person, id: new Date().getTime().toString() },
//       ]);
//       setPerson({ firstName: "", email: "", age: "" });
//     }
//   };

//   return (
//     <>
//       <article>
//         <form className="FForms" onSubmit={handleSubmit}>
//           <div className="FForms-control">
//             <label htmlFor="firstName">Name: </label>
//             <input
//               type="text"
//               name="firstName"
//               id="firstName"
//               value={person.firstName}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="FForms-control">
//             <label htmlFor="email">Email: </label>
//             <input
//               type="text"
//               name="email"
//               id="email"
//               value={person.email}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="FForms-control">
//             <label htmlFor="age">Age : </label>
//             <input
//               type="text"
//               name="age"
//               id="age"
//               value={person.age}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <button type="submit">add person</button>
//           </div>
//         </form>
//         {people.map((person) => {
//           const { id, firstName, email, age } = person;
//           return (
//             <div className="item" key={id}>
//               <h4>
//                 {firstName}, {age}
//               </h4>
//               <p>{email}</p>
//             </div>
//           );
//         })}
//       </article>
//     </>
//   );
// };

// const Forms = () => {
//   const [firstName, setFirstName] = useState("");
//   const [email, setEmail] = useState("");
//   const [age, setAge] = useState("");

//   const [people, setPeople] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // !always put prevent default
//     // console.log(firstName, email);
//     if (firstName && email) {
//       // const person = { firstName: firstName, email: email };
//       // shorthand
//       // cuz i dont wanna add packages...
//       const person = {
//         id: new Date().getTime().toString(),
//         firstName,
//         email,
//         age,
//       };
//       // console.log(person);
//       setPeople((oldPeople) => [...people, person]);
//       setFirstName("");
//       setEmail("");
//     } else {
//       console.log("empty values");
//     }
//   };

//   return (
//     <>
//       <article>
//         <form className="FForms" onSubmit={handleSubmit}>
//           <div className="FForms-control">
//             <label htmlFor="firstName">Name: </label>
//             <input
//               type="text"
//               name="firstName"
//               id="firstName"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//             />
//           </div>
//           <div className="FForms-control">
//             <label htmlFor="email">Email: </label>
//             <input
//               type="text"
//               name="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="FForms-control">
//             <label htmlFor="age">Age : </label>
//             <input
//               type="text"
//               name="age"
//               id="age"
//               value={age}
//               onChange={(e) => setAge(e.target.value)}
//             />
//           </div>
//           <div>
//             <button type="submit">add person</button>
//           </div>
//         </form>
//         {people.map((person) => {
//           const { id, firstName, email } = person;
//           return (
//             <div className="item" key={id}>
//               <h4>{firstName}, 24</h4>
//               <p>{email}</p>
//             </div>
//           );
//         })}
//       </article>
//     </>
//   );
// };

export default CrudForms;
