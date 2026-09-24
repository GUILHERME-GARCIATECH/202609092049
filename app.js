const formulario = document.getElementById('cadastro');
const nascimento = document.getElementById('nascimento');
const mensagem = document.getElementById('mensagem');

const hoje = new Date();
const ano = hoje.getFullYear();
const mes = String(hoje.getMonth() + 1).padStart(2, '0');
const dia = String(hoje.getDate()).padStart(2, '0');
nascimento.max = `${ano}-${mes}-${dia}`;

formulario.addEventListener('reset', function () {
    mensagem.textContent = '';
    removerErroCpf(document.getElementById('cpf'));
});

formulario.addEventListener('input', function () {
    mensagem.textContent = '';
});

document.addEventListener("DOMContentLoaded", () => {
    const inputCpf = document.getElementById("cpf");
    const inputTelefone = document.getElementById("telefone");

    // Formatar CPF
    if (inputCpf) {
        inputCpf.addEventListener("input", (e) => {
            let valor = e.target.value;

            valor = valor.replace(/\D/g, "");

            if (valor.length > 11) {
                valor = valor.slice(0, 11);
            }

            valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
            valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
            valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

            e.target.value = valor;
        });
    }

    // Formatar telefone
    if (inputTelefone) {
        inputTelefone.addEventListener("input", (e) => {
            let valor = e.target.value;

            valor = valor.replace(/\D/g, "");

            if (valor.length > 11) {
                valor = valor.slice(0, 11);
            }

            valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");

            if (valor.replace(/\D/g, "").length === 11) {
                valor = valor.replace(/(\s\d{5})(\d)/, "$1-$2");
            }

            else {
                valor = valor.replace(/(\s\d{4})(\d)/, "$1-$2");
            }

            e.target.value = valor;
        });
    }

    // Mensagem de erro
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        mensagem.textContent = '';
        const cpfApenasNumeros = inputCpf.value.replace(/\D/g, "");

        if (!validarCPF(cpfApenasNumeros)) {
            inputCpf.classList.add("input-error");
            alert("❌ Erro: O número de CPF digitado é inválido. Por favor, verifique.");
            inputCpf.focus();
            return;
        }

        removerErroCpf(inputCpf);
        mensagem.textContent = 'Cadastro validado com sucesso!';
    });

    // Cor e blur de erro
    inputCpf.addEventListener("blur", () => {
        const cpfApenasNumeros = inputCpf.value.replace(/\D/g, "");

        if (cpfApenasNumeros.length === 0) {
            inputCpf.classList.remove("input-error");
            return;
        }

        if (!validarCPF(cpfApenasNumeros)) {
            inputCpf.classList.add("input-error");
        } else {
            inputCpf.classList.remove("input-error");
        }
    });

});

function validarCPF(cpfLimpo) {
    if (!/^\d{11}$/.test(cpfLimpo)) return false;
    if (/^(\d)\1{10}$/.test(cpfLimpo)) return false;

    let soma = 0;
    let resto;

    for (let i = 1; i <= 9; i++) {
        soma = soma + parseInt(cpfLimpo.substring(i - 1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpfLimpo.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma = soma + parseInt(cpfLimpo.substring(i - 1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpfLimpo.substring(10, 11))) return false;

    return true;
}

function mostrarErroCpf(input, mensagem) {
    input.classList.add("input-error");

    const containerPai = input.parentElement;

    let mensagemExistente = containerPai.querySelector(".error-message");

    if (!mensagemExistente) {
        const spanErro = document.createElement("span");
        spanErro.classList.add("error-message");
        spanErro.innerText = mensagem;

        containerPai.appendChild(spanErro);
    }
}

function removerErroCpf(input) {
    input.classList.remove("input-error");

    const containerPai = input.parentElement;
    const mensagemExistente = containerPai.querySelector(".error-message");

    if (mensagemExistente) {
        mensagemExistente.remove();
    }
}
