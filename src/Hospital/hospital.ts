class Hospital {

    // Método para calcular la dosis total en mg
    calcularDosis(peso: number, mgPorKg: number): number {
        return peso * mgPorKg;
    }

    // Método para calcular el IMC
    calcularIMC(peso: number, altura: number): number {
        return peso / (altura * altura);
    }

    // Método para registrar visitas
    registrarVisitas(visitasActuales: number, nuevas: number): number {
        return visitasActuales + nuevas;
    }
}

// Ejemplo de uso
const hospital = new Hospital();

console.log("Dosis total:", hospital.calcularDosis(70, 5), "mg");
console.log("IMC:", hospital.calcularIMC(70, 1.75));
console.log("Total de visitas:", hospital.registrarVisitas(3, 2));
