import React, { useState } from 'react';

// import styled from 'styled-components';

import Button from '../../UI/Button/Button';
// import './CourseInput.css';
import styles from './CourseInputMod.module.css';

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${props => props.invalid ? 'red' : 'black'};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     // border: 2px solid #ccc;
//     border: 2px solid ${props => props.invalid ? 'red' : '#ccc'};
//     background: ${props => props.invalid ? 'salmon' : 'transparent'};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//     border-radius: 5px;
//   }

//   & input:focus {
//     outline: none;
//     background: #99e2b1;
//     border-color: #417452;
//   }
// `;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    event.target[0].value = '';
    setEnteredValue(event.target[0].value.trim());
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
      {/* <div className={`form-control${!isValid ? ' invalid' : ''}`}> */}
      {/* <FormControl className={!isValid ? 'invalid' : ''}> */}
      {/* <FormControl invalid={!isValid}> */}
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      {/* </FormControl> */}
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
