// Capire se la parola inserita dall’utente è
// palindroma o no (e quindi output di conseguenza)

//chiedo all'utente di inserire una parola
var parola = prompt('inserisci una parola');

// inverto l'ordine delle lettere di questa parola concatenando 3 metodi:
//split per dividere la parola nelle sue lettere;
// reverse per invertire l'ordine delle lettere
// join per rimettere le lettere unite dopo averle separate e dopo averne invertito l'ordine
var parolaFinale = parola.split('').reverse('').join('');

//detto le condizioni per stampare in console un messaggio che avvisa se la parola è palindroma o meno
if(parolaFinale === parola) {
  console.log(parolaFinale);
  console.log('La parola è palindroma');
} else {
  console.log(parolaFinale);
  console.log('La parola NON è palindroma');
}
