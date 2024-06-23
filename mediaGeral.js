import { mediaMaterias } from './addLinha.js';

export function atualizarMediaGeral() {
  const mediaGeral = calcularMedia(mediaMaterias);
  document.getElementById('media-geral').textContent = `A média geral do aluno é: ${mediaGeral}`;
}

function calcularMedia(medias) {
  const soma = medias.reduce((acc, media) => acc + media, 0);
  return (soma / medias.length).toFixed(2);
}