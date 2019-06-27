import React from 'react';
import { Button } from 'reactstrap';

export default function MyButton(props) {
  return (
    <Button onClick={() => props.increase(props.incr)}>
      {props.incr < 0 ? '-' : '+'} {Math.abs(props.incr)}
    </Button>
  )
}
