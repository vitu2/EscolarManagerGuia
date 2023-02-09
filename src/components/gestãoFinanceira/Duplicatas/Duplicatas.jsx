import React from 'react';
import { Link } from 'react-router-dom';

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
         <img src='https://images2.imgbox.com/b6/47/7pFdmnuG_o.png' />
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
         <img src='https://images2.imgbox.com/da/3b/V1VBmGk1_o.png' /> 
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
        <img src='https://images2.imgbox.com/1e/c7/f1Av0GOb_o.png' />
      </figure>
      <p>
        Nesta tela conseguimos gerar a duplicatas referente a matricula e a
        mensalidade, caso não seja necessario, selecione a finalidade referente
        a ao que atenter as suas necessidades para saber mais,sobre o que é uma
        finalidade <Link to="/gestaofinanceira/finalidade">clique aqui</Link>
      </p>
      <p>
        <strong>Configuração de Duplicatas: </strong>na configuração podemos
        alterar a duplicata como por exemplo conta contabil, data de vencimento
        e desconto mas lembrando que nesta tela fazemos isso por lote por
        exemplo para uma turma inteira
        <strong>

          LEMBRANDO QUE NÃO É RECOMENDADO ALTERAR A DUPLICATA, SI FOR NECESSARIO
          CRIE OUTRA.
        </strong>
        , no resumo financeiro temos uma opção chamada alterar duplicata nesta
        tela sim podemo fazer uma alteração individual da duplicata
        <strong>

          LEMBRANDO QUE NÃO É RECOMENDADO ALTERAR A DUPLICATA, SI FOR NECESSARIO
          CRIE OUTRA.
        </strong>
      </p>
      <p>
        <strong>Geração de Duplicatas via configuração:</strong> aqui podemos
        gerar varias duplicatas para varios aulos (turmas inteira) ao inves de
        gerar por meios convencionais na hora da matricula que voce pode
        aprender a como fazer isso <Link to="#">clicando aqui.</Link>
        voce pode ver como é essa tela abaixo
      </p>
      <figure>
        <img src='https://images2.imgbox.com/5a/fe/rB4zbjfb_o.png' />
        <figcaption>
          Nesta tela conseguimos escolher o ano de referencia no qual queremos
          gerar o financeiro do aluno, quando necessario fazer varios
          financeiros geramos via configuração. 'fazer analise para saber si é
          possivel fazer rematricula usando está tela'
        </figcaption>
      </figure>
      <p>
        <strong>Agregação de duplicata:</strong> Aqui podemos agregar as
        duplicatas
      </p>
      <p>
        <strong>Alteração de duplicata</strong> Na tela a seguir podemos alterar
        as duplicatas antes de gerar o arquivo remessa:
      </p>
      <figure>
        <img src='https://images2.imgbox.com/35/f1/CoLJVcJN_o.png' />
        <p>
          Aqui temos algumas opções clicamos em adicionar, abrira a tela de
          pesquisa,para poder colocar a duplicata, logo abaixo podemos ver na
          aba de opção geral podemos modificar a duplicata.
        </p>
      </figure>
      <p>
        <strong>Cancelamento de duplicata:</strong> A melhor opção ao inves de
        excluir a duplicata, é o cancelamento porque caso seja nescessario é
        possivel rastrear o responsavel caso aja algum problema no pagameto,
        como por exemplo pagamento errado, duplicado e etc..
      </p>
      <figure>
        <img src='https://images2.imgbox.com/d3/24/O7JRsfNl_o.png' />
        <figcaption>
          Caso seja necessario é possovel habilitar as duplicatas canceladas.
        </figcaption>
      </figure>
      <p>
        <strong>Exclusão de duplicatas: </strong>Não é recomendado excluir de
        fato a duplicata porque caso no retorno da remessa venha um problema
        entre as duplicatas não conseguirei identificar o responsavel, perdendo
        ainda o historico.
      </p>
      <p>
        <strong>Devolução de duplicatas</strong> Aqui podemos fazer o fluxo de
        devolução (confirmar pra ver si é a mesma coisa, mas é bem capaz que
        não)
      </p>
      <p>
        <strong></strong>
      </p>
      <p>
        <strong></strong>
      </p>
      <p>
        <strong>Finalidade de duplicata:</strong> A finalidade da duplicata nada
        mais é do que uma referencia para apontar sobre o que é aquela duplicata
        , si ela é uma matricula uma mensalidade ou poder ser material didatico,
        segue a imagem abaixo do que ela é, inclusive ela faz parte do fluxo das
        contas contabeis que foi explicado em <Link to="/gestaofinanceira/contascontabeis">Contas Contabeis</Link>
      </p>
    </div>
  );
}

export default Duplicatas;
