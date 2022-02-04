import './App.css';
import Panel from './components/Panel/Panel';
import { useState } from 'react';
import Users from './components/Users/Users';

function App() {

  const [users, setUsers] = useState([
    {
      username: 'aff123456',
      age: 25
    },
    {
      username: 'guest',
      age: 22
    }
  ]);

  const addUserHandler = props => {
    // console.log('yup');
    console.dir(props);
    // const updatedUsers = [...users];
    // updatedUsers.push(props);
    // setUsers(updatedUsers);
    setUsers(prevState => {
      return [...prevState, props];
    });
  }

  return (
    <div id='wrapper'>
      <Panel onAddUser={addUserHandler} />
      <Users users={users} />
    </div>
  );
}

export default App;