// "Asignacion, Declaracion ReAsignacion, ReDeclaracion"

var a; // Declarar
var b = 'b'; // Declarar y Asignar
b = 'bb'; // ReAsignar
var a = 'aa'; // ReDeclarar

// Global Scope
var fruit = 'Apple'; // Variable Global
console.log(fruit);

function BestFruit () {
    console.log(fruit);
}

BestFruit();

// Declarar y no asignar es Global
function countries() {
    country = 'Colombia'; // Global
    console.log(country);
}

countries();
console.log(country);