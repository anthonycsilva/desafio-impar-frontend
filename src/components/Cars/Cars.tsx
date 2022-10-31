import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import getData from "../../data/DataContext";
import { ICar } from "../../interfaces/ICar";
import CardBs from "../Card/Card";
import "./Cars.css";

interface CarsProps {
  childre?: React.ReactNode;
}

const Cars: React.FC<CarsProps> = (props) => {
  const [cars, setCars] = useState<ICar[]>([]);
  const { data } = useQuery("cars", getData);
  useEffect(() => {
    setCars(data);
  }, [data]);

  return (
    <Container className="container-md">
      <Row className="d-flex justify-content-md-around py-4 gap-4 align-itens-center">
        {cars?.map((car, index) => (
          <CardBs car={car} key={index} />
        ))}
      </Row>
    </Container>
  );
};

export default Cars;
