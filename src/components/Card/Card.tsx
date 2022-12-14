import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ICar } from "../../interfaces/ICar";
import "./Card.css";

interface CardBsProps {
  props?: React.ReactNode;
  car: ICar;
  onUpdateClick(car: ICar): any;
  onDeleteClick(car: ICar): any;

}

const CardBs: React.FC<CardBsProps> = (props) => {
  const handleExcluirClick = () => {
    props.onDeleteClick(props.car);
  };
  const handleEditClick = () => {
    props.onUpdateClick(props.car);
  }
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="src\assets\icone.svg" className="card-img" />
      <Card.Body>
        <Card.Title style={{ textAlign: "center", fontWeight: "bold" }}>
          {props.car.name}
        </Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {props.car.status}
        </Card.Text>
        <Row className="d-flex flex-sm-nowrap btn-group justify-content-between">
          <Button variant="outline-primary" onClick={handleEditClick}>Editar</Button>
          <Button variant="outline-primary" onClick={handleExcluirClick}>
            Exluir
          </Button>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CardBs;
