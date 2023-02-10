import React from 'react'


function Cartão() {
    return (
        <div>
            <h1>Introdução ao Cartão</h1>
            <p>Podemos fazer lançamentos financeiros a partir do Cartão, seja pagar uma mensalidade, matricula ou
            fazer uma venda na cantina, na imagem abaixo podemos observar o que prescisamos para fazer o cadastro do Cartão
            primeiramente ter uma conta contabil para fazer o recebimento e outra para as taxas referente a maquininha.</p>

            <figure>
                <img src="https://images2.imgbox.com/8f/8e/iKSENu69_o.png"/>
                <figcaption>Antes de vir para essa tela criar as contas contabeis referentes para o cartão</figcaption>
            </figure>
        {/* MELHORAR COM O REACT-IMAGE */}
            <p>Exemplos das Contas Contabeis abertas para a criação do cartão</p>
            <img src="../../../assets/image temp/CCartão.PNG" alt="" />
            <img src="../../../assets/image temp/CardDebitCredit.PNG" alt="" />

            <p>Mostrado os exemplos acima podemos preencher os campos de forma correta, como o exemplo abaixo</p>
            <img src="../../../assets/image temp/Cartão.PNG" alt="" />

            <p>Depois de preenchido vamos definir os meios de pagamento do cartão, como por exemplo 12 vezes sem juros
                com taxa, a vista sem taxa, podemos definir tudo isso nesse campo
            </p>

            <img src="../../../assets/image temp/TiposPagamentoCard.PNG" alt="" />

        </div>
    )
}

export default Cartão
