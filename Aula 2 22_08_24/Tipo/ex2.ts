type Pessoa = {
    nome: string;
    idade: number;
};


type Empregado = {
    empresa: string;
    salario: number;
};


type PessoaEmpresa = Pessoa & Empregado;

function PsEmp(pessoaEmpresa: PessoaEmpresa): string { 
    return `Nome: ${pessoaEmpresa.nome} Idade: ${pessoaEmpresa.idade} Empresa: ${pessoaEmpresa.empresa} Salário R$ ${pessoaEmpresa.salario},00` ;
   }

const pessoaEmpresa: PessoaEmpresa = {
    nome: 'Jorge',
    idade: 37,
    empresa: 'Bradesco',
    salario: 120000
};


console.log(PsEmp(pessoaEmpresa));