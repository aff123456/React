import React from "react";

const Subpanel = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <input type={props.type}></input>
    </div>
  );
}

export default Subpanel;