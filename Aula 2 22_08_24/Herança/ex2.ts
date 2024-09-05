class ContaBancaria {
    constructor(public titular: string, public saldo: number) { }

    exibirSaldo(): string {
        return `Titular: ${this.titular}, Saldo: R$${this.saldo}`;
    }
}


class ContaCorrente extends ContaBancaria {
    constructor(titular: string, saldo: number, public limiteCredito: number) {
        super(titular, saldo);
    }


    exibirSaldo(): string {
        const saldoCredito = this.saldo + this.limiteCredito;
        return `${super.exibirSaldo()}, Saldo com Crédito R$${saldoCredito}`;
    }
}


const contaBancaria = new ContaBancaria('Carlos', 50000);
console.log(contaBancaria.exibirSaldo());

const contaCorrente = new ContaCorrente('Maria', 30000, 10000);
console.log(contaCorrente.exibirSaldo());