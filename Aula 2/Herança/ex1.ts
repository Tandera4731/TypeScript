class Funcionario {
    constructor(public nome: string, public cargo: string, public salario: number) {}

    apresentacao(): string {
        return `Olá, meu nome é ${this.nome}, sou ${this.cargo} e recebo por volta de R$ ${this.salario},00.`;
    }
}



class Gerente extends Funcionario {
    constructor(nome: string, cargo: string, salario: number, public departamento: string) {
        super(nome, cargo, salario);
    }

    
    apresentacao(): string {
        return `${super.apresentacao()} Departamento: ${this.departamento}.`;
    }
}



const funcionario = new Funcionario('Maria', 'Analista de Mercado', 6000);
console.log(funcionario.apresentacao()); 