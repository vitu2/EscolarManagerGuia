import { React, useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AlunoMatri.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function EnlargeImage({ src }) {
  const [isEnlarged, setIsEnlarged] = useState(false);

  const toggleEnlargement = () => setIsEnlarged(!isEnlarged);

  return (
    <>
      <img
        src={src}
        className="img-enlargable"
        onClick={toggleEnlargement}
        data-enlargable
      />
      {isEnlarged && (
        <div
          style={{
            background: `RGBA(0,0,0,.5) url(${src}) no-repeat center`,
            backgroundSize: 'contain',
            width: '100%',
            height: '100%',
            position: 'fixed',
            zIndex: '10000',
            top: '0',
            left: '0',
            cursor: 'zoom-out',
          }}
          onClick={toggleEnlargement}
        />
      )}
    </>
  );
}

function AlunoMatri() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="AlunoMatri-container">
      <div className="title-container">
        <h1>Aluno e Matrícula: Introdução</h1>
        <h2>Fluxo de Matrícula do Aluno</h2>
      </div>
      <section className="section-aluno" data-aos="fade-left">
        <p className="text-space-right">
          Para iniciarmos o processo financeiro do aluno, precisamos passar por
          algumas etapas antes, e é aqui que esse fluxo começa: na tela abaixo,
          vemos formas de matricular um novo aluno. Clicamos em "Gestão
          Acadêmica", seguimos para "Aluno", "Ficha do Aluno" e, em seguida,
          clicamos em "Novo".
        </p>

        <figure>
          <EnlargeImage
            className="img-enlargable"
            src="https://images2.imgbox.com/7d/2d/BGj1jq14_o.png"
          />
          <figcaption>
            Uma versão simplificada é clicar no primeiro ícone do menu rápido, o
            que abrirá diretamente a ficha do aluno. Em seguida, basta clicar em
            "Novo".
          </figcaption>
        </figure>
      </section>
      <section className="section-cadastro" data-aos="fade-left">
        <p></p>
        <figure>
          <EnlargeImage
            className="img-enlargable"
            src="https://images2.imgbox.com/46/ec/yUOpIyJZ_o.png"
          />
        </figure>
        <p className="text-space-left">
          {/* <strong>Tela de cadastro:</strong>
          <br /> */}
          Nesta tela, podemos preencher os dados dos alunos. Podemos observar
          alguns textos em azul ao lado esquerdo, que são informações
          complementares e podem ser configuradas como obrigatórias. No entanto,
          os campos que são realmente obrigatórios estão marcados com um *
          vermelho. Na parte padrão do cadastro (a primeira parte mostrada ao
          abrir), se todas as informações obrigatórias estiverem preenchidas,
          podemos salvar os dados. Após salvar, seremos direcionados para a
          página de matrícula, onde podemos matricular o aluno e gerar seu
          financeiro.
        </p>
      </section>

      <section className="section-img-mat" data-aos="fade-left">
        <figure>
          <EnlargeImage
            className="img-enlargable"
            src="https://images2.imgbox.com/43/96/eH5PcKs5_o.png"
          />
        </figure>
        <p>
          Aqui em matricula podemos observar varias outras opções aqui dentro,
          segue a imagen abaixo
        </p>
      </section>

      <section className="section-mat-final" data-aos="fade-left">
        <EnlargeImage
          className="img-enlargable"
          src="https://images2.imgbox.com/cc/7b/599XqaDx_o.png"
        />
        <figure>
          <img src="" />
        </figure>
        <p>
          Muitas dessas opções são pouco usadas, e quando são é mais de
          resolver, algumas resalvas para as opções de Remanejamento de aluno,
          Montagem de Lista de alunos e Relatorios Parametrizados, que por sinal
          é muito usado para emitir relatorios que já podem ser emitidos pelo
          proprio sistema, mas o cliente quer algo mais personalizado, para
          saber mais sobre relatorio parametrizados, click{' '}
          <Link to="#">Aqui</Link>
        </p>
      </section>
    </div>
  );
}

export default AlunoMatri;
