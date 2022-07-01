function moneyBoxFail(coins) {
    let saveCoins = 0; 
    // Siempre se declara de nuevo, al ejecutar la funcion con el valor de 0.
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
    /* > MoneyBox $(0 + coins)*/
}

moneyBoxFail(5);
/* > MoneyBox $5*/
moneyBoxFail(5);
/* > MoneyBox $5*/

function moneyBox() {
    let saveCoins = 0;

    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
        /* > MoneyBox: $(saveCoins value)*/
    }

    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
/* > MoneyBox: $5 */
myMoneyBox(5);
/* > MoneyBox: $10 */
myMoneyBox(15);
/* > MoneyBox: $25 */

const moneyBoxAna = moneyBox();
moneyBoxAna(10);
/* > MoneyBox: $10 */
moneyBoxAna(20);
/* > MoneyBox: $30 */
moneyBoxAna(5);
/* > MoneyBox: $35 */