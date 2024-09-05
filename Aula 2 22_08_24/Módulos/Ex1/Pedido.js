"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
var Pedido = /** @class */ (function () {
    function Pedido(cliente, produto, valor) {
        this.cliente = cliente;
        this.produto = produto;
        this.valor = valor;
    }
    Pedido.prototype.PedidoR = function () {
        return "Cliente: ".concat(this.cliente.nome, " Produto: ").concat(this.produto, " Valor: R$ ").concat(this.valor, ".");
    };
    return Pedido;
}());
exports.Pedido = Pedido;
