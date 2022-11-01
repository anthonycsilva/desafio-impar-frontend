import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import getData from "../../data/DataContext";
import { ICar } from "../../interfaces/ICar";
import CardBs from "../Card/Card";
import ModalBs from "../Modal/Modal";
import NavbarBs from "../Navbar/NavbarBs";
import "./Cars.css";

interface CarsProps {
  childre?: React.ReactNode;
}

const deleteCar = (carId: number) => {
  console.log(carId);
  return axios.delete(`car/deleteCar/${carId}`).then((response) => response);
};

const Cars: React.FC<CarsProps> = (props) => {
  const [newCarOpen, setNewCarOpen] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const [cars, setCars] = useState<ICar[]>([]);
  const { data } = useQuery("cars", getData);
  const queryClient = useQueryClient();

  const { mutate } = useMutation(deleteCar, {
    onSuccess: () => {
      toast.success("Carro foi removido");
      queryClient.invalidateQueries("cars");
    },
    onError: () => {
      toast.error("Ocorreu um erro ao remover o carro");
    },
  });

  const handleNewCar = () => {
    setNewCarOpen((old) => !old);
  };
  const handleOnCloseModal = () => {
    setNewCarOpen((old) => !old);
  };

  const handleCarDelete = (car: ICar) => {
    mutate(car.id);
  };

  const onChangeSearchHandler = (event: any) => {
    setSearchInput(event.target.value);
    if (searchInput.length > 0) {
      setCars(cars.filter((car) => car.name.match(searchInput)));
    }
  };

  useEffect(() => {
    setCars(data);
  }, [data, newCarOpen]);

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

      {newCarOpen && (
        <ModalBs show={newCarOpen} onCloseModal={handleOnCloseModal} />
      )}

      <Container className="container-md">
        <Row className="d-flex justify-content-md-around py-4 gap-4 align-itens-center">
          {cars?.map((car, index) => (
            <CardBs car={car} key={index} onExcluirClick={handleCarDelete} />
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Cars;
