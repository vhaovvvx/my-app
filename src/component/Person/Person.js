import React from "react";

import "./Person.css";
const Person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        this is a {props.name}. I'm {props.age} Year old.
      </p>
      <p>{props.children}</p>
      <input type="text"></input>
    </div>
  );
};

export default Person;
