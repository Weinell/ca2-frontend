//create a diffrent directory to write down the code for navigation bar called 'navigation'
//should install react-bootstrap in react app
//call the file navigation from app.js
//this code will provode simple reactive navigation bar


//navigation.js code should look like
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">HOME</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="joke">Joke</Nav.Link>
            <Nav.Link href="animal">Animal</Nav.Link>
            <Nav.Link href="placeholder">Placeholder</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Navigation;

