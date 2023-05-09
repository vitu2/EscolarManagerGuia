import React from 'react';
import './AcessoFrequencia.css';

function AcessoFrequencia() {
  return (
    <div className='container-acessoFreq'>
        <h1>Acesso e frequencia: Fluxo</h1>
        <section className="paragrafo">
          <p className='padding-text'>
            Por mais que tenha esse nome o maior foco desse modulo é o foco do
            acesso do aluno a escola, por meio da catraca, cartão de acesso e
            biometria, dentro desse modulo podemos fazer algumas coisas com as
            informações como por exemplo: com a entrada do aluno na escola por
            meio da catraca esse acesso podera ser usado para lançar a
            frequencia no diario tanto si o horario for por dia ou disciplina.
          </p>
          <figure>
            <img
              src="https://images2.imgbox.com/25/3c/Ni2bo2dj_o.png"
              alt="Monitor de acesso automatico"
            />
            <figcaption className='padding-text'>
              Nesta tela podemos adicionar o horario de entrada e saida Nota:
              quando ouver <strong>APENAS UMA ENTRADA OU SAIDA</strong> e caso o
              aluno esqueça de passar o cartão, biometria e etc. então será
              atribuido para ele a entra e saida que foi previamente controlada.
            </figcaption>
          </figure>
        </section>

        <section className="paragrafo">
          <figure>
            <img src="https://images2.imgbox.com/24/07/7gAECEfO_o.png" />
          <figcaption className='padding-text-figcaption'>
            Aqui nesta imagem podemos ver uma configuração automatica de entrada
            e saida (comumente usada para momentos de grande fluxo de entrada ou
            de saida, outra forma que pode ser usada é para garantir a presença
            do aluno.)
          </figcaption>
          </figure>
          <p className='padding-text space-text'>
            As outas opões mostradas serão para o controle, por exemplo a opção
            de <strong>não permitir acesso de alunos inadimplentes</strong> e
            assim por diante
          </p>
        </section>
      </div>
  );
}

export default AcessoFrequencia;
