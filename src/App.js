import React, { useState } from "react";
import "./styles.css";

function App() {
  const [users, setUsers] = useState([]);
  const loadUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonResponse = await response.json();
    setUsers(jsonResponse.data);
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Aura  </h1>
        </header>

        <button onClick={loadUsers} className="App-button">
          {" "}
          <b>Get Users</b>
        </button>

        <div className="App-data">
          {users.map(({ id, email, first_name, last_name, avatar }) => (
            <span key={id} className="App-list">
              <img src={avatar} className="App-user" alt="user"></img>
              <br />
              <br />
              <div className="detail">
                {first_name} {last_name}
              </div>
              <br></br>
              {email}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
