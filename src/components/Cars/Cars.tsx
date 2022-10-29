import { Col, Container, Row } from "react-bootstrap";
import CardBs from "../Card/Card";

const Cars = () => {
  return (
    <Container className="container-md">
      <Row className="d-flex justify-content-md-around py-4 gap-4 align-itens-center">
        <CardBs />
        <CardBs />
        <CardBs />
        <CardBs />
        <CardBs />
        <CardBs />
      </Row>
    </Container>
  );
};

export default Cars;
