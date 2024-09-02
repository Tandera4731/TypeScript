import { ClienteNamespace } from './Cliente';

export namespace PedidoNamespace {
    export class Pedido extends ClienteNamespace.Cliente {
        constructor(nome: string, email: string, public produto: string, public valor: number) {
            super(nome, email);
        }

        Pedido(): string {
            return `Cliente: ${this.nome} Produto: ${this.produto} Valor: R$ ${this.valor},00.`;
        }
    }
}