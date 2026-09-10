# Formulário de cadastro simples

Projeto de estudo feito com HTML5, CSS e JavaScript puro, sem bibliotecas.

## Como usar

Abra `index.html` no navegador. Preencha os campos obrigatórios, aceite os termos e clique em **Enviar cadastro**. O envio é uma simulação: mostra uma mensagem, sem salvar dados ou enviar informações para um servidor. A newsletter também é apenas demonstrativa.

- `index.html`: campos, rótulos, agrupamentos e validações nativas.
- `style.css`: aparência simples, fonte Verdana, títulos roxos e campos quadrados.
- `app.js`: atualiza a data máxima de nascimento para o dia local atual e controla a mensagem de confirmação.

## Atendimento à atividade

Os exercícios abaixo foram implementados, com uma adaptação solicitada: o nível de experiência usa **checkboxes**, permitindo múltipla seleção, em vez dos botões de rádio do exercício 3. **Iniciante** continua marcado por padrão. Isso permite indicar níveis distintos em diferentes áreas.

O CPF é obrigatório e tem o placeholder solicitado; não há validação dos dígitos verificadores. Instagram e GitHub são opcionais, mas exigem uma URL válida quando preenchidos. Nome, e-mail, nascimento, CPF, celular, área de interesse e aceite dos termos são obrigatórios. A newsletter é opcional.

O atributo `max` do campo de nascimento limita a data aceita pelo navegador. O JavaScript atualiza esse atributo para o dia atual, evitando que o limite fique desatualizado.

## Conferência

A sintaxe do JavaScript, os atributos do HTML e a lógica de data, envio e limpeza da mensagem foram verificados. A conferência visual e as validações nativas no navegador ficaram pendentes porque não havia navegador disponível na sessão de desenvolvimento.

Para testar no navegador:

1. Tente enviar vazio: os campos obrigatórios devem impedir o envio.
2. Digite um nome com menos de 10 caracteres, um e-mail inválido ou uma data futura: o navegador deve impedir o envio.
3. Preencha Instagram ou GitHub com um texto sem formato de URL e tente enviar.
4. Marque Iniciante e Intermediário: ambas as opções devem permanecer selecionadas.
5. Preencha os dados válidos, aceite os termos e deixe a newsletter desmarcada: o envio deve exibir a confirmação da simulação.
6. Clique em **Limpar formulário**: os campos e a mensagem devem ser limpos, com Iniciante novamente marcado.
7. Confira a aparência também em uma janela estreita, incluindo os campos de redes sociais.

---

# Exercícios de Fixação

**📝 Exercício 1: Customização Cosmética (Foco: CSS Básico)Objetivo:** Praticar a alteração de cores, fontes e propriedades de borda no arquivo `style.css`.
• **Instruções para o estudante:**
    1. Abra o arquivo `style.css`.
    2. Altere a cor do título das seções (`<legend>`) de azul para a cor **roxa** (use o código hexadecimal `#6f42c1`).
    3. Mude o formato das bordas de todos os campos de entrada (`input`, `select` e `textarea`) para que fiquem **totalmente quadradas** (sem arredondamento).
    4. Altere a fonte geral do corpo da página (`body`) para `Verdana, sans-serif`.
****

**📝 Exercício 2: O Campo Esquecido (Foco: HTML5 Semântico)Objetivo:** Aprender a inserir um novo campo de texto respeitando a estrutura de vinculação de rótulos (`label`/`id`) e acessibilidade.
• **Instruções para o estudante:**
    1. No arquivo HTML, vá até o agrupamento **1. Dados Pessoais**.
    2. Logo após o campo de Data de Nascimento, adicione um novo campo para o usuário digitar o **CPF**.
    3. O campo deve ser obrigatório (`required`), conter um texto explicativo temporário (`placeholder`) mostrando o formato `000.000.000-00` e usar uma estrutura de `div` idêntica às outras para manter o alinhamento do CSS.
****

**📝 Exercício 3: Expandindo as Opções (Foco: Elementos de Seleção)Objetivo:** Manipular tags de formulário do tipo caixa de seleção (`<select>`) e botões de rádio (`<input type="radio">`).
• **Instruções para o estudante:**
    1. No campo **Área de Interesse**, adicione duas novas opções de escolha para o usuário: `Desenvolvimento Mobile` e `Ciência de Dados`. Certifique-se de configurar os atributos `value` corretamente em minúsculo e sem espaços.
    2. No grupo de **Nível de Experiência**, altere o código para que a opção selecionada por padrão (`checked`) ao carregar a página passe a ser **Iniciante**, e não mais Intermediário.
****

**📝 Exercício 4: Novas Regras de Negócio (Foco: Validação Nativa HTML5)Objetivo:** Explorar os atributos nativos do HTML5 que bloqueiam o envio de dados incorretos sem precisar de JavaScript.
• **Instruções para o estudante:**
    1. Modifique o campo de **Nome Completo** para exigir que o usuário digite um nome que tenha, no mínimo, **10 caracteres** (ajuste o atributo correto).
    2. No campo de **Data de Nascimento**, faça uma pesquisa sobre o atributo `max` da tag `input type="date"`. Configure o campo para que o usuário **não consiga** selecionar nenhuma data futura (posterior ao dia de hoje).

**🚀 Exercício 5: O Desafio do Novo Bloco (Foco: Integração HTML + CSS)Objetivo:** Unir os conhecimentos de estruturação e estilização para criar uma nova seção do zero.
• **Instruções para o estudante:**
    1. No final do formulário (antes dos botões de concluir/limpar), crie um terceiro agrupamento (`<fieldset>`) com o título (`<legend>`) **"3. Redes Sociais"**.
    2. Dentro dele, adicione dois campos de texto: um para o link do **Instagran** e outro para o link do **GitHub**.
    3. **Desafio de Validação:** Altere o `type` desses dois novos inputs para que o próprio navegador exija obrigatoriamente um formato de link/URL válido (Dica: pesquise sobre os tipos de input do HTML5).
    4. Abra o navegador e teste se o seu CSS feito anteriormente se aplicou automaticamente a esse novo bloco.