# Visão Geral do HTML, CSS e JavaScript

O **HTML** (*HyperText Markup Language*, ou Linguagem de Marcação de Hipertexto) é a fundação de qualquer página na web. Ele é o código responsável por dar **estrutura e significado** ao conteúdo que você vê no navegador.

> 💡 **Importante:** O HTML **não é uma linguagem de programação**, pois não executa lógicas complexas, cálculos ou condições. Ele é uma **linguagem de marcação**, cuja função é dizer ao navegador *o que* cada elemento representa (um título, uma imagem, um parágrafo, um botão, etc.).
> 

## 🏠 A Analogia da Construção Web

Para entender o papel do HTML no desenvolvimento front-end, pense em uma construção:

- **HTML (A Estrutura):** É o esqueleto de tijolos, vigas, portas e janelas.
- **CSS (A Estilização):** É a pintura, a decoração, o piso e o design visual.
- **JavaScript (A Interatividade):** É a fiação elétrica inteligente, o portão automático e os sensores.

## 🧱 Como o HTML funciona? (Tags e Elementos)

O HTML funciona através de **tags** (marcações envolvidas por `<` e `>`). A maioria possui uma abertura e um fechamento:

```html
<p>Este é um parágrafo de texto.</p>
```

• `<p>` → Tag de abertura (indica o início do parágrafo).
• `Este é um parágrafo de texto.` → O conteúdo.
• `</p>` → Tag de fechamento (indica o fim do parágrafo).
**Exemplo de Estrutura Básica de um Arquivo `.html`:**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Minha Primeira Página</title>
</head>
<body>
    <h1>Bem-vindo ao Meu Site!</h1>
    <p>Este é um exemplo de texto estruturado com HTML.</p>
    <a href="https://www.google.com">Ir para o Google</a>
