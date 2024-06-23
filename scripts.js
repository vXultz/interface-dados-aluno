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