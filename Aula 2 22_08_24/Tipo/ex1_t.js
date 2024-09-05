function ProdPag(produto, pagamento) {
    return "Produto: ".concat(produto.nome, " Categoria: ").concat(produto.categoria, " Pre\u00E7o: R$ ").concat(produto.preco, " Forma de Pagamento ").concat(pagamento);
}
var produto1 = {
    nome: "Mouse",
    preco: 150.00,
    categoria: "Periféricos"
};
var pagamento = 'pix';
console.log(ProdPag(produto1, pagamento));
