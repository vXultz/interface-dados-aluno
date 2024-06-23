import { adicionarLinha, mediaMaterias } from './addLinha.js';
import { atualizarMediaGeral } from './mediaGeral.js';
import { encontrarMaiorMedia } from './maiorMedia.js';

const notasIniciais = [
  {
    nome: "Matemática",
    nota1: 8,
    nota2: 9,
    nota3: 7,
    nota4: 6,
  },
  {
    nome: "Português",
    nota1: 7,
    nota2: 8,
    nota3: 6,
    nota4: 7,
  }
];

function inicializarNotas() {
  if (!localStorage.getItem('notasMaterias')) {
    localStorage.setItem('notasMaterias', JSON.stringify(notasIniciais));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  inicializarNotas();
  carregarNotas();
  const mediaTexto = document.querySelector('#media-geral').textContent;
  const mediaInicial = parseFloat(mediaTexto.match(/[\d\.]+/)[0]);
  mediaMaterias.push(mediaInicial);
  atualizarMediaGeral();
  carregarListaDeAlunos();
});

document.getElementById('adicionar-linha').addEventListener('click', () => {
  adicionarLinha();
  atualizarMediaGeral();

  const maiorMedia = encontrarMaiorMedia(mediaMaterias);
  document.getElementById('maior-media').textContent = `A maior média entre as matérias é: ${maiorMedia}`;
});

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

function carregarNotas() {
  const notas = JSON.parse(localStorage.getItem('notasMaterias')) || [];
  const tabelaBody = document.getElementById('tabela-body');
  tabelaBody.innerHTML = '';

  notas.forEach(nota => {
    const media = ((nota.nota1 + nota.nota2 + nota.nota3 + nota.nota4) / 4).toFixed(2);
    const linha =
      `<tr>
        <td>${nota.nome}</td>
        <td>${nota.nota1}</td>
        <td>${nota.nota2}</td>
        <td>${nota.nota3}</td>
        <td>${nota.nota4}</td>
        <td>${media}</td>
      </tr>`;
    tabelaBody.innerHTML += linha;
    mediaMaterias.push(parseFloat(media));
  });

  atualizarMediaGeral();
  const maiorMedia = encontrarMaiorMedia(mediaMaterias);
  document.getElementById('maior-media').textContent = `A maior média entre as matérias é: ${maiorMedia}`;
}

function carregarListaDeAlunos() {
  fetch('http://localhost:3000/alunos')
    .then(response => response.json())
    .then(data => {
      const listaAlunos = document.querySelector('.lista-alunos ul');
      listaAlunos.innerHTML = '';

      data.forEach(aluno => {
        const li = document.createElement('li');
        li.textContent = aluno.nome;
        listaAlunos.appendChild(li);
      });
    })
    .catch(error => console.error('Erro ao carregar lista de alunos:', error));
}