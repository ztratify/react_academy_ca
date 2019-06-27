import React from "react";
import ReactDOM from "react-dom";

// PLAIN JS WORKS FINE!
// document.getElementById('root').innerHTML = "<h1>Hello World!</h1>";

// React.createElement(elementType, propertries, children/contents)
// const el = React.createElement('h1', null, 'Hello World!')
// const el = React.createElement('h1', {
//   className: "class_using_className_not_class", // className !! (class is already defined)
//   "data-stuffs": "some data", // use quotes to add hyphen props
//   style: { color: 'cyan' }, mood: '(╯°o°)╯'
// }, 'Hello World!');

// OR USE JSX!
// const dataaaa = "data"
// const el = (<h1 className="class"
//                 data-stuff={dataaaa}
//                 style={{color: "cyan"}}
//             >Hello World!</h1>)
// // use curly braces for plain javascript
// // {/* jsx places props within <el ... > */}
// // {/* ... */} == comment (escape to js, then comment in js)

// ReactDOM.render(el, document.getElementById('root'));

// USING COMPONENTS
// function MyComponent(props) {
//   // return <h1>Hello {props.name} {props.lastName}! {props.children}</h1>
//   const {
//     name: firstName,
//     lastName,
//     children } = props;
//   return <h1>Hello {firstName} {lastName}! {children}</h1>
// }

// USING DESTRUCTURING (it's all just syntax)
// function MyComponent({ name: firstName, lastName, children }) {
//   // return <h1>Hello {props.name} {props.lastName}! {props.children}</h1>
//   return <h1>Hello {firstName} {lastName}! {children}</h1>
// }

// USING RETURN FUNCTION (it's all just syntax)
// const MyComponent = ({ name: firstName, lastName, children }) => (
//   <h1>Hello {firstName} {lastName}! {children}</h1>
// )
// ReactDOM.render(
//   <Counter name="Strat" lastName="Barrett" />, // <MyComponent/> === MyComponent()
//   document.getElementById('root')
// );

// USE CLASSES (to avoid global variables and contain variables)
// class Counter extends React.Component {
//   constructor(props) {
//     ...
//   }
//   render() {
//     return (
//       <>
//         <h1>The count is: {this.count}</h1>
//         <button onClick={this.increase}>+</button>
//       </>
//     );
//   }
// }
// const Counter = props => (
// <React.Fragment> {/* === <> === <div> (to avoid divs everywhere!) */}
//     <h1>The count is: {props.init}</h1>
//     <button onClick={props.init++}>+</button>
//   </React.Fragment>
// );

// USE STATE !!!
// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   state = {count: this.props.init, name: "Strat"};
//   increase() {
//     this.setState({count: this.state.count+1}); // once state is set in constructor, you must use setState()
//   }
//   render() {
//     return (
//       <>
//         <h1>The count is: {this.state.count}</h1>
//         <button onClick={this.increase.bind(this)}>+</button>
//       </>
//     );
//   }
// }
// ReactDOM.render(<Counter init={5} />, document.getElementById("root"));

// STATE w/ ARROW FUNCTIONS (to pass the 'this' context properly)
// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   state = {count: this.props.init, name: "Strat"};
//   increase = () => {
//     this.setState({count: this.state.count+1}); // once state is set in constructor, you must use setState()
//   }
//   render() {
//     return (
//       <>
//         <h1>The count is: {this.state.count === 69 ? this.state.count + ' NICE' : this.state.count}</h1>
//         <button onClick={this.increase}>+</button>
//       </>
//     );
//   }
// }
// ReactDOM.render(<Counter init={65} />, document.getElementById("root"));

// class Counter extends React.Component {
//   state = {count: this.props.init, name: "Strat"};

//   increase = () => {
//     // this.setState({count: this.state.count + 1});
//     // For setting state multiple times within the same function,
//     // create a callback function so state does not "merge" when state is set
//     this.setState((currentState)=>({count: currentState.count + 1}));
//     this.setState((currentState)=>({count: currentState.count + 1}));
//     this.setState((currentState)=>({count: currentState.count + 1}));
//   }

//   render = () => (
//     <>
//       <h1>The count is: {this.state.count === 69 ? this.state.count + ' NICE' : this.state.count}</h1>
//       <button onClick={this.increase}>+</button>
//     </>
//   )
// }

// ReactDOM.render(<Counter init={66} />, document.getElementById("root"));

function MyButton(props) {
  return (
    <button onClick={() => props.increase(props.incr)}>
      {/* +{props.incr} */}
      { props.incr < 0 ? '-' : '+'} {Math.abs(props.incr)}
    </button>
  )
}

class Counter extends React.Component {
  state = { count: this.props.init, name: "Strat" };

  increase = incr => {
    this.setState({ count: this.state.count + incr });
  };

  render = () => (
    <>
      <h1>The count is: {this.state.count}</h1>
      {/* <button onClick={()=>this.increase(1)}>+1</button>
      <button onClick={()=>this.increase(10)}>+10</button>
      <button onClick={()=>this.increase(100)}>+100</button> */}
      <MyButton incr={1} increase={this.increase} />
      <MyButton incr={10} increase={this.increase} />
      <MyButton incr={100} increase={this.increase} />
      <br/><br/>
      <MyButton incr={-1} increase={this.increase} />
      <MyButton incr={-10} increase={this.increase} />
      <MyButton incr={-100} increase={this.increase} />
    </>
  );
}

function App() {
  return <Counter init={0} />
}

ReactDOM.render(<App />, document.getElementById("root"));
