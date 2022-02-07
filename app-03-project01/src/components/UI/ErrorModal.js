import React, { Fragment } from "react";
// import Wrapper from "../Helpers/Wrapper";
import Button from "./Button";

import Card from "./Card";
import classes from './ErrorModal.module.css';

const ErrorModal = props => {

  return (
    <Fragment>
      <div className={classes.backdrop} onClick={props.onConfirm}/>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button type={'button'} text={'Close'} onClick={props.onConfirm} />
        </footer>
      </Card>
    </Fragment>
  );
}

export default ErrorModal;