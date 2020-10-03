import React from "react";
import { Navbar } from "react-bootstrap";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Navbar_Component() {
  return (<Navbar className={styles.navbar} expand="lg">
    <Navbar.Brand style={{ paddingLeft: "10px" }}>
      <Link href="/">
        <a className={styles.title}>A3</a>
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      {/* <Nav className="mr-auto">
            <Nav.Link className="text-white" href="#home">Home</Nav.Link>
            <Nav.Link className="text-white" href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
        </Form> */}
    </Navbar.Collapse>
  </Navbar>);
}