</body>
</html>
```

## 🎯 Principais Tags do Dia a Dia

- **`<h1>` até `<h6>`:** Títulos e hierarquia de tópicos (`<h1>` é o mais importante).
- **`<p>`:** Parágrafos.
- **`<a>`:** Links (âncoras) para navegar entre páginas.
- **`<img>`:** Inserção de imagens.
- **`<ul>` e `<li>`:** Listas de itens.
- **`<button>`:** Botões interativos.

## ♿ Semântica no HTML5

A versão atual (HTML5) prioriza a **semântica** — ou seja, usar tags organizacionais que descrevem o papel exato do conteúdo, como `<header>` (cabeçalho), `<nav>` (menu de navegação), `<main>` (conteúdo principal) e `<footer>` (rodapé).

Isso é fundamental por dois motivos:

1. **SEO:** Ajuda os motores de busca (como o Google) a entenderem melhor o seu site.
2. **Acessibilidade:** Permite que leitores de tela para pessoas com deficiência visual interpretem a página corretamente.

# Primeiras TAGS

## Material de apoio

book1.jpg

book2.jpg

# Display block e inline

# Div, span, tags semânticas

W3Schools.com

Primeira Página

Exemplo Prático:

---

## **Tutorial Linha por Linha do HTML5**

Vamos destrinchar o código presente no documento para entender o papel de cada tag:

- 
- `<!DOCTYPE html>`: **Não é uma tag!** É apenas um aviso para o navegador dizendo: *"Atenção, estou usando a versão mais recente do HTML (HTML5)"*.
- `<html lang="pt-br">`: Inicia o nosso documento de fato. O atributo `lang="pt-br"` avisa aos navegadores e leitores de tela que o conteúdo está em português do Brasil.
- `<head>`: A "cabeça" do código. Aqui ficam configurações invisíveis para o usuário final, mas fundamentais para os navegadores e motores de busca.
- `<meta charset="UTF-8">`: Informa que a página aceita caracteres especiais, acentos, cecidilha (`ç`) e emojis sem quebrar o texto.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Configuração crucial para **responsividade**. Faz com que o formulário se ajuste automaticamente ao tamanho de telas de celulares e tablets.
- `<title>Formulário de Cadastro</title>`: É o título que aparece na aba (guia) do seu navegador.
- `</head>`: Fecha a seção de configurações de cabeçalho.
- `<body>`: O "corpo" do site. Tudo o que for digitado a partir daqui aparecerá visualmente na tela para o usuário.
- `<form action="/api/cadastro" method="POST">`: Inicia o formulário.
    - `action`: É o endereço da API (backend) para onde os dados preenchidos serão enviados.
    - `method="POST"`: É o método HTTP seguro usado para enviar dados sensíveis, escondendo-os da barra de endereços.
- `<fields<et>`: Uma tag semântica maravilhosa que desenha uma "caixa" de agrupamento ao redor de campos semelhantes, melhorando muito a organização e acessibilidade.
- `<legend>1. Dados Pessoais</legend>`: É o título textual que fica embutido na linha superior da caixa do `<fieldset>`.
- `<div>`: Uma caixa organizadora genérica usada aqui apenas para isolar um campo do outro e aplicar quebras de linha.
- `<label for="nome">Nome Completo *</label>`: O rótulo (texto explicativo) do campo. O atributo `for="nome"` se vincula diretamente ao `id="nome"` do input. Se o usuário clicar na palavra "Nome Completo", o cursor automaticamente pula para dentro do campo de texto!
- `<input type="text" id="nome" name="nome" placeholder="Ex: Maria Silva" required minlength="3">`:
    - `type="text"`: Campo aberto para digitação de texto comum.
    - `id="nome"`: Identificador único do campo na página (usado pelo CSS e pelo `label`).
    - `name="nome"`: O "nome do pote". É a chave que o backend vai ler para capturar o valor digitado.
    - `placeholder`: Aquele texto cinza temporário que some assim que você começa a digitar.
    - `required`: **Validação Nativa!** O navegador não deixa enviar o formulário se este campo estiver vazio.
    - `minlength="3"`: Exige que o usuário digite no mínimo 3 caracteres para o nome ser válido.
- `<input type="email" id="email" ...>`: O `type="email"` faz o navegador validar sozinho se o usuário digitou um formato válido contendo `@` e um domínio (ex: `.com`). Em celulares, ele abre o teclado já com o caractere `@` facilitado.
- `<input type="tel" id="telefone" ... pattern="\[0-9\]{2}...">`: O `type="tel"` ativa o teclado numérico em celulares. O atributo `pattern` usa uma **Expressão Regular (RegEx)** para validar nativamente se o formato do telefone inserido está correto.
- `<input type="date" id="nascimento" ...>`: O `type="date"` cria automaticamente um calendário interativo nativo do navegador para o usuário selecionar o dia, mês e ano, sem precisar de bibliotecas extras.
- `</fieldset>`: Fecha o bloco de Dados Pessoais.
- `<select id="area" name="area" required>`: Cria uma famosa lista suspensa (combobox / caixa de seleção).
- `<option value="" disabled selected>Selecione uma opção...</option>`: Uma opção que serve apenas como instrução inicial. O `disabled` impede que o usuário submeta o formulário escolhendo ela, e o `selected` faz com que apareça primeiro.
- `<option value="frontend">Desenvolvimento Front-end</option>`: As opções reais da lista. O `value` é o que vai para o banco de dados; o texto fora é o que o usuário lê.
- `</select>`: Fecha a lista suspensa.
- `<input type="radio" id="exp-iniciante" name="nivel" value="iniciante">`: Botão de rádio (as famosas bolinhas de seleção única). **Regra de Ouro do TADS:** Para que o usuário só consiga marcar *uma* única bolinha, todos os inputs desse grupo precisam ter rigorosamente o **mesmo** `name` (neste caso, `name="nivel"`).
- `checked`: Atributo que deixa a opção "Intermediário" pré-selecionada por padrão assim que a página carrega.
- `<textarea id="bio" name="bio" rows="4"></textarea>`: Diferente do `input type="text"`, o `<textarea>` cria uma caixa de texto grande, com múltiplas linhas, perfeita para textos longos (biografias, comentários). O `rows="4"` define a altura inicial baseada em 4 linhas de texto.
- `<input type="checkbox" id="newsletter" ... checked>`: Cria uma caixa de seleção quadrada (múltipla escolha). Diferente do botão de rádio, o usuário pode marcar ou desmarcar livremente.
- `<button type="submit">Concluir Cadastro</button>`: O botão principal. O `type="submit"` avisa que, ao ser clicado, ele deve disparar as validações e enviar os dados para a rota do formulário.
- `<button type="reset">Limpar Formulário</button>`: Um botão utilitário. O `type="reset"` limpa instantaneamente todos os campos digitados, voltando o formulário ao seu estado original.
- `</form> </body> </html>`: Fechamento das estruturas principais do código.
- 

---

## **🎨 O Arquivo CSS Separado (`style.css`)**

Como boas práticas de desenvolvimento exigem a separação de escopos, criei um arquivo de estilos limpo, moderno e didático para o seu formulário.

O código explica o papel das propriedades básicas mais utilizadas no mercado (como Box Model, Flexbox e pseudo-classes de estados):

```css
/* ==========================================================================
   ESTILIZAÇÃO GERAL DO DOCUMENTO (RESET E CONFIGURAÇÃO BÁSICA)
   ========================================================================== *//* Configura o corpo da página para usar uma fonte moderna, centralizar o conteúdo
   e definir uma cor de fundo suave para não cansar os olhos. */
