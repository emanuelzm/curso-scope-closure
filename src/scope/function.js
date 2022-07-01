// Function Scope o Local Scope

function greeting() {
    let userName = 'Ana'; // **LET
    console.log(userName);

    if (userName === 'Ana') {
        console.log(`Hello ${userName}!`);
    }

    // Se puede acceder a la variable dentro y en una funcion anidada
}

greeting();
console.log(userName); // Not is Defined