import React from 'react';
import { Link } from 'react-router-dom';

function AlunoMatri() {
	return (
		<div>
			<h1>Aluno e Matricula:Introdução</h1>
			<h2>Fluxo de Matricula Aluno</h2>
			<p>Para podermos iniciar o financeiro do aluno prescisamos passar por algumas etapas antes, e é aqui que esse fluxo começa
				, na tela abaixo vemos formas de matricular um novo aluno, clicamos am gestão academica seguimos para aluno, ficha do aluno e novo.</p>
			<figure>
				<img src='https://images2.imgbox.com/36/84/z1LcPgUj_o.png' />
				<figcaption>Versão encurtada pode ser cliclando no primeiro icone do menu rapido abrira direto a ficha do aluno, e depois clicar em novo.</figcaption>
			</figure>
			<p><strong>Tela de cadastro:</strong> Aqui nesta tela podemos colocar os dados dos alunos que vai ser preenchidos</p>
			<figure>
				<img src='https://images2.imgbox.com/46/ec/yUOpIyJZ_o.png' />
				<figcaption>Versão encurtada pode ser cliclando no primeiro icone do menu rapido abrira direto a ficha do aluno, e depois clicar em novo.</figcaption>
			</figure>
			<p><strong>Tela de cadastro:</strong> Aqui nesta tela podemos colocar os dados dos alunos que vai ser preenchidos, podemos observar alguns textos em
				azul (localizado ao lado esquerdo), são informações complementares podendo configurar para si tornarem obrigatorias, mas os campos
				que são de fato obrigatorios estão com um * vermelho, como podemos ver na parte padrão (a primeira parte do cadastro que é mostrada quando abrimos), nesta parte
				com as informações obrigatorias preenchidas ja podemos gravar (salvar), depois de gravar, vamos direto para a pagina de matricula onde podemos matricular o aluno
				e tambem gerar o financeiro dele.</p>
			<figure>
				<img src='https://images2.imgbox.com/43/96/eH5PcKs5_o.png' />
			</figure>
			<p>Aqui em matricula podemos observar varias outras opções aqui dentro, segue a imagen abaixo</p>
			<figure>
				<img src='../../../assets/image temp/MatOption.png'/>
				<figcaption>Muitas dessas opções são pouco usadas, e quando são é mais de resolver, algumas resalvas para as 
					opções de Remanejamento de aluno, Montagem de Lista de alunos e Relatorios Parametrizados, que por sinal
					é muito usado para emitir relatorios que já podem ser emitidos pelo proprio sistema, mas o cliente quer
					algo mais personalizado, para saber mais sobre relatorio parametrizados, click <Link to='#'>Aqui</Link>
				</figcaption>
			</figure>

		</div>
	);
}

export default AlunoMatri;
