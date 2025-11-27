class Auto {

    acelerar(velocidadActual: number, incremento: number): number {
        return velocidadActual + incremento;
    }

    frenar(velocidadActual: number, decremento: number): number {
        const nuevaVelocidad = velocidadActual - decremento;
        return nuevaVelocidad < 0 ? 0 : nuevaVelocidad;
    }

    recorrer(distancia: number, tiempo: number): number {
        if (tiempo === 0) {
            console.log("El tiempo no puede ser cero.");
            return 0;
        }
        return distancia / tiempo;
    }
}


// Ejemplo de uso
const miAuto = new Auto();

let velocidad = 50;
console.log("Velocidad inicial:", velocidad);

velocidad = miAuto.acelerar(velocidad, 20);
console.log("Después de acelerar:", velocidad);

velocidad = miAuto.frenar(velocidad, 30);
console.log("Después de frenar:", velocidad);

const velocidadMedia = miAuto.recorrer(120, 2);
console.log("Velocidad media:", velocidadMedia, "km/h");
