// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Poi generiamo un numero random (sempre da 1 a 5)
// per il computer e dichiariamo chi ha vinto.

// Chiedo all’utente di scegliere tra pari o dispari e un numero da 1 a 5.
var scelta = prompt('pari o dispari?');
document.writeln('Hai scelto '+ scelta);
var numero_giocatore = prompt('scegli un numero da 1 a 5');
document.writeln('<br>Hai scelto '+ numero_giocatore);

// Poi genero il numero che sceglierà il computer come un numero random da 1 a 5

var numero_computer = Math.ceil(Math.random()*5);
document.writeln('<br>Il computer ha scelto '+ numero_computer);

//definisco una variabile che chiamo "somma" come la somma algebrica tra i due numeri
var somma = (parseInt(numero_giocatore) + parseInt(numero_computer));
document.writeln('<br>La somma dei due numeri è ' + somma);

//detto le condizioni (3 in tutto):
// 1) scelta pari e somma pari per vittoria
// 2) scelta dispari e somma dispari per vittoria
// 3) sconfitta in tutti gli altri casi
if ((scelta == 'pari' && somma % 2 ==0) || (scelta == 'dispari' && somma % 2 !=0)) {
  document.writeln('<br>Hai vinto!');
} else {
  document.writeln('<br>Hai Perso!');
}
