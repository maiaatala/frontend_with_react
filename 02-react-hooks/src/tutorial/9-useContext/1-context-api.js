import React, { useState, useContext } from "react";
import { data } from "../../data";
// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext();
// two componentes - Provider | Consumer (we dont use the consumer)
// provider works as a destribuitor

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3>prop drilling</h3>
      <List />
      {/* <List people={people}/> */}
    </PersonContext.Provider>
  );
};

const List = ({}) => {
  const { people } = useContext(PersonContext);
  //or
  // const mainData = useContext(PersonContext)
  // mainDatala.people
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);

  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
