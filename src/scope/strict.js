// EcmaScript 5 - Control de las variables
// Strict.js

// var pi; // = undefined
'use strict';
pi = 3.1416; // Declarar y Asignar
console.log(pi);

function myFunction() {
    'use strict';
    return pi = 3.1416;
}

console.log(myFunction());