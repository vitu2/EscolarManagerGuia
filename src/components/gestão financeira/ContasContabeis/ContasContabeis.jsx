import React from 'react';
import img1 from '../../../assets/image/cadastroBanco.PNG';
import img2 from '../../../assets/image/infoBancarias.PNG';
import img3 from '../../../assets/image/gcGeral.PNG';
import img4 from '../../../assets/image/cc.PNG';
import img5 from '../../../assets/image/NewCC.PNG';

function ContasContabeis() {
  return (
    <div>
      <h1>Gestão Financeira:Introdução</h1>

      <h2>Fluxo Para Criação da Conta Contabil</h2>
      <figure>
        <p>
          Primeiramente devemos criar um banco (cadastrar um banco) segue a
          imagem de exemplo:
        </p>
        <img src={img1} />
      </figure>

      <p>
        Devemos clicar em novo, abrira uma tela de cadastro de banco, segue a
        imagen de exemplo:
      </p>
      <p>
        <figure>
          <img src={img2} />
          <figcaption>
            Nesta tela informaremos os dados bancarios do cliente (será feito
            pela implantação mas eventualmente faremos suporte)
          </figcaption>
        </figure>
      </p>

      <p>
        Neste ponto já podemos usar esse banco, no caso do exemplo temos mais de
        um para diferentes finalidades caso seja necessario.
      </p>

      <p>
        Com isso pronto podemos passar para as proximas etapas, clicando em
        gestão financeira vamos ate Cadastros basicos Cadastro de Grupo Contabil
        abriremos a seguinte tela:
      </p>
      <figure>
        <img src={img3} />
        <figcaption>
          Nesta tela fazemos o cadastro de grupos, quando clicamos em novo grupo
          pai, criamos uma conta contabil que sera usada em no novo grupo,
          exemplo: Novo Grupo Pai Novo Grupo
        </figcaption>
      </figure>

      <p>
        Neste momento podemos já podemos criar a nossa conta contabil, vamos
        realizar o cadastro agora segue a imagem a seguir de como fazemos isso:
      </p>
      <figure>
        <img src={img4} />
        <p>
          Nesta tela criaremos a nossa conta contabil, aqui podemos começar a
          organizar o financeiro da escola, claro que para ter um bom relatorio
          é necessario ter uma boa organização e alimentar as informações
          seguindo os fluxos de maneira correta, nesta tela podemos ver algumas
          informações interressantes na coluna descrição de conta, vemos que
          temos uma conta contabil para finalidades diferentes e manter a
          organização como por exemplo temo uma CC(conta contabil), para a conta
          de agua, recebimento de matricula e mensalidade, ficara a cargo do
          suporte decidir quantas CC terão ou serão necessario para o controle.
        </p>
      </figure>

      <figure>
        <img src={img5} />
        <figcaption>
          Nesta tela posso escolher o grupo que foi criado mais acima no
          cadastro de grupos de conta contabil depois de adicionarmos o grupo
          colocamos a descrição por exemplo: "recebimento matricula"
        </figcaption>
      </figure>

      <h3>Resalvas Para a Versão Web</h3>
      <p>
        Necessario colocar o nome do banco, porque <strong>esta diferente dessa tela,
        não mostra o nome na versão web.</strong>
      </p>
      <img src={img4} />
      <p>
        Como vemos na imagem acima, na descrição da conta na pratica não devia
        estar o nome do banco, porque na coluna a frente está me falando em qual
        banco aquela conta contabil é ela está relacionada, coisa que não tem na
        versão web, ainda sera necessario mais estudo sobre a web (versão web)
        para aprender mais.
      </p>

      <a href="/gestaofinaceira/duplicatas">Duplicatas</a>
    </div>
  );
}

export default ContasContabeis;
