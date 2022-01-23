import { useEffect, useState } from "react";
import React from "react";

const Subpanel = props => {

  // const [value, setValue] = useState(undefined);

  // const changeHandler = event => {
  //   setValue(event.target.value);
  // }

  // const updateHandler = event => {
  //   console.log(`value is: ${value}`);
  //   // setValue(event.target.value);
  //   props.onUpdate(value);
  // }

  // // useEffect(() => {
  // //   console.log(`Value of ${props.title} changed`);
  // //   props.onUpdate(value);
  // //   console.log(`New value: ${value}`);
  // // }, [value]);

  // const onReset = () => {
  //   setValue(undefined);
  // }

  return (
    <div>
      <label htmlFor={props.id}>{props.title}</label>
      <input id={props.id} type={props.type} />
    </div>
  );
}

export default Subpanel;