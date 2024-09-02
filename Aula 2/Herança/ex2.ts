class ContaBancaria{
    constructor(public titular: string, private saldo: number) {}

    exibirSaldo(): number {
        return this.saldo;
    }
}


class ContaCorrente extends ContaBancaria {
    constructor(titular: string, saldo: number, public limiteCredito : number) {
        super(titular, saldo);
    }

    
    exibirSaldo(): number {
        return super.exibirSaldo() + this.limiteCredito;
    }
}


const contaBancaria = new ContaBancaria('Carlos', 50000);
console.log(contaBancaria.exibirSaldo());

const contaCorrente = new ContaCorrente('Maria', 30000, 10000);
console.log(contaCorrente.exibirSaldo());