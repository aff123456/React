import React from "react";

import User from './User';

import classes from './Users.module.css';
import Card from '../UI/Card';

const Users = props => {

  return (
    <Card>
    <ul className={classes.users}>
      {props.users.length ? props.users.map((user, index) => (
        <User user={user} key={index} />
      )) : 'No users found'}
    </ul>
    </Card>
  )
};

export default Users;