import React, { useState } from "react";

import classes from './Panel.module.css';
import Subpanel from "../Subpanel/Subpanel";
import Button from "../Button/Button";

const Panel = props => {

  const initialClasses = {
    username: 'username',
    age: 'age'
  }

  const [subClasses, setSubClasses] = useState(initialClasses);

  const submitHandler = event => {
    event.preventDefault();
    const { username, age } = event.target;
    let response = validate(username, age);
    if (response.status) {
      console.log('ok');
      props.onAddUser({ username: username.value, age: age.value });
      clearInputs(event);
      setSubClasses(initialClasses);
    } else {
      console.log(response);
    }
  }

  const validate = (username, age) => {
    if (username.value.trim()) {
      if (age.value > 0) {
        return { status: true };
      } else {
        if (subClasses.age.indexOf('invalid') === -1) {
          const newClasses = subClasses.age += ' invalid';
          setSubClasses(prevState => ({
            ...prevState,
            age: newClasses
          }))
        }
        return { status: false, error: age };
      }
    }
    if (subClasses.username.indexOf('invalid') === -1) {
      const newClasses = subClasses.username += ' invalid';
      setSubClasses(prevState => ({
        ...prevState,
        username: newClasses
      }))
    }
    return { status: false, error: username };
  }

  const clearInputs = event => {
    if (!event.target) {
      console.log('no inputs to clear');
    }
    console.log('clearing inputs');
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].localName === 'input') {
        console.dir(event.target[i]);
        event.target[i].value = '';
      }
    }
  }

  const updateValue = () => {
    setSubClasses(initialClasses);
  }

  return (
    <form className={classes.panel} onSubmit={submitHandler}>
      <div className={subClasses.username}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={updateValue} />
      </div>
      <div className={subClasses.age}>
        <label htmlFor="age">Age</label>
        <input id="age" type="number" onChange={updateValue} />
      </div>
      {/* <Subpanel title="Username" type="text" id="username" className={subClasses.username} />
      <Subpanel title="Age" type="number" id="age" className={subClasses.age} /> */}
      <Button type="submit" text="Submit!" />
    </form>
  )
}

export default Panel;