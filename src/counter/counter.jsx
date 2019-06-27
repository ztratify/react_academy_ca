import React from 'react';
import MyButton from './my-button';
import MyInput from './my-input';
import { Input } from 'reactstrap';

class Counter extends React.Component {
  state = { count: this.props.init };
  name = React.createRef();

  increase = (incr) => {
    this.setState({ count: this.state.count + incr });
  };

  change = (e) => {
    if (Number(e.target.value)) {
      this.setState({ count: Number(e.target.value) });
    }
  };

  updateTitle = () => {
    document.title = "Count is " + this.state.count + " // " + this.name.current.value;
  };

  componentDidMount = () => {
    this.updateTitle();
    const count = +window.localStorage.getItem("count"); // is localStorage["count"] a number ?
    if (count) {
      this.setState({ count });
    }
  };

  componentDidUpdate = () => {
    this.updateTitle();
  };

  componentWillUnmount = () => {
    window.localStorage.setItem('count', this.state.count);
  };

  render = () => (
    <>
      <h1>
        Counter:&nbsp;
        <MyInput
          id="count-input"
          count={this.state.count}
          change={this.change}
        />
      </h1>
      <div className="flex">
        <MyButton incr={1} increase={this.increase} />
        <MyButton incr={10} increase={this.increase} />
        <MyButton incr={100} increase={this.increase} />
        <MyButton incr={-1} increase={this.increase} />
        <MyButton incr={-10} increase={this.increase} />
        <MyButton incr={-100} increase={this.increase} />
      </div>
      <Input className="m-3" innerRef={this.name} />
    </>
  );
}

export default Counter;
