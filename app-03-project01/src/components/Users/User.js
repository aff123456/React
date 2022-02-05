import React from "react";

import classes from './User.module.css';

const User = props => {
  return (
    <li className={classes.user}>
      <h2>{props.user.username}</h2>
      <h4>{props.user.age}</h4>
    </li>
  )
}

export default User;
