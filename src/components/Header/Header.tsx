import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import NavbarBs from "../Navbar/NavbarBs";
import "./Header.css";

interface HeaderProps {
  props?: React.ReactNode;
  onNewCarClick?: any;
}

const Header: React.FC<HeaderProps> = (props) => {
  const newCarHandler = () => {
    props.onNewCarClick();
  };
  const onChangeSearchHandler = (event: any) => {};
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
              placeholder="Pesquisa"
              className="me-2"
              aria-label="Search"
              onChange={onChangeSearchHandler}
            />
            <Button variant="warning" className="px-5" onClick={newCarHandler}>
              Novo Carro
            </Button>
          </Form>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Header;
