import { useEffect, useState } from "react";
import React from "react";

import './Subpanel.css';

const Subpanel = props => {

  console.log(`component ${props.title} reloaded`);

  const [value, setValue] = useState('');
  const [className, setClassName] = useState(props.setClass.join(' '));
  // console.log(props.setClass);
  // props.setClass.splice(props.setClass.indexOf('invalid'), 1);
  // console.log(props.setClass);
  // let className = props.setClass.join(' ');
  console.log(`className: ${className}`);

  useEffect(() => {
    // console.log(value);
    if (className.indexOf('invalid') > 0) {
      console.log(`before removal: ${props.setClass}`);
      props.setClass.splice(props.setClass.indexOf('invalid'), 1);
      console.log(`after removal: ${props.setClass}`);
      // className = props.setClass.join(' ');
      setClassName(props.setClass.join(' '));
    }
  }, [value]);

  const updateValue = event => {
    setValue(event.target.value);
  }  

  return (
    <div className={className}>
      <label htmlFor={props.id}>{props.title}</label>
      <input id={props.id} type={props.type} onChange={updateValue}/>
    </div>
  );
}

export default Subpanel;