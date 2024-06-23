import { adicionarLinha, mediaMaterias } from './addLinha.js';
import { atualizarMediaGeral } from './mediaGeral.js';
import { encontrarMaiorMedia } from './maiorMedia.js';

//[M2S05] Ex. 02 - LabScore (Pt.2)
let nomeAluno = prompt("Qual o nome do aluno?");
let idadeAluno = prompt("Qual a idade do aluno?");
let serieAluno = prompt("Qual a série do aluno?");
let nomeEscola = prompt("Qual o nome da escola?");
let materiaFavorita = prompt("Qual a sua matéria favorita?");

let confirmacao = confirm("Confirma os dados inseridos?");

//[M2S05] Ex. 03 - LabScore (Pt.2)
if (confirmacao) {
  document.getElementById("nome-aluno").textContent = "Nome: " + nomeAluno;
  document.getElementById("idade-aluno").textContent = "Idade: " + idadeAluno;
  document.getElementById("serie-aluno").textContent = "Serie: " + serieAluno;
  document.getElementById("escola-aluno").textContent = "Escola: " + nomeEscola;
  document.getElementById("materia-preferida").textContent =
    "Matéria Favorita: " + materiaFavorita;
}

//[M2S05] Ex. 04 - LabScore (Pt.2) & Ex. 05
document.querySelector('button').addEventListener('click', () => {
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