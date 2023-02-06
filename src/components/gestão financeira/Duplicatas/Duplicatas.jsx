import React from 'react';
import img6 from '../../../assets/image/duplicatas.png';
import img7 from '../../../assets/image/baixaManual.png';
import img8 from '../../../assets/image/geraDupli.png';

function Duplicatas() {
  return (
    <div>
      <h1>Duplicatas: Introdução</h1>
      <h2>O que são?</h2>

      <p>
        As duplicadas são as chamadas boletos (não será usada mais esse termo
        para manter o padrão do sistema) caminho para chegar as duplicatas são:
      </p>
      <figure>
        <img src={img6} />
        <figcaption>
          Nesta tela vemos as opções que podemos acessar relacionadas as
          duplicatas, será mostrado alguns itens abaixo com respectivo link para
          saber mais.
        </figcaption>
      </figure>

      <p>
        <strong>Baixa Manual: </strong>como o nome já diz voce faz a baixa da
        suplicata de forma manual:
      </p>
      <figure>
        <img src={img7} />
      </figure>

      <p>
        Na tela acima, vemos que abrira uma tela na qual podemos fazer uma
        consulta e buscar pela duplicatas, seja para procurar apenas uma ou
        procurar e dar baixa em varias delas, depois de selecionar as duplicatas
        voce sera dirigido para o caixa no qual sera feito o pagamento.
      </p>
      <p>
        <strong>Estornar a baixa de boletos: </strong>é
      </p>

      <p>
        <strong>Geração de Duplicatas: </strong>area onde voce gera a sua
        duplicata para as suas finalidades, como por exemplo a matricula ou a
        mensalidade a tela de geração de duplicata:
      </p>
      <figure>
        <img src={img8} />
      </figure>
      <p>
        Nesta tela conseguimos gerar a duplicatas referente a matricula e a
        mensalidade, caso não seja necessario, selecione a finalidade referente
        a ao que atenter as suas necessidades para saber mais,sobre o que é uma
        finalidade <a href="/gestaofinaceira/finalidade">clique aqui</a>
      </p>
      <p>
        <strong>Configuração de Duplicatas: </strong>na configuração podemos
        alterar a duplicata como por exemplo conta contabil, data de vencimento
        e desconto mas lembrando que nesta tela fazemos isso por lote por
        exemplo para uma turma inteira
        <strong> LEMBRANDO QUE NÃO É RECOMENDADO ALTERAR A DUPLICATA, SI FOR NECESSARIO
          CRIE OUTRA.</strong>
        , no resumo financeiro temos uma opção chamada alterar duplicata nesta
        tela sim podemo fazer uma alteração individual da duplicata
        <strong> LEMBRANDO QUE NÃO É RECOMENDADO ALTERAR A DUPLICATA, SI FOR NECESSARIO
          CRIE OUTRA.</strong>
      </p>
    </div>
  );
}

export default Duplicatas;
