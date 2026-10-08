interface Funcionarios {
    nome: string;
    valorHora: number;
    horasTrabalhadas: number;
    terceirizado: boolean;
}

const dados: Funcionarios[] = [
  {
    nome: "Maria Silva",
    valorHora: 80.0,
    horasTrabalhadas: 20,
    terceirizado: true,
  },
  {
    nome: "João Rocha",
    valorHora: 60.0,
    horasTrabalhadas: 25,
    terceirizado: false,
  },
  {
    nome: "Tiago James",
    valorHora: 80.0,
    horasTrabalhadas: 10,
    terceirizado: true,
  },
  {
    nome: "Ana Carla",
    valorHora: 70.0,
    horasTrabalhadas: 40,
    terceirizado: true,
  },
  {
    nome: "Pedro Paulo",
    valorHora: 50.0,
    horasTrabalhadas: 25,
    terceirizado: false,
  },
];

//---------------------------------------------------------------------------
// FUNCAO funcionariosTerceirizados
// Parâmetros:
//   list: lista de funcionarios
// Efeito: retorna uma lista contendo somente os funcionários terceirizados
//---------------------------------------------------------------------------

function funcionariosTerceirizados(funcionarios: Funcionarios[]): Funcionarios[] {
    let terceirizados: Funcionarios[] = [];
  for (const funcionario of funcionarios){
    if (funcionario.terceirizado){
        terceirizados.push(funcionario);
    }
  }
  return terceirizados;
}



//---------------------------------------------------------------------------
// FUNCAO custoTotal
// Parâmetros:
//   list: lista de funcionarios
// Efeito: retorna um número representando o custo total dos funcionários
//---------------------------------------------------------------------------

function custoTotal(terceirizados: Funcionarios[]): number {
  const total = terceirizados.reduce((acc, a) => acc + (a.horasTrabalhadas * a.valorHora),0);
  return total;
}


//---------------------------------------------------------------------------
// SCRIPT PRINCIPAL
//---------------------------------------------------------------------------

const terceirizados = funcionariosTerceirizados(dados);

const custoTerceirizados = custoTotal(terceirizados);

console.log(`Custo total dos funcionários terceirizados: R$ ${custoTerceirizados.toFixed(2)}`);