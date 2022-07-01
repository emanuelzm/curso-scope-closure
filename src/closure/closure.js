// Funcion anidada en una Funcion - Funcion, luego funcion logica - Segun Niveles

function greeting() {
    let username = 'Emanuel';

    function displayUserName() {
        return `Hello ${username}`;
    }

    return displayUserName();
}

const g = greeting();
console.log(g);
console.log(g()); // Error