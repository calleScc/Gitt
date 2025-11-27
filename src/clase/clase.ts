class CuentaBancaria { // Clase para representar una cuenta bancaria
    private saldo: number; // Atributo privado para almacenar el saldo

    constructor(saldoInicial: number) { // Constructor para inicializar el saldo
        this.saldo = saldoInicial; // Asignar el saldo inicial
    }

    depositar(monto: number): void { // Método para depositar dinero en la cuenta
        this.saldo += monto; // Sumar el monto al saldo actual
        console.log("Depósito exitoso."); // Mensaje de confirmación
    }

    mostrarSaldo(): void { // Método para mostrar el saldo actual
        console.log("Saldo actual: $" + this.saldo); // Imprimir el saldo en la consola
    }
}

const cuenta = new CuentaBancaria(100); // Ejemplo de uso
cuenta.mostrarSaldo();
cuenta.depositar(50);
cuenta.mostrarSaldo();
