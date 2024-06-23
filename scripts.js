import { adicionarLinha, mediaMaterias } from './addLinha.js';
import { atualizarMediaGeral } from './mediaGeral.js';
import { encontrarMaiorMedia } from './maiorMedia.js';


//[M2S05] Ex. 04 - LabScore (Pt.2) & Ex. 05
document.getElementById('adicionar-linha').addEventListener('click', () => {
  adicionarLinha();
  atualizarMediaGeral();

  //[M2S05] Ex. 07 - LabScore (Pt.2)
  const maiorMedia = encontrarMaiorMedia(mediaMaterias);
  document.getElementById('maior-media').textContent = `A maior média entre as matérias é: ${maiorMedia}`;
});

//[M2S05] Ex. 06 - LabScore (Pt.2)
document.addEventListener('DOMContentLoaded', () => {
  const mediaTexto = document.querySelector('#media-geral').textContent;
  const mediaInicial = parseFloat(mediaTexto.match(/[\d\.]+/)[0]);
  mediaMaterias.push(mediaInicial);
  atualizarMediaGeral();
});


//[M2S06] Ex. 04 - LabScore (Pt.3)
document.addEventListener('DOMContentLoaded', () => {
  const dadosAluno = localStorage.getItem('dadosAluno');

  if (dadosAluno) {
    const aluno = JSON.parse(dadosAluno);

    document.getElementById('nome-aluno').textContent = `Nome: ${aluno.nome}`;
    document.getElementById('idade-aluno').textContent = `Idade: ${aluno.idade} anos`;
    document.getElementById('serie-aluno').textContent = `Série: ${aluno.serie}`;
    document.getElementById('escola-aluno').textContent = `Escola: ${aluno.escola}`;
    document.getElementById('materia-preferida').textContent = `Matéria preferida: ${aluno.materiaFavorita}`;
  } else {
    console.error('Dados do aluno não encontrados no localStorage');
  }
});