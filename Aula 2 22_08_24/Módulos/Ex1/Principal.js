"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente_1 = require("./Cliente");
var Pedido_1 = require("./Pedido");
var cliente1 = new Cliente_1.Cliente('Cristiano', 'cristiano@gmail.com');
var pedido1 = new Pedido_1.Pedido(cliente1, 'Teclado', 2500);
console.log(pedido1.PedidoR());
