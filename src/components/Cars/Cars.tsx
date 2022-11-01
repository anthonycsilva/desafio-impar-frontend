import React from "react";
import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import getData from "../../data/DataContext";
import { ICar } from "../../interfaces/ICar";
import CardBs from "../Card/Card";
import NavbarBs from "../Navbar/NavbarBs";
import "./Cars.css";

interface CarsProps {
  childre?: React.ReactNode;
  onNewCarClick?: any;
}

const Cars: React.FC<CarsProps> = (props) => {
  const [cars, setCars] = useState<ICar[]>([]);
  const newCarHandler = () => {
    props.onNewCarClick();
  };

  const onChangeSearchHandler = (event: any) => {};
  const { data } = useQuery("cars", getData);
  useEffect(() => {
    setCars(data);
  }, [data]);

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

      <Container className="container-md">
        <Row className="d-flex justify-content-md-around py-4 gap-4 align-itens-center">
          {cars?.map((car, index) => (
            <CardBs car={car} key={index} />
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Cars;
