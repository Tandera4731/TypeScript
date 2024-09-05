function PsEmp(pessoaEmpresa) {
    return "Nome: ".concat(pessoaEmpresa.nome, " Idade: ").concat(pessoaEmpresa.idade, " Empresa: ").concat(pessoaEmpresa.empresa, " Sal\u00E1rio R$ ").concat(pessoaEmpresa.salario, ",00");
}
var pessoaEmpresa = {
    nome: 'Jorge',
    idade: 37,
    empresa: 'Bradesco',
    salario: 120000
};
console.log(PsEmp(pessoaEmpresa));
