const formulario = document.getElementById('cadastro');
const nascimento = document.getElementById('nascimento');
const mensagem = document.getElementById('mensagem');

// Atualiza o limite usando a data local de hoje.
const hoje = new Date();
const ano = hoje.getFullYear();
const mes = String(hoje.getMonth() + 1).padStart(2, '0');
const dia = String(hoje.getDate()).padStart(2, '0');
nascimento.max = `${ano}-${mes}-${dia}`;

// O navegador valida os campos antes de executar o evento submit.
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    mensagem.textContent = 'Cadastro validado com sucesso!';
});

formulario.addEventListener('reset', function () {
    mensagem.textContent = '';
});

formulario.addEventListener('input', function () {
    mensagem.textContent = '';
});
