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
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, cargo, salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
    Funcionario.prototype.apresentacao = function () {
        return "Ol\u00E1, meu nome \u00E9 ".concat(this.nome, ", sou ").concat(this.cargo, " e recebo por volta de R$ ").concat(this.salario, ",00.");
    };
    return Funcionario;
}());
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente(nome, cargo, salario, departamento) {
        var _this = _super.call(this, nome, cargo, salario) || this;
        _this.departamento = departamento;
        return _this;
    }
    Gerente.prototype.apresentacaoGer = function () {
        return "".concat(_super.prototype.apresentacao.call(this), " Departamento: ").concat(this.departamento, ".");
    };
    return Gerente;
}(Funcionario));
var Gerente1 = new Gerente('Maria', 'Gerente Analise de Mercado', 35000, 'BI');
console.log(Gerente1.apresentacaoGer());
