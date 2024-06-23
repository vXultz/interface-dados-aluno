import { adicionarLinha, mediaMaterias } from './addLinha.js';
import { atualizarMediaGeral } from './mediaGeral.js';
import { encontrarMaiorMedia } from './maiorMedia.js';

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

//[M2S06] Ex. 02 - LabScore (Pt.3)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('cadastro-form');
  const cepInput = document.getElementById('cep');
  const ruaInput = document.getElementById('rua');
  const cidadeInput = document.getElementById('cidade');
  const estadoInput = document.getElementById('estado');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Cadastro realizado com sucesso!');
  });

  cepInput.addEventListener('blur', (e) => {
    const cep = e.target.value.replace(/\D/g, '');

    if (cep) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
          if (!data.erro) {
            ruaInput.value = data.logradouro;
            cidadeInput.value = data.localidade;
            estadoInput.value = data.uf;
            ruaInput.disabled = false;
            cidadeInput.disabled = false;
            estadoInput.disabled = false;
          } else {
            alert('CEP não encontrado.');
            ruaInput.value = '';
            cidadeInput.value = '';
            estadoInput.value = '';
            ruaInput.disabled = true;
            cidadeInput.disabled = true;
            estadoInput.disabled = true;
          }
        })
        .catch(error => {
          alert('Erro ao buscar o CEP.');
          console.error('Erro:', error);
        });
    } else {
      ruaInput.value = '';
      cidadeInput.value = '';
      estadoInput.value = '';
      ruaInput.disabled = true;
      cidadeInput.disabled = true;
      estadoInput.disabled = true;
    }
  });
});