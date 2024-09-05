class Funcionario {
    constructor(public nome: string, public cargo: string, public salario: number) { }

    apresentacao(): string {
        return `Olá, meu nome é ${this.nome}, sou ${this.cargo} e recebo por volta de R$ ${this.salario},00.`;
    }
}



class Gerente extends Funcionario {
    constructor(nome: string, cargo: string, salario: number, public departamento: string) {
        super(nome, cargo, salario);
    }


    apresentacaoGer(): string {
        return `${super.apresentacao()} Departamento: ${this.departamento}.`;
    }
}



const Gerente1 = new Gerente('Maria', 'Gerente Analise de Mercado', 35000, 'BI');
console.log(Gerente1.apresentacaoGer()); 