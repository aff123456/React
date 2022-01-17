import React from "react";

import "./Panel.css";
import Subpanel from "../Subpanel/Subpanel";
import Button from "../Button/Button";

const Panel = props => {
  return (
    <form className="panel">
      <Subpanel title="Username" type="text"/>
      <Subpanel title="Age" type="number"/>
      <Button/>
    </form>
  )
}

export default Panel;