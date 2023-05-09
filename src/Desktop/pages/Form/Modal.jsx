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
    maxWidth: '95%',
    maxHeight: '95%'
  };

  return (
    <div className="modal-container">
      <button onClick={openModal} className='btn-style'>Enviar sugestão</button>
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
