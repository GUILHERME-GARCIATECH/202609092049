const list1: number[] = [1, 2, 3, 4];
const list2: number[] = [];
const nomes: string[] = ['MARIA', 'JOAO', 'ANABELA'];

// ------------------------------------------------------------
// map: aplica uma função a cada elemento da coleção original, 
// retornando uma nova coleção com os elementos alterados

function dobro(x: number): number {
    return x * 2;
}

function triplo(x: number): number {
    return x * 3;
}

const m1 = list1.map(dobro);
const m2 = list1.map(triplo);
const m3 = list1.map(x => x * 2);

console.log("MAP ------------------------");
console.log(m1);
console.log(m2);
console.log(m3);

// ------------------------------------------------------------
// filter: retorna uma nova coleção contendo apenas 
// aqueles elementos da coleção original que 
// satisfazem um dado predicado

function par(x: number): boolean {
    return x % 2 === 0;
}

const f1 = list1.filter(par);
const f2 = list1.filter(x => x % 2 === 0);
const f3 = list1.filter(x => x > 2);

console.log("FILTER ------------------------");
console.log(f1);
console.log(f2);
console.log(f3);

// -------------------------------------------------------------
// reduce: aplica cumulativamente uma função aos elementos de 
// uma coleção, retornando o resultado final cumulativo.
// * você pode informar, opcionalmente, um valor inicial como 
// parâmetro (necessário para coleção vazia).

function soma(x: number, y: number): number {
    return x + y;
}

function produto(x: number, y: number): number {
    return x * y;
}

const r1 = list1.reduce(soma);
const r2 = list2.reduce(soma, 0);
const r3 = list1.reduce(produto, 1);

console.log("REDUCE ------------------------");
console.log(r1);
console.log(r2);
console.log(r3);

// ------------------------------------------------------------
// sort: ordena a coleção conforme a função de comparação 
// informada como parâmetro

function compararPorTamanho(s1: string, s2: string): number {
    return s1.length - s2.length;
}

console.log("SORT -----------------------------");

const s1 = [...nomes].sort();
console.log(s1);

const s2 = [...nomes].sort(compararPorTamanho);
console.log(s2);

const s3 = [...nomes].sort((x, y) => x.length - y.length);
console.log(s3);


// ============================================================
// RESOLUÇÃO DOS EXERCÍCIOS DE FIXAÇÃO
// ============================================================

console.log("\n=== EXERCÍCIO 1: map ===");

// 1.1 Desconto de Produtos
const precos: number[] = [10.0, 20.0, 50.0, 100.0];
const precosComDesconto = precos.map(preco => preco * 0.85); 
console.log("Desconto de 15%:", precosComDesconto);

// 1.2 Formatação de Nomes
const usuarios: string[] = ['ana', 'paulo', 'lucas'];
const usuariosMaiusculos = usuarios.map(nome => nome.toUpperCase());
console.log("Nomes em Maiúsculas:", usuariosMaiusculos);

// 1.3 Mapeamento de Objetos Simplificados
const idades: number[] = [15, 18, 21, 30];
const maioresDeIdade = idades.map(idade => idade >= 18);
console.log("Maiores de Idade:", maioresDeIdade);


console.log("\n=== EXERCÍCIO 2: filter ===");

// 2.1 Aprovação de Alunos
const notas: number[] = [4.5, 7.0, 8.5, 5.0, 6.5, 3.0];
const notasAprovadas = notas.filter(nota => nota >= 6.0);
console.log("Notas de Aprovação:", notasAprovadas);

// 2.2 Filtro de Palavras Curtas
const linguagens: string[] = ['JavaScript', 'C', 'Python', 'Go', 'Java'];
const linguagensLongas = linguagens.filter(lang => lang.length > 4);
console.log("Linguagens com > 4 caracteres:", linguagensLongas);

// 2.3 Números Ímpares
const numerosFiltrar: number[] = [12, 17, 20, 25, 33, 40];
const numerosImpares = numerosFiltrar.filter(num => num % 2 !== 0);
console.log("Números Ímpares:", numerosImpares);


console.log("\n=== EXERCÍCIO 3: reduce ===");

// 3.1 Cálculo de Média
const vendas: number[] = [120, 250, 300, 80];
const totalVendas = vendas.reduce((acc, venda) => acc + venda, 0);
const mediaVendas = totalVendas / vendas.length;
console.log(`Total de Vendas: ${totalVendas} | Média: ${mediaVendas}`);

// 3.2 Tratamento de Array Vazio
const carrinhoVazio: number[] = [];
const totalCarrinho = carrinhoVazio.reduce((acc, item) => acc + item, 0); 
console.log("Total do Carrinho Vazio:", totalCarrinho);

// 3.3 Fatorial Simples
const fatores: number[] = [1, 2, 3, 4, 5];
const fatorialDe5 = fatores.reduce((acc, fator) => acc * fator, 1);
console.log("Fatorial de 5:", fatorialDe5);


console.log("\n=== EXERCÍCIO 4: sort ===");

// 4.1 Ordenação Numérica Crescente
const pontuacoes: number[] = [40, 100, 1, 5, 25, 10];
// Explicação: pontuacoes.sort() falha porque converte os números para string antes de comparar.
// Como string, "100" vem antes de "25" (porque '1' vem antes de '2').
const pontuacoesIncorretas = [...pontuacoes].sort();
const pontuacoesCorretas = [...pontuacoes].sort((a, b) => a - b);
console.log("Ordenação Padrão (Incorreta):", pontuacoesIncorretas);
console.log("Ordenação Numérica Crescente:", pontuacoesCorretas);

// 4.2 Ordenação por Comprimento Decrescente
const cidades: string[] = ['Cuiabá', 'Rondonópolis', 'Sinop', 'Várzea Grande'];
const cidadesDecrescente = [...cidades].sort((a, b) => b.length - a.length);
console.log("Cidades por tamanho decrescente:", cidadesDecrescente);


console.log("\n=== EXERCÍCIO 5: Desafio de Encadeamento (Chaining) ===");

// 5.1 Desafio Encadeado
const dados: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const resultadoDesafio = dados
    .filter(num => num % 2 === 0)
    .map(num => Math.pow(num, 2)) 
    .reduce((acc, num) => acc + num, 0);

console.log("Resultado do Desafio de Encadeamento:", resultadoDesafio);