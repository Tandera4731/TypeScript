import { Financeiro } from './Financeiro';

export class Orcamento extends Financeiro.calcularImposto {
    valorTotal: number;

    aplicarImposto(valorTotal: number, taxa: number): void {
        const imposto = calcularImposto(this.valorTotal, taxa);
        this.valorTotal -= imposto;
    }

    aplicarDesconto(taxa: number): void {
        const desconto = calcularDesconto(this.valorTotal, taxa);
        this.valorTotal -= desconto;
    }
}