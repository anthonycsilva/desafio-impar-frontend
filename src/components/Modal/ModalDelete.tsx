import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { QueryClient, useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { ICar } from '../../interfaces/ICar';

interface ModalDeleteProps {
    show: boolean;
    onCloseModal: any;
    car: ICar | undefined;
}

const deleteCar = (carId: any) => {
    console.log(carId);
    return axios.delete(`car/deleteCar/${carId}`).then((response) => response);
  };

const ModalDelete:React.FC<ModalDeleteProps> = (props) => {
    const queryClient = useQueryClient();
    const { mutate: mutateDelete } = useMutation(deleteCar, {
        onSuccess: () => {
          toast.success("Carro foi removido");
          queryClient.invalidateQueries("cars");
          props.onCloseModal();
        },
        onError: () => {
          toast.error("Ocorreu um erro ao remover o carro");
        },
      });

      const handleDeleteClick = () => {
        mutateDelete(props.car?.id);
      }

      const handleClose = () => {
        props.onCloseModal();
      }

  return (
    <>
    <Modal show={props.show}>
        <Modal.Header closeButton>
          <Modal.Title>Você tem certeza disso?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Essa ação é irreversível</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="danger" onClick={handleDeleteClick}>
            Deletar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDelete;