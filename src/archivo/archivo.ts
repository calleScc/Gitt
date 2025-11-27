class Estudiante {

    // Método para agregar una nueva nota y calcular el nuevo promedio
    agregarNota(promedio: number, nuevaNota: number): number {
        return (promedio + nuevaNota) / 2;
    }

    // Método para verificar si aprueba
    aprobar(nota: number, minima: number): boolean {
        return nota >= minima;
    }

    // Método para calcular faltas totales
    calcularFaltas(faltasActuales: number, nuevas: number): number {
        return faltasActuales + nuevas;
    }
}


// ----- Ejemplo de uso -----
const estudiante = new Estudiante();

const nuevoPromedio = estudiante.agregarNota(8, 10);
console.log("Nuevo promedio:", nuevoPromedio);

const aprobado = estudiante.aprobar(nuevoPromedio, 7);
console.log("¿Aprobado?:", aprobado);

const totalFaltas = estudiante.calcularFaltas(3, 2);
console.log("Total de faltas:", totalFaltas);
