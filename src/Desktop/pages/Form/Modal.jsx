import React from 'react';
import { Link } from 'react-router-dom';

function SugestaoForm1() {
  return (
    <div>
      <Link to='/sugestao' className='btn-form'>Enviar sugestão</Link>
    </div>
  );
}

export default SugestaoForm1;
