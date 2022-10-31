import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
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
      <Container className="container-md py-4" style={{ width: "60%" }}>
        <Row>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="warning" className="px-5">
              Novo Carro
            </Button>
          </Form>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Header;
