import { Cliente } from './Cliente';
import { Pedido } from './Pedido';

const cliente1 = new Cliente('Cristiano', 'cristiano@gmail.com')
const pedido1 = new Pedido(cliente1, 'Teclado', 2500)

console.log(pedido1.PedidoR());