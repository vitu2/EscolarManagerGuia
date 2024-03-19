import React, { useRef, useState } from 'react';
import Quill from 'quill';
import Modal from 'react-modal';
import SugestaoForm from './form'; // Importe o componente SugestaoForm
import './FormModal.css'

const Delta = Quill.import('delta');

var urlPaginaAtual = window.location.href;

const SugestaoForm1 = () => {
  const [range, setRange] = useState();
  const [lastChange, setLastChange] = useState();
  const [readOnly, setReadOnly] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const quillRef = useRef();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='form-container'>
      <button onClick={openModal} className='btn-style'>Abrir Modal</button>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <h2>Editor de Texto</h2>
        <SugestaoForm
          ref={quillRef}
          readOnly={readOnly}
          defaultValue={new Delta()
            .insert('Sugestão')
            .insert('\n', { header: 1 })
            .insert(`Caso queira adcionar imagens ou links porfavor realizar o upload no wetransfer`)
            .insert('\n', {header: 2})
            .insert(' ')
            .insert('\n')}
          onSelectionChange={setRange}
          onTextChange={setLastChange}
        />
        <button onClick={closeModal} className='btn-style btn-close'>Fechar</button>
      </Modal>
    </div>
  );
};
console.log("URL da página atual:", urlPaginaAtual);

export default SugestaoForm1;