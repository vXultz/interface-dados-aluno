// cadastro.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('cadastro-form');
  const cepInput = document.getElementById('cep');
  const ruaInput = document.getElementById('rua');
  const cidadeInput = document.getElementById('cidade');
  const estadoInput = document.getElementById('estado');

  if (form && cepInput && ruaInput && cidadeInput && estadoInput) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const aluno = {
        nome: form.nome.value,
        idade: form.idade.value,
        serie: form.serie.value,
        escola: form.escola.value,
        materiaFavorita: form['materia-favorita'].value,
        endereco: {
          cep: form.cep.value,
          rua: form.rua.value,
          cidade: form.cidade.value,
          estado: form.estado.value
        }
      };

      localStorage.setItem('dadosAluno', JSON.stringify(aluno));

      alert('Cadastro realizado com sucesso!');
      window.location.href = 'index.html'; // Redireciona para a página principal após o cadastro
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
  } else {
    console.error('Algum elemento do formulário não foi encontrado');
  }
});
