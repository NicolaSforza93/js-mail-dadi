// - genero un numero random da 1 a 6 per il giocatore
const userNumber = Math.floor(Math.random() * (6 - 1 + 1) + 1);
console.log('User Number ' + userNumber);
// - genero un numero random da 1 1 6 per il computer
const pcNumber = Math.floor(Math.random() * (6 - 1 + 1) + 1);
console.log('PC Number ' + pcNumber);

// - stabilire il vincitore, in base a chi fa il punteggio più alto
//   - SE il numero dell'utente è maggiore di quello del computer
if (userNumber > pcNumber) {
//     - l'utente ha vinto
    console.log('Hai vinto');
//   - ALTRIMENTI SE il numero è uguale 
} else if (userNumber === pcNumber) {
//     - l'utente ha pareggiato
    console.log('Hai pareggiato');
} else {
//   - ALTRIMENTI ha vinto il computer
    console.log('Ha vinto il computer');
}