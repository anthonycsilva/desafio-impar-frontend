import axios from "axios";
import { Field, Form, Formik } from "formik";
import {
  Alert,
  Button,
  Container,
  Modal,
  ModalFooter,
  Row,
} from "react-bootstrap";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { ICar } from "../../interfaces/ICar";
import postSchema from "../../schemas";

interface ModalBsProps {
  show: boolean;
  onCloseModal: any;
}

const postCar = (formData: FormData) => {
  return axios.post("car/addCar", formData).then((response) => response);
};

const ModalBs: React.FC<ModalBsProps> = (props) => {
  const c = useQueryClient();
  const { mutate } = useMutation(postCar, {
    onSuccess: () => {
      toast.success("Novo Carro Adicionado!");
      c.invalidateQueries("cars");
    },
    onError: () => {
      toast.error("Ocorreu um erro ao adicionar um novo carro");
    },
  });

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
    mutate(formData);
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
              validationSchema={postSchema}
              validateOnBlur={true}
              onSubmit={(values) => {
                handleOnSubmitForm(values);
              }}
            >
              {({ errors }) => (
                <Form>
                  <div className="mb-3 form-group">
                    <label>Nome do Carro</label>
                    <Field id="name" name="name" className="form-control" />
                    {errors.name && (
                      <div style={{ paddingTop: "5%" }}>
                        <Alert variant="danger">{errors.name}</Alert>
                      </div>
                    )}
                    <label>Status do Carro</label>
                    <Field id="status" name="status" className="form-control" />
                    {errors.status && (
                      <div style={{ paddingTop: "5%" }}>
                        <Alert variant="danger">{errors.status}</Alert>
                      </div>
                    )}
                    <label>Foto do Carro</label>
                    <Field
                      id="photo"
                      name="photo"
                      className="form-control"
                      type="file"
                      onChange={onUploadPhoto}
                      required
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
              )}
            </Formik>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default ModalBs;