body {
    font-family: Arial, sans-serif;/* Define uma fonte padrão e limpa */
    background-color: #f4f7f6;/* Cor de fundo cinza bem claro */
    color: #333333;/* Cor do texto em cinza escuro para dar bom contraste */
    margin:0;/* Remove as margens padrão do navegador */
    padding:20px;/* Adiciona um espaço de 20px nas bordas da tela */
    display: flex;/* Usa Flexbox para alinhar o conteúdo */
    justify-content: center;/* Centraliza o formulário horizontalmente */
}/* ==========================================================================
   ESTRUTURA DO FORMULÁRIO (CONTAINER PRINCIPAL)
   ========================================================================== *//* Cria uma caixa branca organizada com sombra para destacar o formulário na tela. */
form {
    background-color: #ffffff;/* Fundo totalmente branco para o formulário */
    padding:30px;/* Espaçamento interno para os elementos não tocarem na borda */
    border-radius:8px;/* Arredonda os cantos do formulário */
    box-shadow:04px8px rgba(0,0,0,0.1);/* Cria uma sombra suave ao redor */
    max-width:600px;/* Define a largura máxima do formulário */
    width:100%;/* Faz o formulário ser responsivo em telas menores */
}/* ==========================================================================
   AGRUPAMENTOS (FIELDSET E LEGEND)
   ========================================================================== *//* Define a estilização dos blocos que agrupam os campos relacionados. */
fieldset {
    border:1px solid #cccccc;/* Linha de borda cinza fina */
    border-radius:6px;/* Cantos levemente arredondados na borda */
    margin-bottom:20px;/* Afasta um agrupamento do outro */
    padding:20px;/* Espaço interno dentro do bloco */
}/* Estiliza o título de cada agrupamento para dar destaque visual. */
legend {
    font-weight: bold;/* Deixa o texto em negrito */
    color: #0056b3;/* Cor azul para destacar as seções */
    padding:010px;/* Espaçamento nas laterais para a linha não grudar no texto */
}/* ==========================================================================
   CAMPOS DE ENTRADA E RÓTULOS (DIVS, LABELS E INPUTS)
   ========================================================================== *//* Organiza cada campo de forma vertical (um abaixo do outro). */
