// var, [ let, const ] = Estas dos llegan desde la version ES-06

function fruits() {
    /* Las variables solo pueden ser usadas dentro del Bloque
    Para eso solo utilizaremos let, const */

    if (true) {
        var fruit1 = 'Apple'; // Function Scope
        let fruit2 = 'Kiwi'; // Block Scope
        const fruit3 = 'Banana'; // Block Scope

        console.log(fruit2); // let
        console.log(fruit3); // const
    }
    console.log(fruit1); // var

    // esto = {}, es un bloque
}

fruits();
// Es recomendable no usar VAR