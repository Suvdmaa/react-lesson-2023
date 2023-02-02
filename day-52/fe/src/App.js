import { useEffect, useState } from 'react';
import './App.css';
import { fetchAllData, deleteUser , createUser , updateUser} from './services/axiosUsersServices';


function App() {
  const URL = "http://localhost:8080/users"
  const newUser = {
    id: '',
    username: '',
    age: ''
  }
  const [users, setUsers] = useState([])
  const [isUpdate, setIsUpdate] = useState(false)
  const [currentUser, setCurrentUser] = useState(newUser)

  useEffect(() => {
    fetchAllData(URL, setUsers)
  }, [])

  

  async function handleSubmit(e){
    e.preventDefault();

    if(!isUpdate){    
      updateUser(e, URL, setUsers)
    } else {
      createUser(currentUser, URL, setUsers, setIsUpdate, setCurrentUser, newUser)
    }
  }

  async function handleDelete(userId){
    deleteUser(userId, URL, setUsers)
  }

  async function handleEdit(userId){
    console.log(userId)
    setIsUpdate(true)

    const filteredUser = users.filter(user => user.id === userId)[0]  // filter ni dandaa array butsaadag neg bol gants esvel olon
    if(filteredUser){
      setCurrentUser({
        id: filteredUser.id,
        age: filteredUser.age,
        username: filteredUser.username
      })
    }
  }

  function handleUserName(e){
    console.log(e.target.value)
    setCurrentUser({...currentUser, username: e.target.value})
  }

  function handleUserAge(e){
    console.log(e.target.value)
    setCurrentUser({...currentUser, age: e.target.value})
  }



  return (
    <div className="App">
     <h1>Day - 52 - NodeJS FS Module</h1>
     <h3>Create User Form</h3>
     <form onSubmit={handleSubmit}>
      <label>
        User Name: 
        <input name="username" value={currentUser.username} onChange={handleUserName}/>
      </label>
      <br/>
      <label>
        Age: 
        <input name="age" value={currentUser.age} onChange={handleUserAge}/>
      </label>
      <br/>
      <button>{isUpdate ? "Update" : "Submit"}</button>
     </form>
     <h3>Users List</h3>
     {users && users.map((user) => {
      return (
        <div>
          <p>{user.username} : {user.age}</p>
          {' '}
          <button onClick={() => {
            handleDelete(user.id)
          }}>Delete</button>
          <button onClick={() => {
            handleEdit(user.id)
          }}>Edit</button>
        </div>
      )
     })}
    </div>
  );
}

export default App;
