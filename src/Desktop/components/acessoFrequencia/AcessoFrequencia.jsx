import React from 'react';
import './AcessoFrequencia.css';

function AcessoFrequencia() {
  return (
    <div className="container-acessoFreq">
      <h1>Acesso e frequencia: Fluxo</h1>
      <section className="paragrafo">
        <p className="padding-text">
          Por mais que tenha esse nome, o principal foco desse módulo é o acesso
          do aluno à escola, por meio da catraca, cartão de acesso e biometria.
          Dentro desse módulo, podemos realizar algumas ações com as
          informações, como, por exemplo, lançar a frequência no diário do aluno
          quando ele entrar na escola através da catraca. Isso pode ser feito
          tanto se o registro de frequência for por dia ou por disciplina.
        </p>
        <figure>
          <img
            src="https://images2.imgbox.com/25/3c/Ni2bo2dj_o.png"
            alt="Monitor de acesso automatico"
          />
          <figcaption className="padding-text">
            Nesta tela, podemos adicionar o horário de entrada e saída. Nota:
            quando houver <strong>apenas uma entrada ou saída</strong> e caso o
            aluno esqueça de passar o cartão, biometria, etc., então será
            atribuída a ele a entrada e saída que foram previamente controladas
            (configurada).
          </figcaption>
        </figure>
      </section>

      <section className="paragrafo">
        <figure>
          <img src="https://images2.imgbox.com/24/07/7gAECEfO_o.png" />
          <figcaption className="padding-text-figcaption">
            Aqui, nesta imagem, podemos ver uma configuração automática de
            entrada e saída, comumente usada para momentos de grande fluxo de
            entrada ou saída. Outra forma que pode ser usada é para garantir a
            presença do aluno.
          </figcaption>
        </figure>
        <p className="padding-text space-text">
          As outras opções mostradas serão para o controle, por exemplo, a opção
          de <strong>não permitir acesso de alunos inadimplentes</strong> e
          assim por diante.
        </p>
      </section>
    </div>
  );
}

export default AcessoFrequencia;
