interface Produto {
    nome: string;
    preco: number;
    categoria: string;
}

type FormaPagamento = 'dinheiro' | 'cartão' | 'pix';



function ProdPag(produto: Produto, pagamento: FormaPagamento): string { 
    return `Produto: ${produto.nome} Categoria: ${produto.categoria} Preço: R$ ${produto.preco} Forma de Pagamento ${pagamento}` ;
   }


const produto1: 
Produto = {
    nome: "Mouse",
    preco: 150.00,
    categoria: "Periféricos"
};
const pagamento:
FormaPagamento = 'pix';

console.log(ProdPag(produto1,pagamento));