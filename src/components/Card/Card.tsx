import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Card.css";

interface CardBsProps {
  props?: React.ReactNode;
}

function CardBs() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="src\assets\icone.svg" className="card-img" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Row className="d-flex flex-sm-nowrap btn-group justify-content-between">
          <Button variant="outline-primary">Go somewhere</Button>
          <Button variant="outline-primary">Go somewhere</Button>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default CardBs;
