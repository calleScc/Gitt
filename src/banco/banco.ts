class Banco {

    // Método para depositar dinero
    depositar(saldo: number, monto: number): number {
        return saldo + monto;
    }

    // Método para retirar dinero
    retirar(saldo: number, monto: number): number {
        if (monto > saldo) {
            throw new Error("Fondos insuficientes");
        }
        return saldo - monto;
    }

    // Método para transferir dinero
    transferir(saldoOrigen: number, monto: number): number {
        if (monto > saldoOrigen) {
            throw new Error("No se puede transferir más del saldo disponible");
        }
        return saldoOrigen - monto;
    }
}

// Ejemplo de uso:
const banco = new Banco();

let saldo = 100;

// Depósito
saldo = banco.depositar(saldo, 50);
console.log("Saldo después del depósito:", saldo);

// Retiro
saldo = banco.retirar(saldo, 30);
console.log("Saldo después del retiro:", saldo);

// Transferencia
saldo = banco.transferir(saldo, 50);
console.log("Saldo después de la transferencia:", saldo);
