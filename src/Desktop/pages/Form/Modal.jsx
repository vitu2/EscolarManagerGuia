import React, { useState } from 'react';
import Modal from 'react-modal';
import SugestaoForm from './form';

Modal.setAppElement('#root'); // Define o elemento raiz da aplicação para o modal

function SugestaoForm1() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const modalStyle = {
    maxWidth: '95%', // ou '600px' por exemplo
  };

  return (
    <div className="modal-container">
      <button onClick={openModal}>Enviar sugestão</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Sugestão Form"
        style={{ content: modalStyle }}
      >
        <SugestaoForm onClose={closeModal} />
      </Modal>
    </div>
  );
}

export default SugestaoForm1;
