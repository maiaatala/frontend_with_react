import React from "react";

const url = "https://api.github.com/users";

// second argument

export default function Data() {
  const [users, setUsers] = React.useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    console.log(users);
    setUsers(users);
  };

  React.useEffect(() => {
    // cannot use async await inside
    getUsers();
  }, []);

  return (
    <>
      <h1>Github Users</h1>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;

          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
