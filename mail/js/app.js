// - chiedo all'utente la sua email
let userEmail;
userEmail = prompt('Inserisci la tua Email');
// console.log(userEmail)
// - dichiaro un array che contiene la lista di email
const emailsList = ['giacomo@gmail.com', 'francesco@gmail.com', 'gianluca@gmail.com', 'pina@gmail.com', 'nicola@hotmail.it', 'rosangela@gmail.com'];
// console.log(emailList)
// - dichiaro una variabile per ricordarmi se ho trovato l'email dell'utente
let emailFound = false;

// - controllo tutti gli elementi dell'array 
for (let i = 0; i < emailsList.length; i++) {
    // console.log(emailList[i])
//   - recupero l'elemento corrente 
    const currentEmail = emailsList[i];
    
//   - se l'elemento è uguale all'email inserita
    if (userEmail === currentEmail) {
        emailFound = true;
//     - stampo email trovata
    } 
}

if (emailFound === true) {
    console.log('sei in lista');
} else {
    console.log('non puoi accedere');
}