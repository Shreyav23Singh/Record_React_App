import React , {useState} from 'react';
import AddUser  from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';


function App() {
  const [usersList , setUsersList] =useState([]);

  const addUserHandler = (uName , uAddress , uAge ,uCollegeName) =>{
    setUsersList((prevUsersLists) =>{
      return [...prevUsersLists , {name :uName , address :uAddress , age :uAge , collName :uCollegeName , id : Math.random.toString()}];
    });
  }
  return (
    <div>
    <AddUser onAddUser ={addUserHandler}/>
    <UsersList users={usersList}/>

    </div>
  );
}

export default App;
