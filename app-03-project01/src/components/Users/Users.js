import React from "react";

import User from './User';

import classes from './Users.module.css';

const Users = props => {

  return (
    <ul className={classes.users}>
      {props.users.length ? props.users.map((user, index) => (
        <User user={user} key={index} />
      )) : 'No users found'}
    </ul>
  )
};

export default Users;