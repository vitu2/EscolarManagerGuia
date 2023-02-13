import React from 'react';
import { Img } from 'react-image';

function Cartão() {
  return (
    <div>
      <h1>Introdução ao Cartão</h1>
      <p>
        Podemos fazer lançamentos financeiros a partir do Cartão, seja pagar uma
        mensalidade, matricula ou fazer uma venda na cantina, na imagem abaixo
        podemos observar o que prescisamos para fazer o cadastro do Cartão
        primeiramente ter uma conta contabil para fazer o recebimento e outra
        para as taxas referente a maquininha.
      </p>

      <figure>
        <Img
          src={'https://images2.imgbox.com/8f/8e/iKSENu69_o.png'}
          loader={<div>careegando..</div>}
          unloader={<div>Error!</div>}
        />

        <figcaption>
          Antes de vir para essa tela criar as contas contabeis referentes para
          o cartão
        </figcaption>
      </figure>

      <p>Exemplos das Contas Contabeis abertas para a criação do cartão</p>
      <Img
        src={'https://images2.imgbox.com/09/0e/FBTxCdXF_o.png'}
        loader={<div>careegando..</div>}
        unloader={<div>Error!</div>}
      />

      <Img
        src={'https://images2.imgbox.com/68/7e/v5lsrNTN_o.png'}
        loader={<div>careegando..</div>}
        unloader={<div>Error!</div>}
      />

      <p>
        Mostrado os exemplos acima podemos preencher os campos de forma correta,
        como o exemplo abaixo
      </p>

      <Img
        src={'https://images2.imgbox.com/1d/5d/0tom8K2r_o.png'}
        loader={<div>careegando..</div>}
        unloader={<div>Error!</div>}
      />

      <p>
        Depois de preenchido vamos definir os meios de pagamento do cartão, como
        por exemplo 12 vezes sem juros com taxa, a vista sem taxa, podemos
        definir tudo isso nesse campo
      </p>

      <Img
        src={'https://images2.imgbox.com/05/d6/n3W123yG_o.png'}
        loader={<div>caregando..</div>}
        unloader={<div>Error!</div>}
      />
    </div>
  );
}

export default Cartão;
