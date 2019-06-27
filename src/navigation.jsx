import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand to="/" exact tag={RRNavLink}>React Academy // Vancouver</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink to="/" exact tag={RRNavLink}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about" tag={RRNavLink}>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/counter" tag={RRNavLink}>Counter</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="https://github.com/reactstrap/reactstrap" tag={RRNavLink}>
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
