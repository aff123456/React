// import styled from 'styled-components';

// const Button = styled.button`
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #71a783;
//   color: white;
//   background: #71a783;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;
//   width: 100%;

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #5b876a;
//     border-color: #5b876a;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }

//   @media (min-width: 768px) {
//     width: auto;
//   }
// `;

import React from 'react';

// import './Button.css';
import styles from './ButtonMod.module.css';

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};



export default Button;
