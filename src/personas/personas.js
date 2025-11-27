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
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre; //Va a guardar esos datos dentro del objeto
        this.edad = edad;
    }
    Persona.prototype.mostrarInfo = function () {
        console.log("Nombre: " + this.nombre + ", Edad: " + this.edad);
    };
    return Persona;
}());
var Estudiante = /** @class */ (function (_super) {
    __extends(Estudiante, _super);
    function Estudiante(nombre, edad, curso) {
        var _this = _super.call(this, nombre, edad) || this;
        _this.curso = curso; //Guarda el curso que le pasas
        return _this;
    }
    Estudiante.prototype.mostrarCurso = function () {
        console.log("Curso: " + this.curso); //Va a imprimir el curso del estudiante
    };
    return Estudiante;
}(Persona));
var estudiante1 = new Estudiante("Danny", 18, "Desarrollo de Software"); //Cramos mis datos como estudiante
estudiante1.mostrarInfo(); //Muestra mi nomre y edad 
estudiante1.mostrarCurso(); //Muestra mi curso
