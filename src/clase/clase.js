
class Animal { //Clase Animal la base
    sonar() {
        console.log("El animal hace un sonido."); // Método genérico sonar
    }
}

class Perro extends Animal { // Sobrescribe el método sonar
    sonar() {
        console.log("El perro ladra: ¡Guau guau!"); // Implementación de sonido para perros
    }
}

class Gato extends Animal { // Clase Gato que hereda de Animal
    sonar() {
        console.log("El gato maúlla: ¡Miau miau!");// Implementación de sonido para gatos
    }
}

// Probando las clases
const perro = new Perro();
perro.sonar();

const gato = new Gato();
gato.sonar();

