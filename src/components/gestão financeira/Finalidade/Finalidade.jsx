import React from 'react'
import img12 from '../../../assets/image/finalidade.png'
import img13 from '../../../assets/image/finalidadeCadas.png'

function Finalidade() {
  return (
    <div>
      <h1>Finalidades:Introdução</h1>
	  <p><strong>O que é a finalidade:</strong> A finalidade seve para apontar sobre o que é aquela duplicata, na imagem vemos alguns exemplos
	  como matricula e mensalidade</p>
	  <figure>
		<img src={img12} />
	  </figure>
	  <p><strong>Criar uma nova finalidade</strong> para podermos criar uma nova finalidade clicar em novo e sera a aberto a seguinte tela</p>
	  	  <figure>
		<img src={img13} />
	  </figure>
	  <p>Aqui ja podemos cadastrar uma nova finalidade e assim podemos fazer o fluxo para a geração do financeiro do aluno.</p>
    </div>
  )
}

export default Finalidade
