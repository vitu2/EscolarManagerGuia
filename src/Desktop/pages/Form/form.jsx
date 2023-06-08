import React, { useState } from 'react';
import { Modal, Backdrop, makeStyles, Typography } from '@material-ui/core';
import JoditEditor from 'jodit-react';
import { Link } from 'react-router-dom';
import { Snackbar, Slide } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import './FormModal.css';

const Editor = ({ onChange }) => {
  const editor = React.useRef(null);

  const config = {
    readonly: false,
    height: 400,
    width: 1100,
    uploader: {
      url: '',
      filesVariableName: '',
      headers: {},
      prepareData: (formData) => {
        return formData;
      },
      process: (response, formData) => {
        return response.url; // return the original image URL
      },
      error: (e) => {},
    },
  };

  const handleBlur = (newContent) => {
    onChange(newContent);
  };

  return (
    <JoditEditor
      ref={editor}
      config={config}
      tabIndex={1} // tabIndex of textarea
      onBlur={handleBlur} // preferred to use only this option to update the content for performance reasons
      onChange={(newContent) => {}}
    />
  );
};

const SugestaoForm = (props) => {
  const [sugestao, setSugestao] = useState('');
  const [editorContent, setEditorContent] = useState('');
  const [nome, setNome] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false); // State para controlar a exibição do Snackbar
  const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false); // State para controlar a exibição do Snackbar de erro

  const linkAtual = window.location.href;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Link da página anterior: ${linkAtual}`);
    console.log(`Editor Content: ${editorContent}`);

    // Enviar sugestão por e-mail
    fetch('https://back-endguiaescolarmanager.onrender.com/sugestao', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ linkAtual, editorContent, nome }),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Sugestão enviada com sucesso!');
          setOpenSnackbar(true);
        } else {
          console.log('Ocorreu um erro ao enviar a sugestão.');
          setOpenErrorSnackbar(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setOpenErrorSnackbar(true);
      });
  };

  const handleNome = (event) => {
    setNome(event.target.value);
  };

  const handleEditorChange = (newContent) => {
    setEditorContent(newContent);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
    setOpenErrorSnackbar(false);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container centered">
      <br />
      <label className="input-name-container">
        Nome:
        <input type="text" value={nome} onChange={handleNome} id="nome-input" />
      </label>
      <br />
      <label>
        <Editor onChange={handleEditorChange} className="teste" />
      </label>
      <br />
      <label>
        Link da página que será alterada:{' '}
        <input type="text-link-style" value={linkAtual} readOnly />
      </label>
      <br />
      <div className="btn-container">
        <button className="btn-style" type="submit">
          Enviar
        </button>
        <br />
        <button className="btn-style" type="button" onClick={props.onClose}>
          Cancelar
        </button>
      </div>

      {/* Snackbar para exibir a mensagem de envio com sucesso */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000} // Define a duração de exibição do Snackbar (3 segundos)
        onClose={handleCloseSnackbar}
        TransitionComponent={Slide} // Define o componente de transição
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Define a posição do Snackbar
      >
        <MuiAlert onClose={handleCloseSnackbar} severity="success">
          Sugestão enviada com sucesso!
        </MuiAlert>
      </Snackbar>
      {/* Snackbar para exibir a mensagem de erro */}
      <Snackbar
        open={openErrorSnackbar}
        autoHideDuration={3000} // Define a duração de exibição do Snackbar (3 segundos)
        onClose={handleCloseSnackbar}
        TransitionComponent={Slide} // Define o componente de transição
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Define a posição do Snackbar
      >
        <MuiAlert onClose={handleCloseSnackbar} severity="error">
          Falha ao enviar a sugestão, tente novamente.
        </MuiAlert>
      </Snackbar>
    </form>
  );
};

export default SugestaoForm;
