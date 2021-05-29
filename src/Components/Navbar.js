import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>
        <Link to={"/"} style={{ color: "#f50057", fontWeight: "bolder" }}>
          AMANI-TODO
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to={"/todos"}
            >
              Todos
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              style={{ fontWeight: "bold", textDecoration: "none" }}
              to={"/login"}
            >
              Login
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              style={{ fontWeight: "bold", textDecoration: "none" }}
              to={"/signup"}
            >
              Signup
            </Link>
          </Nav.Link>
          <NavDropdown title="AE" id="basic-nav-dropdown">
            <NavDropdown.Item>
              {" "}
              <Link to={"/profile"} style={{ textDecoration: "none" }}>
                Profile
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search todo..."
            className="mr-sm-2"
          />
          <Button
            style={{ backgroundColor: "#f50057", borderColor: "#f50057" }}
          >
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
