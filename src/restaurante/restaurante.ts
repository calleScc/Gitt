class Restaurante {

    // Método para calcular el total por producto
    calcularTotal(precio: number, cantidad: number): number {
        return precio * cantidad;
    }

    // Método para aplicar un descuento al total
    aplicarDescuento(total: number, descuento: number): number {
        return total - (total * descuento / 100);
    }

    // Método para calcular la propina según porcentaje
    calcularPropina(total: number, porcentaje: number): number {
        return total * (porcentaje / 100);
    }
}

// -------------------------
// Ejemplo de uso
// -------------------------

const miRestaurante = new Restaurante();

const totalProducto = miRestaurante.calcularTotal(12.5, 3); // precio 12.5, cantidad 3
console.log("Total del producto:", totalProducto);

const totalConDescuento = miRestaurante.aplicarDescuento(totalProducto, 10); // 10% descuento
console.log("Total con descuento:", totalConDescuento);

const propina = miRestaurante.calcularPropina(totalConDescuento, 15); // 15% propina
console.log("Propina:", propina);
