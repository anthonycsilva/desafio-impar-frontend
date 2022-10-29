import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavbarBs from "../Navbar/NavbarBs";
import "./Header.css";

interface HeaderProps {
  props?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <React.Fragment>
      <NavbarBs></NavbarBs>
      <img
        className="imageHeader"
        src="src\assets\fundo-busca\fundo-busca.png"
      />
      <Container>
        <Row>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Header;
