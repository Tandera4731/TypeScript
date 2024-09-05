import { Cliente } from './Cliente';

export class Pedido {
    constructor(public cliente: Cliente, public produto: string, public valor: number) { }

    PedidoR(): string {
        return `Cliente: ${this.cliente.nome} Produto: ${this.produto} Valor: R$ ${this.valor}.`;
    }
}