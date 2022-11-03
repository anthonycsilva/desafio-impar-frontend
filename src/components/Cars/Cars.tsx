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
import ModalBs from "../Modal/ModalPost";
import NavbarBs from "../Navbar/NavbarBs";
import "./Cars.css";
import ModalDelete from "../Modal/ModalDelete";
import ModalUpdate from "../Modal/ModalUpdate";

interface CarsProps {
  childre?: React.ReactNode;
}
const Cars: React.FC<CarsProps> = (props) => {


  const [cars, setCars] = useState<ICar[]>([]);
  const [car, setCar] = useState<ICar>();
  const [isCarModalOpen, setIsCarModalOpen] = useState<boolean>(false);
  const [isCarModalDeleteOpen, setIsCarModalDeleteOpen] = useState<boolean>(false);
  const [isCarModalUpdateOpen, setIsCarModalUpdateOpen] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const { data } = useQuery("cars", getData);


  const handleOnClosePostModal = () => {
    setIsCarModalOpen((old) => !old);
  };
  const handleOnCloseUpdateModal = () => {
    setIsCarModalUpdateOpen((old) => !old);
  };
  
  const handleOnCloseDeleteModal = () => {
    setIsCarModalDeleteOpen((old) => !old);
  };

  const handleCarDelete = (carInput: ICar) => {
    setCar(carInput);
    setIsCarModalDeleteOpen((old) => !old);
  }

  const handleCarEdit = (carInput: ICar) => {
    setCar(carInput);
    setIsCarModalUpdateOpen((old) => !old);
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
            <Button variant="warning" className="px-5" onClick={handleOnClosePostModal}>
              Adicionar Carro
            </Button>
          </Form>
        </Row>
      </Container>
      <CarsContext.Provider value={2}>
        {isCarModalDeleteOpen && (
          <ModalDelete show={isCarModalDeleteOpen} car={car} onCloseModal={handleOnCloseDeleteModal}/>
        )}
      {isCarModalOpen &&  (
        <ModalBs show={isCarModalOpen} onCloseModal={handleOnClosePostModal}/>
      )}
      {isCarModalUpdateOpen && (
        <ModalUpdate show={isCarModalUpdateOpen} carUpdate={car} onCloseModal={handleOnCloseUpdateModal}/>
      )}
      </CarsContext.Provider>


      <Container className="container-md">
        <Row className="d-flex justify-content-md-around py-4 gap-4 align-itens-center">
          {cars?.map((car, index) => (
            <CardBs car={car} key={index} onUpdateClick={handleCarEdit} onDeleteClick={handleCarDelete}/>
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Cars;
