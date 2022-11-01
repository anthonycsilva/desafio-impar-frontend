import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { Button, Container, Modal, ModalFooter, Row } from "react-bootstrap";
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

  const handleClose = () => {
    props.onCloseModal();
  };

  const onUploadPhoto = (photo: any) => {
    setPhoto(photo.target.value);
  };

  const handleOnSubmitForm = (values: ICar) => {
    if (photo) {
      values.photo = photo;
    }
    console.log(values);
  };

  return (
    <Modal show={props.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
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
