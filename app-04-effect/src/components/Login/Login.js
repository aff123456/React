import React, { useEffect, useReducer, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  } else if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.length > 6 };
  } else if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.length > 6 };
  }
  return { value: '', isValid: false };
}

const formReducer = (state, action) => {
  let newState = { ...state };
  switch (action.type) {
    case 'USER_INPUT':
      if (action.var === 'EMAIL') {
        newState.email.value = action.val;
        newState.email.isValid = action.val.includes('@');
      } else {
        newState.password.value = action.val;
        newState.password.isValid = action.val.length > 6;
      }
      break;
    case 'INPUT_BLUR':
      console.log('input blur action');
      if (action.var === 'EMAIL') {
        newState.email.isValid = state.email.value.includes('@');
      } else {
        newState.password.isValid = state.password.value.length > 6;
      }
      break;
    default:
      console.log('oops, something went wrong');
      break;
  }
  newState.email.isValid && newState.password.isValid ? newState.isValid = true : newState.isValid = false;
  return newState;
}

const Login = (props) => {

  const [email, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });

  const [password, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  const [form, dispatchForm] = useReducer(formReducer, {
    email: {
      value: '',
      isValid: null,
    },
    password: {
      value: '',
      isValid: null,
    },
    isValid: null
  });

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  // const [formIsValid, setFormIsValid] = useState(false);

  // useEffect(() => {
  //   console.log('effect running');
  //   return () => {
  //     console.log('effect cleanup');
  //   }
  // }), [];

  // useEffect(() => {
  //   const timerID = setTimeout(() => {
  //     setFormIsValid(email.isValid && enteredPassword.trim().length > 6);
  //   }, 500);

  //   return () => {
  //     clearTimeout(timerID);
  //   };
  // }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    // dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
    dispatchForm({ type: 'USER_INPUT', var: 'EMAIL', val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    // dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
    dispatchForm({ type: 'USER_INPUT', var: 'AGE', val: event.target.value });
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(email.isValid);
    // dispatchEmail({ type: 'INPUT_BLUR' });
    // setFormIsValid(email.isValid && password.isValid);
    dispatchForm({ type: 'INPUT_BLUR', var: 'EMAIL' });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    // dispatchPassword({ type: 'INPUT_BLUR' });
    // setFormIsValid(email.isValid && password.isValid);
    dispatchForm({ type: 'INPUT_BLUR', var: 'AGE' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(form.email.value, form.password.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${form.email.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={form.email.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${form.password.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={form.password.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!form.isValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
