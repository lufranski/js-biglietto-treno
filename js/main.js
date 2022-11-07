// Calcolo del prezzo del biglietto del treno

// Variabili
let tripDuration;
let userAge;
let ticketFull;
let reducedTicket;
let discount;
const coeff = 0.21;

// Chiedo all'user il numero di chilometri da percorrere
tripDuration = parseFloat(prompt('Inserisci il numero di chilometri da percorrere'));

console.log('numero di chilometri: ' , tripDuration);
// Chiedo all'user la sua età
userAge = parseInt(prompt('Inserisci la tua età'));

console.log('età utente: ' , userAge);
// Calcolo del prezzo del viaggio
ticketFull = parseFloat(coeff * tripDuration).toFixed(2);

console.log('prezzo del biglietto: ' , ticketFull);
    // Prezzo del biglietto con sconti
    
    if (userAge < 18){ //Sconto per i minori di 18 anni
        
        discount = parseFloat(ticketFull * 0.2).toFixed(2);
        
        reducedTicket = parseFloat(ticketFull - discount).toFixed(2); 
         
    } else if (userAge > 65) { //Sconto per i maggiori di 65 anni
        
        discount = parseFloat(ticketFull * 0.4).toFixed(2);
        
        reducedTicket = parseFloat(ticketFull - discount).toFixed(2);

    } else { // Biglietto non scontato

        reducedTicket = ticketFull;

    }

console.log('prezzo del biglietto scontato: ' , reducedTicket);

// Output

document.getElementById("container").innerHTML = ` Gentile cliente, hai selezionato un viaggio di ${tripDuration} km per il Nero Cancello di Mordor. Prima di incontrare il Signore Oscuro Lord Sauron, volevamo informarti che la tariffa per la fascia d'et&aacute; da te selezionata &eacute; ${reducedTicket} &euro; (fortunati i maledetti elfi che i 100 anni li superano come niente). Grazie per averci scelto. Cresciamo in numero, cresciamo in potenza! `;