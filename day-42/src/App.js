import { useState } from 'react';

import './App.css';

function App() { 

  const [users, setUsers] = useState([])

  function handleRegister(event){
    event.preventDefault()
    console.log(event.target.firstname.value)
    console.log(event.target.lastname.value)

    setUsers([...users, {firstname: event.target.firstname.value, lastname: event.target.lastname.value, password: event.target.password.value, confirmpassword: event.target.confirm.value}])
    console.log(users)
  }
  return (
    <div className="App">
      <form onSubmit={handleRegister}>
        <label for="fistname">Firstname:</label>
        <input  name="firstname" type="text" />
        <br></br>

        <label for="lastname">Lastname:</label>
        <input name="lastname" type="text" />
        <br></br>

        <label for="password">Password:</label>
        <input name="password"  type="password"/>
        <br></br>

        <label for="confirm-password">Confirm Password:</label>
        <input name="confirm" type="password"  />
        <br></br>
        <button>Register</button>
      </form>

      <h2>Users Preview</h2>
      {users.map(user =>{
        return (
          <div>
            <div>{user.firstname}</div>
            <div>{user.lastname}</div>
          </div>
        )
      })}

    </div>
  );
}

export default App;
