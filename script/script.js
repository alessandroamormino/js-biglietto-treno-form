// CONSEGNA: 

/*
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
*/

//PSEUDOCODICE: 

/*

x Bersagliare l'input con il numero dei KM da percorrere e memorizzare il valore in una variabile
x Bersagliare l'input con l'età dell'utente e memorizzare il valore in una variabile
- Bersagliare il bottone di conferma e memorizzare valore in una variabile
- Al click del bottone: 
    - calcolare il prezzo del biglietto moltiplicando i kilometri a 0.21€
    - calcolo il prezzo del biglietto scontato al 20% arrotondato alla seconda cifra decimale (uso la funzione toFixed(n) che arrotonda la cifra 
    alla n cifra decimale e converte in stringa il numero)
    - calcolo il prezzo del biglietto scontato al 40% arrotondato alla seconda cifra decimale (uso la funzione toFixed(n) che arrotonda la cifra 
    alla n cifra decimale e converte in stringa il numero)
    ?  SE età dell'utente è minore di 18 (se minorenne)
        - V1 - Stampo il prezzo del biglietto con sconto al 20% in pagina
    :? ALTRIMENTI SE età dell'utente è maggiore o uguale a 65 (compreso)
        - V2 - Stampo il prezzo del biglietto con sconto al 40% in pagina
    ALTRIMENTI
        - F1 - Stampo il prezzo del biglietto senza sconti in pagina, arrotondato alla seconda cifra decimale
*/

// CODE:

// - Bersagliare l'input con il numero dei KM da percorrere e memorizzare il valore in una variabile
let tripKmEl = parseInt(document.getElementById('tripKm').value);
console.log('Numero Km: ' + tripKmEl);

// - Bersagliare l'input con l'età dell'utente e memorizzare il valore in una variabile
let userAgeEl = parseInt(document.getElementById('userAge').value);
console.log('Età: ' + userAgeEl);

// - Bersagliare il bottone di conferma e memorizzare valore in una variabile
let btnTripPriceEl = document.getElementById('tripPrice');

// - Al click del bottone: 
// - calcolare il prezzo del biglietto moltiplicando i kilometri a 0.21€

btnTripPriceEl.addEventListener('click', function(){
    console.log('click');
});

