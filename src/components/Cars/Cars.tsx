import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import getData from "../../data/DataContext";
import CarsContext from "../../data/CarsContext";
import { ICar } from "../../interfaces/ICar";
import CardBs from "../Card/Card";
import ModalBs from "../Modal/Modal";
import NavbarBs from "../Navbar/NavbarBs";
import "./Cars.css";

interface CarsProps {
  childre?: React.ReactNode;
}
const Cars: React.FC<CarsProps> = (props) => {


  const [cars, setCars] = useState<ICar[]>([]);
  const [car, setCar] = useState<ICar>();
  const [isCarModalOpen, setIsCarModalOpen] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const { data } = useQuery("cars", getData);


  const handleNewCar = () => {
    setIsCarModalOpen((old) => !old);
  };
  const handleOnCloseModal = () => {
    setIsCarModalOpen((old) => !old);
  };

  const handleCarEdit = (carInput: ICar) => {
    setCar(carInput);
    setIsCarModalOpen((old) => !old);
  }


  const onChangeSearchHandler = (event: any) => {
    setSearchInput(event.target.value);
    if (searchInput.length > 0) {
      setCars(cars.filter((car) => car.name.match(searchInput)));
    }
  };

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
            <Button variant="warning" className="px-5" onClick={handleNewCar}>
              Novo Carro
            </Button>
          </Form>
        </Row>
      </Container>
      <CarsContext.Provider value={2}>
      {isCarModalOpen &&  (
        <ModalBs show={isCarModalOpen} onCloseModal={handleOnCloseModal} carUpdate={car} />
      )}
      </CarsContext.Provider>


      <Container className="container-md">
        <Row className="d-flex justify-content-md-around py-4 gap-4 align-itens-center">
          {cars?.map((car, index) => (
            <CardBs car={car} key={index} onUpdateClick={handleCarEdit}/>
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Cars;
