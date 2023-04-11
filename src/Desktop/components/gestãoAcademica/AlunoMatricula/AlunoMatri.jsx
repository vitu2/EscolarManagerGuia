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
        <h1>Aluno e Matricula:Introdução</h1>
        <h2>Fluxo de Matricula Aluno</h2>
      </div>
      <section className="section-aluno" data-aos="fade-left">
        <p className="text-space-right">
          Para podermos iniciar o financeiro do aluno prescisamos passar por
          algumas etapas antes, e é aqui que esse fluxo começa , na tela abaixo
          vemos formas de matricular um novo aluno, clicamos am gestão academica
          seguimos para aluno, ficha do aluno e novo.
        </p>

        <figure>
          <EnlargeImage
            className="img-enlargable"
            src="https://images2.imgbox.com/36/84/z1LcPgUj_o.png"
          />
          <figcaption>
            Versão encurtada pode ser cliclando no primeiro icone do menu rapido
            abrira direto a ficha do aluno, e depois clicar em novo.
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
          <strong>Tela de cadastro:</strong> Aqui nesta tela podemos colocar os
          dados dos alunos que vai ser preenchidos.
          <br />
          Nesta tela podemos colocar os dados dos alunos que vai ser
          preenchidos, podemos observar alguns textos em azul (localizado ao
          lado esquerdo), são informações complementares podendo configurar para
          si tornarem obrigatorias, mas os campos que são de fato obrigatorios
          estão com um * vermelho, como podemos ver na parte padrão (a primeira
          parte do cadastro que é mostrada quando abrimos), nesta parte com as
          informações obrigatorias preenchidas ja podemos gravar (salvar),
          depois de gravar, vamos direto para a pagina de matricula onde podemos
          matricular o aluno e tambem gerar o financeiro dele.
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
          src="https://images2.imgbox.com/34/86/9tMr787m_o.png"
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
