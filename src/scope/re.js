/* ES6 Let y Const */

// 🧐 Var
var firstName; // Declaramos == Su asignacion es: Undefined

firstName = 'Oscar'; // Reasignar
console.log(firstName);
/* > Oscar */

// Reasignar un valor
var lastName = 'David'; // Declaramos y Asignamos
lastName = 'Ana'; // Reasignamos
console.log(lastName);
/* > Ana */

// Reasignar y Redeclarar
var secondName = 'David'; // Declaramos y Asignamos
var secondName = 'Ana'; // Redeclaramos y Reasignamos
console.log(secondName);
/* > Ana */

// 🤯 Let
let fruit = 'Apple'; 
fruit = 'Kiwi'
console.log(fruit);
/* > Kiwi */

// Pero si ReDeclaramos: let fruit = 'Banana';
console.log(fruit); // Lee la Declaracion y Asignacion y NO la ReDeclara ni la Reasigna - Va directo a Error
/* > Error */

// 🤠 Const
const animal = 'dog'; // Declara y Asigna
animal = 'cat'; // ReAsignar
console.log(animal);
/* > Error */

// Alterando una Constante - (El Const no es inmutable)
const vehicles = []; 
/* Referencia Existente ¡Es un Arreglo!
   Puedo alterar el Arreglo mientras no ReDeclare ni ReAsigne la Const name = [Array]; */

vehicles.push("🚗"); // Añadimos un valor al Arreglo
console.log(vehicles);
/* > [ '🚗' ] */

vehicles.pop();
console.log(vehicles);  // Eliminamos un valor del Arreglo
/* > [] */