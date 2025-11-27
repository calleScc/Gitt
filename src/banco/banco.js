var Banco = /** @class */ (function () {
    function Banco() {
    }
    // Método para depositar dinero
    Banco.prototype.depositar = function (saldo, monto) {
        return saldo + monto;
    };
    // Método para retirar dinero
    Banco.prototype.retirar = function (saldo, monto) {
        if (monto > saldo) {
            throw new Error("Fondos insuficientes");
        }
        return saldo - monto;
    };
    // Método para transferir dinero
    Banco.prototype.transferir = function (saldoOrigen, monto) {
        if (monto > saldoOrigen) {
            throw new Error("No se puede transferir más del saldo disponible");
        }
        return saldoOrigen - monto;
    };
    return Banco;
}());
// Ejemplo de uso:
var banco = new Banco();
var saldo = 100;
// Depósito
saldo = banco.depositar(saldo, 50);
console.log("Saldo después del depósito:", saldo);
// Retiro
saldo = banco.retirar(saldo, 30);
console.log("Saldo después del retiro:", saldo);
// Transferencia
saldo = banco.transferir(saldo, 50);
console.log("Saldo después de la transferencia:", saldo);
