const formulario = document.getElementById('cadastro') as HTMLFormElement;
const nascimento = document.getElementById('nascimento') as HTMLInputElement;
const mensagem = document.getElementById('mensagem') as HTMLInputElement;

const hoje = new Date();
const ano = hoje.getFullYear();
const mes = String(hoje.getMonth() + 1).padStart(2, '0');
const dia = String(hoje.getDate()).padStart(2, '0');
nascimento.max = `${ano}-${mes}-${dia}`;

formulario.addEventListener('reset', () => {
    mensagem.textContent = '';
    removerErroCpf(document.getElementById('cpf') as HTMLInputElement);
});

formulario.addEventListener('input', () => {
    mensagem.textContent = '';
});

document.addEventListener("DOMContentLoaded", () =>{
    const inputCpf = document.getElementById("cpf") as HTMLInputElement;
    const inputTelefone = document.getElementById("telefone") as HTMLInputElement;
     if (inputCpf) {
        inputCpf.addEventListener("input", () => {
            let valor = inputCpf.value;

            valor = valor.replace(/\D/g, "");

            if (valor.length > 11) {
                valor = valor.slice(0, 11);
            }

            valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
            valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
            valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

            inputCpf.value = valor;
        });
    }

    if (inputTelefone) {
        inputTelefone.addEventListener("input", () => {
            let valor = inputTelefone.value;

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

            inputTelefone.value = valor;
        });
    }
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        mensagem.textContent = '';
        const cpfApenasNumeros: string = inputCpf.value.replace(/\D/g, "");

        if (!validarCPF(cpfApenasNumeros)) {
            inputCpf.classList.add("input-error");
            alert("❌ Erro: O número de CPF digitado é inválido. Por favor, verifique.");
            inputCpf.focus();
            return;
        }

        removerErroCpf(inputCpf);
        mensagem.textContent = 'Cadastro validado com sucesso!';
    });

    inputCpf.addEventListener("blur", () => {
        const cpfApenasNumeros: string = inputCpf.value.replace(/\D/g, "");

        if (cpfApenasNumeros.length === 0) {
            removerErroCpf(inputCpf);
            return;
        }

        if (!validarCPF(cpfApenasNumeros)) {
            inputCpf.classList.add("input-error");
            mostrarErroCpf(inputCpf, "⚠️ CPF inválido. Tente novamente.");
        } else {
            removerErroCpf(inputCpf);
        }
    });

    formulario.addEventListener("submit", (e) => {
    const cpfApenasNumeros: string = inputCpf.value.replace(/\D/g, "");

    if (!validarCPF(cpfApenasNumeros)) {
        mostrarErroCpf(inputCpf, "⚠️ CPF inválido. Verifique o número antes de concluir.");
        inputCpf.focus();
        e.preventDefault();
    }
});
   
});

function validarCPF(cpfLimpo: string): boolean {
    if (!/^\d{11}$/.test(cpfLimpo)) return false;
    if (/^(\d)\1{10}$/.test(cpfLimpo)) return false;

    let soma: number = 0;
    let resto: number;

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

function mostrarErroCpf(input: HTMLInputElement, mensagem: string): void {
    input.classList.add("input-error");

    const containerPai = input.parentElement as HTMLInputElement;

    let mensagemExistente = containerPai.querySelector(".error-message");

    if (!mensagemExistente) {
        const spanErro = document.createElement("span");
        spanErro.classList.add("error-message");
        spanErro.innerText = mensagem;

        containerPai.appendChild(spanErro);
    }
}

function removerErroCpf(input: HTMLInputElement) {
    input.classList.remove("input-error");

    const containerPai = input.parentElement as HTMLInputElement;
    const mensagemExistente = containerPai.querySelector(".error-message");

    if (mensagemExistente) {
        mensagemExistente.remove();
    }
}
