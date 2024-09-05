import { Financeiro } from './Financeiro';

const orcamento1 = new Financeiro.Orcamento(15000, ['Teclado', 'Mouse']);
console.log(orcamento1.OrcamentoR());

const valorImposto = Financeiro.calcularImposto(5000, 35);
console.log(`Valor com Imposto: R$${valorImposto}`);

const valorDesconto = Financeiro.calcularDesconto(5000, 20);
console.log(`Valor com Desconto: R$${valorDesconto}`);