form div {
    margin-bottom:15px;/* Dá um espaço de 15px abaixo de cada bloco de campo */
}/* Alinha os rótulos textuais acima ou ao lado dos inputs. */
label {
    display: block;/* Faz o label ocupar a linha toda, jogando o input para baixo */
    margin-bottom:5px;/* Espaço entre o texto do label e o campo correspondente */
    font-weight:600;/* Texto ligeiramente negritado */
}/* Estiliza todos os campos de texto, e-mail, telefone, data, select e textarea juntos. */
input[type="text"],
input[type="email"],
input[type="tel"],
input[type="date"],
select,
textarea {
    width:100%;/* Faz o campo ocupar toda a largura disponível na div */
    padding:10px;/* Espaço interno para o texto digitado não grudar nas bordas */
    border:1px solid #cccccc;/* Borda cinza clara padrão */
    border-radius:4px;/* Cantos suavemente arredondados */
    box-sizing: border-box;/* Garante que o padding não aumente o tamanho final do campo */
    font-size:14px;/* Tamanho de letra agradável para leitura */
}/* Efeito visual quando o estudante clica ou foca em um campo para digitar. */
input:focus,
select:focus,
textarea:focus {
    border-color: #0056b3;/* Muda a cor da borda para azul */
    outline: none;/* Remove a linha de contorno padrão horrorosa do navegador */
    box-shadow:005px rgba(0,86,179,0.3);/* Adiciona um brilho azul suave ao redor do campo */
}/* ==========================================================================
   CAMPOS ESPECÍFICOS (RADIO BUTTONS E CHECKBOXES)
   ========================================================================== *//* Garante que os botões de rádio e caixas de seleção não fiquem gigantes na tela. */
input[type="radio"],
input[type="checkbox"] {
    width: auto;/* Desfaz o width 100% aplicado antes */
    display: inline-block;/* Permite que fiquem um ao lado do outro na mesma linha */
    margin-right:5px;/* Afasta a caixinha/bolinha do texto que vem depois dela */
}/* Remove a quebra de linha obrigatória dos labels que acompanham radio ou checkbox. */
input[type="radio"] + label,
input[type="checkbox"] + label {
    display: inline-block;/* Permite que o texto fique grudado ao lado do botão */
    margin-bottom:0;/* Zera a margem inferior para alinhar perfeitamente */
    margin-right:15px;/* Afasta o conjunto do próximo conjunto se houver */
    font-weight: normal;/* Remove o negrito pesado nesses sub-rótulos */
}/* ==========================================================================
   BOTÕES DE AÇÃO (SUBMIT E RESET)
   ========================================================================== *//* Estilização da base comum para todos os botões do formulário. */
button {
    padding:10px20px;/* Espaçamento interno (altura e largura do botão) */
    border: none;/* Remove as bordas feias padrões */
    border-radius:4px;/* Cantos arredondados */
    font-size:14px;/* Tamanho da fonte interna */
    font-weight: bold;/* Texto em negrito */
    cursor: pointer;/* Transforma a seta do mouse na mãozinha de clique */
    transition: background-color0.2s ease;/* Transição suave de cor ao passar o mouse */
    margin-right:10px;/* Dá um espaço entre um botão e o outro */
}/* Customização específica do botão de envio ("Concluir Cadastro"). */
button[type="submit"] {
    background-color: #28a745;/* Cor de fundo verde (indica sucesso/conclusão) */
    color: #ffffff;/* Texto na cor branca */
}/* Efeito ao passar o mouse por cima do botão verde */
button[type="submit"]:hover {
    background-color: #218838;/* Escurece levemente o verde */
}/* Customização específica do botão de limpar ("Limpar Formulário"). */
button[type="reset"] {
    background-color: #dc3545;/* Cor de fundo vermelha (indica cancelamento/limpeza) */
    color: #ffffff;/* Texto na cor branca */
}/* Efeito ao passar o mouse por cima do botão vermelho */
button[type="reset"]:hover {
    background-color: #c82333;/* Escurece levemente o vermelho */
}
```

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