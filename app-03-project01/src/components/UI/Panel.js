import React, { useRef, useState } from "react";

import classes from './Panel.module.css';
import './Subpanel.css';
import Button from "./Button";
import Card from './Card';
import ErrorModal from "./ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const Panel = props => {

  const usernameInputRef = useRef();
  const ageInputRef = useRef();

  const initialClasses = {
    username: 'username',
    age: 'age'
  }

  const [subClasses, setSubClasses] = useState(initialClasses);

  const [error, setError] = useState();

  const submitHandler = event => {
    event.preventDefault();
    // const { username, age } = event.target;
    const username = usernameInputRef.current;
    const age = ageInputRef.current;
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
        setError({
          title: 'ERROR-02: Invalid age',
          message: 'Please enter a valid age (non-empty positive values)'
        });
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
    setError({
      title: 'ERROR-01: Invalid username',
      message: 'Please enter a valid username (non-empty values)'
    })
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

  const errorHandler = () => {
    setError(null);
  }

  return (
    <Wrapper>
      {error && <ErrorModal title={error.title || "An error has occured!"}
        message={error.message || "Something went wrong"}
        onConfirm={errorHandler} />}
      <Card>
        <form className={classes.panel} onSubmit={submitHandler}>
          <div className={subClasses.username}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" onChange={updateValue} ref={usernameInputRef} />
          </div>
          <div className={subClasses.age}>
            <label htmlFor="age">Age</label>
            <input id="age" type="number" onChange={updateValue} ref={ageInputRef} />
          </div>
          {/* <Subpanel title="Username" type="text" id="username" className={subClasses.username} />
              <Subpanel title="Age" type="number" id="age" className={subClasses.age} /> */}
          <Button type="submit" text="Submit!" />
        </form>
      </Card>
    </Wrapper>
  )
}

export default Panel;