import React from 'react';
// import img12 from '../../../assets/image/finalidade.png';
// import img13 from '../../../assets/image/finalidadeCadas.png
// import img14 from '../../../assets/image/cadasGesta.png';
// import img15 from '../../../assets/image/telaMatriAluno.png';
// import img16 from '../../../assets/image/telaMatriFim.png';

function AlunoMatri() {
  return (
    <div>
	<h1>Aluno e Matricula:Introdução</h1>
	<h2>Fluxo de Matricula Aluno</h2>
	<p>Para podermos iniciar o financeiro do aluno prescisamos passar por algumas etapas antes, e é aqui que esse fluxo começa
	, na tela abaixo vemos formas de matricular um novo aluno, clicamos am gestão academica seguimos para aluno, ficha do aluno e novo.</p>
	<figure>
		<img src={img14} />
		<figcaption>Versão encurtada pode ser cliclando no primeiro icone do menu rapido abrira direto a ficha do aluno, e depois clicar em novo.</figcaption>
	</figure>
	<p><strong>Tela de cadastro:</strong> Aqui nesta tela podemos colocar os dados dos alunos que vai ser preenchidos</p>
		<figure>
		<img src={img15} />
		<figcaption>Versão encurtada pode ser cliclando no primeiro icone do menu rapido abrira direto a ficha do aluno, e depois clicar em novo.</figcaption>
	</figure>
	<p><strong>Tela de cadastro:</strong> Aqui nesta tela podemos colocar os dados dos alunos que vai ser preenchidos, podemos observar alguns textos em 
	azul (localizado ao lado esquerdo), são informações complementares podendo configurar para si tornarem obrigatorias, mas os campos
	que são de fato obrigatorios estão com um * vermelho, como podemos ver na parte padrão (a primeira parte do cadastro que é mostrada quando abrimos), nesta parte
	com as informações obrigatorias preenchidas ja podemos gravar (salvar), depois de gravar, vamos direto para a pagina de matricula onde podemos matricular o aluno
    e tambem gerar o financeiro dele.</p>
	<figure>
		<img src={img16} />
	</figure>
	
    </div>
  );
}

export default AlunoMatri;
