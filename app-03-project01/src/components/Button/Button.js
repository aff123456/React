import React from "react";

import './Button.css';

const Button = props => {
  return (
    <button type={props.type}>Submit!</button>
  )
}

export default Button;