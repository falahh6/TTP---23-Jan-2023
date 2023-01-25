import React, {useState, Fragment} from 'react';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';
function App() {
  const [newUser , setNewUser] = useState([]);
  const addUserHandler = (uName, uAge) =>{
    setNewUser((prevUsers => {
      return [...prevUsers, {name : uName , age : uAge, id: Math.random().toString()} ]
    }))
  }

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={newUser}/>
    </Fragment>
  );
}

export default App;
