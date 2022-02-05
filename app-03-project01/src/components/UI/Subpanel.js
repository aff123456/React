import { useEffect, useState } from "react";
import React from "react";

import './Subpanel.css';

const Subpanel = props => {

  console.log(`component ${props.title} reloaded`);

  const [value, setValue] = useState('');
  const [className, setClassName] = useState(props.className);

  useEffect(() => {
    console.log(`className updated: ${className}`);
  }, [className]);

  console.log(`className: ${className} (${typeof (className)})`);

  const updateClasses = () => {
    if (className.indexOf('invalid') > -1) {
      const newClasses = className.replace('invalid', '').trim();
      console.log(`newClasses: ${newClasses}`);
      setClassName(newClasses);
      setClassName(newClasses);
    }
  }

  const updateValue = event => {
    // setClassName(value)
    setValue(event.target.value);
    updateClasses();
  }

  return (
    <div className={className}>
      <label htmlFor={props.id}>{props.title}</label>
      <input id={props.id} type={props.type} onChange={updateValue} />
    </div>
  );
}

export default Subpanel;