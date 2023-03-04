// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";
import AddUser from "./components/users/AddUser";
import UserList from "./components/users/UserList";

function App() {
  const [usersList,setUsersList]=useState([])

  const addUserHandler=(uName,uAge)=>{
setUsersList((prevUsersList)=>{
  return[...prevUsersList,{name:uName,age:uAge,id:Math.random().toString()}]
})
  }
  return (
    <div className="App">
      <header className="App-header">
       <AddUser onAddUser={addUserHandler}/>
       <UserList users={usersList}/>
      </header>
    </div>
  );
}

export default App;
