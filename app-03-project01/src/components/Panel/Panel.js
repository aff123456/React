import React from "react";

// import "./Panel.css";
import classes from './Panel.module.css';
import Subpanel from "../Subpanel/Subpanel";
import Button from "../Button/Button";
// import { useState } from "react";

const Panel = props => {

  // console.dir(props);

  // const [username, setUsername] = useState('');
  // const [age, setAge] = useState(0);

  // const submitHandler = event => {
  //   event.preventDefault();
  //   console.log('button pressed!');
  //   console.log(`username validation: ${validate(username)}`);
  //   console.log(`age validation: ${validate(age)}`);
  //   if (validate(username) && validate(age)) {
  //     console.log('valid data');
  //     props.onAddUser({ username, age });
  //   } else {
  //     // popup, something went wrong
  //   }
  // }

  const subClasses = {
    username: ['username'],
    age: ['age', 'invalid', 'helloworld']
  }

  const submitHandler = event => {
    event.preventDefault();
    const { username, age } = event.target;
    let response = validate(username, age);
    if (response.status) {
      console.log('ok');
      props.onAddUser({ username: username.value, age: age.value });
      clearInputs(event);
    } else {
      console.log(response);
    }
  }

  const validate = (username, age) => {
    if (username.value.trim()) {
      if (age.value > 0) {
        return { status: true };
      } else {
        subClasses.age.push('invalid');
        return { status: false, error: age };
      }
    }
    return { status: false, error: username };
  }

  const clearInputs = event => {
    if (!event.target) {
      console.log('no inputs to clear');
    }
    console.log('clearing inputs');
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].localName == 'input') {
        console.dir(event.target[i]);
        event.target[i].value = '';
      }
    }
  }
  // const validate = value => {
  //   console.log(`validate: ${value}, type: ${typeof(value)}`);
  //   if (parseInt(value)) {
  //     return parseInt(value) > 0 ? true : false;
  //   } else {
  //     return value.trim().length > 0 ? true : false;
  //   }
  // }

  // const updateHandler = props => {
  //   console.log(`props received! \n ${props}`);
  //   console.log(`parseInt: ${parseInt(props)}`);
  //   if (parseInt(props)) {
  //     setAge(props);
  //   } else {
  //     setUsername(props);
  //   }
  //   // parseInt(props) ? setAge(props) : setUsername(props);
  // }

  return (
    <form className={classes.panel} onSubmit={submitHandler}>
      <Subpanel title="Username" type="text" id="username" setClass={subClasses.username} />
      <Subpanel title="Age" type="number" id="age" setClass={subClasses.age}/>
      {/* <label htmlFor="username">Username</label>
      <input type='text' id="username"/>
      <label htmlFor="age">Age</label>
      <input type='number' id="age"/> */}
      <Button type="submit" />
    </form>
  )
}

export default Panel;