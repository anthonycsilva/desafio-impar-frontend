import axios from "axios";
import { Field, Form, Formik } from "formik";
import { Button, Container, Modal, ModalFooter, Row } from "react-bootstrap";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { ICar } from "../../interfaces/ICar";

interface ModalBsProps {
  show: boolean;
  onCloseModal: any;
  carUpdate: ICar | undefined;
}

interface FormUpdate {
  form: FormData;
  id: number;
}


const editCar = (car: FormUpdate) => {
  return axios
    .put(`car/alterCar/${car.id}`, car.form)
    .then((response) => response);
};

const ModalUpdate: React.FC<ModalBsProps> = (props) => {
  const queryClient = useQueryClient();

  const { mutate: mutationUpdate } = useMutation(editCar, {
    onSuccess: () => {
      toast.success("Carro foi alterado com sucesso!");
      queryClient.invalidateQueries("cars");
    },
    onError: () => {
      toast.error("Ocorreu um erro ao remover o carro");
    },
  });

  const InitialValues: any  = {
    id: props.carUpdate?.id,
    name: props.carUpdate?.name,
    status: props.carUpdate?.status,
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
    formData.append("id", values.id.toString());
    mutationUpdate({ form: formData, id: values.id });
    props.onCloseModal();
  };

  return (
    <Modal show={props.show} onHide={handleClose}>
      <Modal.Header closeButton>
      <Modal.Title>Alterando Carro</Modal.Title>
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
                  <Field
                    id="name"
                    name="name"
                    className="form-control"
                  />
                  <label>Status do Carro</label>
                  <Field
                    id="status"
                    name="status"
                    className="form-control"
                  />
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
                    Alterar
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

export default ModalUpdate;
