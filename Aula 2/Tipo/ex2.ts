type Pessoa = {
    nome: string;
    idade: number;
};


type Empregado = {
    empresa: string;
    salario: number;
};


type PessoaEmpresa = Pessoa & Empregado;
