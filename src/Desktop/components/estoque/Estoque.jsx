  import React, { useState } from 'react';
  import './Estoque.css';
  import imgteste1 from '../../../assets/imgTemp/introEstoque.png';
  import imgteste2 from '../../../assets/imgTemp/EstoqueMedidas.png';
  import imgteste3 from '../../../assets/imgTemp/IntroPeosdutos.png';

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

  function Estoque() {
    return (
      <div className="estoque-container">
        <div className="title-container">
          <h1>Estoque: Fluxo</h1>
        </div>

        <section className="section-estoque">
          <p className="text-space-left">
            Atualmente, o sistema possui um controle de estoque básico que pode
            ajudar, caso necessário. Vamos começar o fluxo pela opção "Unidades de
            Medida
          </p>
          <figure>
            <img src={imgteste1} alt="" />
          </figure>
        </section>

        <section className="section-un">
          <p className="text-space-left">
            Primeiramente, podemos adicionar as unidades de medida, como KG, UM,
            etc. Aqui, vamos adicionar as medidas que serão utilizadas no estoque.
            Basta clicar no sinal de "+" para adicionar uma nova medida.
          </p>
          <figure>
            <img src={imgteste2} alt="" width={'800px'} />
            <figcaption>Tela de cadastro das Unidades de Medidas</figcaption>
          </figure>
        </section>
        <p className="text-space-left warn-text">
          Para dar continuidade ao fluxo de controle de estoque, é necessário
          realizar o cadastro de um produto no sistema.
        </p>

        <section className="section-cad-produto">
          <div className="cad-products-txt-container">
            <h2 className="title-container">Como cadastrar um produto/serviço</h2>
            <div className="testeGrid">
              <p className="text-space-right">
                Para chegar à tela de "Produtos/Serviços", siga o caminho
                indicado. Ao clicar nessa opção, você será direcionado para a
                próxima tela.
              </p>
              <figure>
                <img src={imgteste3} alt="" width={'800px'} />
              </figure>
            </div>
          </div>
        </section>
      </div>
    );
  }

  export default Estoque;
