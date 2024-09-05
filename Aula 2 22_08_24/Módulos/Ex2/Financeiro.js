"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Financeiro = void 0;
var Financeiro;
(function (Financeiro) {
    function calcularImposto(valor, taxaImp) {
        return valor * (taxaImp / 100);
    }
    Financeiro.calcularImposto = calcularImposto;
    function calcularDesconto(valor, taxaDesc) {
        return valor - (valor * (taxaDesc / 100));
    }
    Financeiro.calcularDesconto = calcularDesconto;
    var Orcamento = /** @class */ (function () {
        function Orcamento(valorTotal, itens) {
            this.valorTotal = valorTotal;
            this.itens = itens;
        }
        Orcamento.prototype.OrcamentoR = function () {
            return "Itens: ".concat(this.itens.join(', '), ", ValorTotal: R$").concat(this.valorTotal);
        };
        ;
        return Orcamento;
    }());
    Financeiro.Orcamento = Orcamento;
})(Financeiro || (exports.Financeiro = Financeiro = {}));
