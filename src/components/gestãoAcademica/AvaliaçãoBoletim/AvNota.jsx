import React from 'react'

function AvNota() {
  return (
    <div>
      <h1>Notas: Introdução</h1>
      <p>Aqui temos um fluxo para podermos ter as notas dentro do boletim e tudo começa la nas configurações de
        boletim, como vemos na imagem a baixo
      </p>
      <img src="../../../assets/image temp/NotasOp.png" />
      <p>Quando clicamos na opção de Cadastro de Manutenção de Boletim somos redirecionados para essa tela</p>
      <img src="../../../assets/image temp/CadasTroConfig.PNG" alt="" />
      <p>Nesta tela podemos configurar os padrões de notas si são de 0 a 10 ou ate 100
        sendo a escolha do cliente como ele trabalha, podemos trocar de bimestre para trimestre, configurar os nomes
        das colunas do boletim, e assim por diante, tem varias opções bastante interressantes, tela interressante
        é a de recuperação, como pode ver na imagem abaixo: 
      </p>
      <img src="../../../assets/image temp/BoletimConfigRec.PNG" alt="" />
      <p>Aqui nesta tela podemos 'podemos brincar', fazer analise e assim chegar em um melhor cenario
        para o cliente.
      </p>
      {/* futura refatoração do conteudo */}
      <p><strong>Lançamento de Observações:</strong></p>
      <p><strong>Replicação de Notas e Faltas:</strong> é feito uma copia desses dados para o proximo
      bimestre, e a imagem abaixo temos a mesma função mas para as avaliações.</p>
      <img src="../../../assets/image temp/RepliNotas.PNG" alt="" />
      <img src="../../../assets/image temp/RepliAVs.PNG" alt="" />
      <p><strong>Manutenção Do boletim de forma manual</strong></p>

      <img src="../../../assets/image temp/ManuBoletim.PNG" alt="" />
    </div>
  )
}

export default AvNota

