var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    ContaBancaria.prototype.exibirSaldo = function () {
        return "Titular: ".concat(this.titular, ", Saldo: R$").concat(this.saldo);
    };
    return ContaBancaria;
}());
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente(titular, saldo, limiteCredito) {
        var _this = _super.call(this, titular, saldo) || this;
        _this.limiteCredito = limiteCredito;
        return _this;
    }
    ContaCorrente.prototype.exibirSaldo = function () {
        var saldoCredito = this.saldo + this.limiteCredito;
        return "".concat(_super.prototype.exibirSaldo.call(this), ", Saldo com Cr\u00E9dito R$").concat(saldoCredito);
    };
    return ContaCorrente;
}(ContaBancaria));
var contaBancaria = new ContaBancaria('Carlos', 50000);
console.log(contaBancaria.exibirSaldo());
var contaCorrente = new ContaCorrente('Maria', 30000, 10000);
console.log(contaCorrente.exibirSaldo());
