import React from "react";
import Counter from "./counter/counter";
import { Container } from "reactstrap";
import "./styles.scss";
import Navigation from "./navigation";
import Home from "./home/home.jsx";
import About from "./about/about.jsx";
import Footer from "./footer";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// REMOVE IN FAVOUR OF BrowserRouter
// function switcher(pageName) {
//   switch (pageName) {
//     case "#home":
//       return <Home />;
//     case "#about":
//       return <About />;
//     case "#counter":
//       return <Counter init={0} />;
//     default:
//       return <Home />;
//   }
// }

export default class App extends React.Component {
  // REMOVE IN FAVOUR OF BrowserRouter
  // state = {
  //   path: "#home"
  // };

  // componentDidMount() {
  //   window.addEventListener("hashchange", this.changeHash);
  // }

  // changeHash = () => {
  //   this.setState({ path: window.location.hash });
  // };

  render = () => (
    <>
    <BrowserRouter>
      <Navigation />
      <Container className="mt-2">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/counter" render={ () => <Counter init={0}/> } />
          {/* DYNAMIC URLs WITH BrowserRouter:
              <Route path="/counter/:init" render={ (props) => <Counter init={+props.match.params.init}/> } />
          */}
        </Switch>
        {/* {switcher(this.state.path)} */}
        <Footer />
      </Container>
      </BrowserRouter>
    </>
  );
}
