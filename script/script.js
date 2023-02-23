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
x Bersagliare il bottone di conferma e memorizzare valore in una variabile
- Al click del bottone: 
    x calcolare il prezzo del biglietto moltiplicando i kilometri a 0.21€
    ?  SE età dell'utente è minore di 18 (se minorenne)
        x V1 - calcolo il prezzo del biglietto scontato al 20% arrotondato alla seconda cifra decimale (uso la funzione toFixed(n) che arrotonda la cifra 
    alla n cifra decimale e converte in stringa il numero) e stampo il prezzo
    :? ALTRIMENTI SE età dell'utente è maggiore o uguale a 65 (compreso)
        x V2 - calcolo il prezzo del biglietto scontato al 40% arrotondato alla seconda cifra decimale (uso la funzione toFixed(n) che arrotonda la cifra 
    alla n cifra decimale e converte in stringa il numero) e stampo il prezzo 
    ALTRIMENTI
        x F1 - Applico il prezzo base 
    - Stampo il prezzo del biglietto in pagina.
*/

// CODE:

// - Bersagliare l'input con il numero dei KM da percorrere e memorizzare il valore in una variabile
let tripKmEl = document.getElementById('tripKm');

// - Bersagliare l'input con l'età dell'utente e memorizzare il valore in una variabile
let userAgeEl = document.getElementById('userAge');

// - Bersagliare il bottone di conferma e memorizzare valore in una variabile
let btnTktPriceEl = document.getElementById('tripPrice');


// - Al click del bottone: 
let tktPriceBase;
let pricePerKm = 0.21;
let tripFinalPrice;

// Passenger Name
let passengerNameEl = document.getElementById('passengerName');

btnTktPriceEl.addEventListener('click', function(){
    // - calcolare il prezzo del biglietto moltiplicando i kilometri a 0.21€ arrotondato alla seconda cifra decimale
    tktPriceBase = (parseInt(tripKmEl.value) * pricePerKm).toFixed(2);

    // ?  SE età dell'utente è minore di 18 (se minorenne)
    if (userAgeEl.value < 18){
        // - calcolo il prezzo del biglietto scontato al 20% arrotondato alla seconda cifra decimale
        tripFinalPrice = tktPriceBase - (tktPriceBase * 0.2);
    } else if (userAgeEl.value >= 65){
        // :? ALTRIMENTI SE età dell'utente è maggiore o uguale a 65 (compreso)
        // calcolo il prezzo del biglietto scontato al 40% arrotondato alla seconda cifra decimale
        tripFinalPrice = tktPriceBase - (tktPriceBase * 0.4);
    } else {
        // ALTRIMENTI
        // Applico il prezzo base
        tripFinalPrice = tktPriceBase;
    }


    // - Stampo il prezzo del biglietto in pagina.
    // 1. Console
    console.log(`Numero di Km: ${tripKmEl.value}`);
    console.log(`Età passeggero: ${userAgeEl.value}`);
    console.log(`Prezzo del biglietto: ${tripFinalPrice}€`);

    // Passenger Name
    console.log(`Nome Passeggero: ${passengerNameEl.value}`);

    // 2.In pagina

    


});


// Empty form calc price
let btnTktEmptyEl = document.getElementById('tripEmpty');

btnTktEmptyEl.addEventListener('click', function(){
    passengerNameEl.value = '';
    tripKmEl.value = '';
    userAgeEl.value = '';
})
