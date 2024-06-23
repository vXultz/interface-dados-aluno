export let mediaMaterias = [];

export function adicionarLinha() {
  const materia = prompt("Qual a matéria deseja cadastrar?");
  if (!materia) return;

  const notas = [];
  let i = 0;

  while (i < 4) {
    const nota = parseFloat(prompt(`Digite a nota ${i + 1} para ${materia}:`));
    if (!isNaN(nota)) {
      notas.push(nota);
      i++;
    } else {
      alert("Insira um número válido.");
    }
  }

  const media = calcularMedia(notas);
  mediaMaterias.push(parseFloat(media));
  adicionarLinhaTabela(materia, notas, media);

  salvarNotasLocalStorage(materia, notas, media);
}

function calcularMedia(notas) {
  const soma = notas.reduce((acc, nota) => acc + nota, 0);
  return (soma / notas.length).toFixed(2);
}

function adicionarLinhaTabela(materia, notas, media) {
  const tbody = document.querySelector('tbody');
  tbody.innerHTML +=
    `<tr>
          <td>${materia}</td>
          <td>${notas[0]}</td>
          <td>${notas[1]}</td>
          <td>${notas[2]}</td>
          <td>${notas[3]}</td>
          <td>${media}</td>
      </tr>`;
}

function salvarNotasLocalStorage(materia, notas, media) {
  const notasSalvas = JSON.parse(localStorage.getItem('notasMaterias')) || [];
  notasSalvas.push({ nome: materia, nota1: notas[0], nota2: notas[1], nota3: notas[2], nota4: notas[3], media: parseFloat(media) });
  localStorage.setItem('notasMaterias', JSON.stringify(notasSalvas));
}
