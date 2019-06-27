import React from 'react';
import { Input } from "reactstrap";

export default function MyInput(props) {
  return (
    <Input
      type="text"
      id={props.id}
      className="m-3"
      value={props.count}
      onChange={props.change}
    />
  );
}
