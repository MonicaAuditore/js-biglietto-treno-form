/*Descrizione:
Scrivere un programma che chieda all'utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch'essa da scrivere in console.
MILESTONE 2:

Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l'utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.*/

/*INIZIO
1. Chiedere all'utente il numero di km da percorrere
2. chiedere all'utente l'età

3. calcolare il costo del biglietto in base ai km; Moltiplicando il costo di 1km (0.21 Euro) per il n° di km che deve percorrere;
4. calcolare se l'utente è minorenne; ovvero se la sua età è <= a 17 e se è minorenne applicare lo sconto del 20% altrimenti no; Mostrare il costo finale con 2 decimali;
5. calcolare se l'utente è over 65: ovvero se la sua età è >= 65 e se è over 65 applicare lo sconto del 40% altrimenti no; Mostrare il costo finale con 2 decimali;
6. se l'utente non è ne minorenne ne maggiorenne il costo del biglietto resta invariato; Mostrare il costo finale con 2 decimali; 

MILESTONE 1
7. in html crea un form con 2 input e un bottone
8. collega i dati

MILESTONE 2
9. aggiungi lo stile*/

// Variabili
let km;
let etaUtente;
let costoBiglietto;

km = prompt("Inserisci i Km che devi percorrere");
km = parseInt(km);
etaUtente = prompt("Inserisci la tua età");

console.log("km", km, typeof km, isNaN(km));
console.log("età", etaUtente, typeof etaUtente, isNaN(etaUtente));

if (isNaN(km) == true || isNaN(etaUtente) == true) {
  alert("I valori inseriti non sono validi! Aggiorna la pagina e riprova.");
} else {
  costoBiglietto = 0.21 * km;
  console.log("costo base", typeof costoBiglietto, isNaN(costoBiglietto));
  let finalPrice;
  let discount;

  if (etaUtente < 18) {
    const discount = (costoBiglietto / 100) * 20;
    console.log("sconto bambini", discount, typeof discount, isNaN(discount));
    const finalPrice = costoBiglietto - discount;
    console.log(
      "Tot bambini",
      finalPrice,
      typeof finalPrice,
      isNaN(finalPrice)
    );
  } else if (etaUtente > 65) {
    const discount = (costoBiglietto / 100) * 40;
    console.log("sconto anziani", discount, typeof discount, isNaN(discount));
    const finalPrice = costoBiglietto - discount;
    console.log(
      "Tot anziani",
      finalPrice,
      typeof finalPrice,
      isNaN(finalPrice)
    );
  } else {
    finalPrice = costoBiglietto;
  }
  alert("Prezzo finale: Euro " + finalPrice);
}
