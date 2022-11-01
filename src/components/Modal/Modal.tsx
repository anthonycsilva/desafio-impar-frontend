import axios from "axios";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { Button, Container, Modal, ModalFooter, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { ICar } from "../../interfaces/ICar";

interface ModalBsProps {
  show: boolean;
  onCloseModal: any;
}

const ModalBs: React.FC<ModalBsProps> = (props) => {
  const [photo, setPhoto] = useState<any>();
  const InitialValues: ICar = {
    id: 0,
    name: "",
    status: "",
    photo: undefined,
  };

  const formData = new FormData();

  const handleClose = () => {
    props.onCloseModal();
  };

  const onUploadPhoto = (photo: any) => {
    formData.append("photo", photo.target.files[0]);
  };

  const handleOnSubmitForm = (values: ICar) => {
    formData.append("name", values.name);
    formData.append("status", values.status);
    axios
      .post("car/addCar", formData)
      .then((response) => console.log(response))
      .catch((err) => toast.error("Erro ao adicionar carro!"));
    toast.success("Carro Cadastrado");
    props.onCloseModal();
  };

  return (
    <Modal show={props.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Adicionando Carro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row className="d-flex justify-content-md-around py-4 gap-4 align-itens-center">
            <Formik
              initialValues={InitialValues}
              onSubmit={(values) => {
                handleOnSubmitForm(values);
              }}
            >
              <Form>
                <div className="mb-3 form-group">
                  <label>Nome do Carro</label>
                  <Field id="name" name="name" className="form-control" />
                  <label>Status do Carro</label>
                  <Field id="status" name="status" className="form-control" />
                  <label>Foto do Carro</label>
                  <Field
                    id="photo"
                    name="photo"
                    className="form-control"
                    type="file"
                    onChange={onUploadPhoto}
                  />
                </div>
                <ModalFooter>
                  <Button variant="primary" type="submit">
                    Adicionar
                  </Button>
                  <Button variant="secondary" onClick={handleClose}>
                    Fechar
                  </Button>
                </ModalFooter>
              </Form>
            </Formik>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default ModalBs;
