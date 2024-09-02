export namespace Financeiro {
    export function calcularImposto(valor: number, taxaImp: number): number {
        return valor * (taxaImp / 100);
    }

    export function calcularDesconto(valor: number, taxaDesc: number): number {
        return valor * (taxaDesc / 100);
    }

    export class Orcamento {
        valorTotal: number;
        itens: string[];
    }
}
