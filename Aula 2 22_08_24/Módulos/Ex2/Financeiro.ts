export namespace Financeiro {
    export function calcularImposto(valor: number, taxaImp: number): number {
        return valor * (taxaImp / 100);
    }

    export function calcularDesconto(valor: number, taxaDesc: number): number {
        return valor - (valor * (taxaDesc / 100));
    }

    export class Orcamento {
        constructor(public valorTotal: number, public itens: string[]) { }

        OrcamentoR(): string {
            return `Itens: ${this.itens.join(', ')}, ValorTotal: R$${this.valorTotal}`;
        };
    }
}
