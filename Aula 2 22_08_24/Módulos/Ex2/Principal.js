"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Financeiro_1 = require("./Financeiro");
var orcamento1 = new Financeiro_1.Financeiro.Orcamento(15000, ['Teclado', 'Mouse']);
console.log(orcamento1.OrcamentoR());
var valorImposto = Financeiro_1.Financeiro.calcularImposto(5000, 35);
console.log("Valor com Imposto: R$".concat(valorImposto));
var valorDesconto = Financeiro_1.Financeiro.calcularDesconto(5000, 20);
console.log("Valor com Desconto: R$".concat(valorDesconto));
