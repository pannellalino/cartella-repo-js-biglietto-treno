//calcolare prezzo finale del biglietto

// 1 chiedere all'utente quanti km da percorrere
// 2 chiedere all'utente l'età

//calcolare prezzo totale del viaggio considerando
  //prezzo biglietto al km 0.21 euro
  //sconto minorenni del 20%
  //sconto over 65 del 40%

const km_daPercorrere = parseInt(prompt('Quanti Km vuoi percorrere?'));
const etaUtente = parseInt(prompt('Quanti anni hai?'));
const prezzoKm = 0.21;


const prezzoPercorso = km_daPercorrere * prezzoKm;
console.log(prezzoPercorso);


if (etaUtente < 18) {
  console.log('etaUtente è minorenne' + prezzoPercorso - (prezzoPercorso / 100 * 20));
  console.log(prezzoPercorso - (prezzoPercorso / 100 * 20));
} else if (etaUtente > 65) {
  console.log('etaUtente è over' + prezzoPercorso - (prezzoPercorso / 100 * 40));
  console.log(prezzoPercorso - (prezzoPercorso / 100 * 40));
} else {
  console.log('no discount' + prezzoPercorso);
  console.log(prezzoPercorso);
}

let prezzoTotale = prezzoPercorso - (prezzoPercorso / 100 * 20) || prezzoPercorso - (prezzoPercorso / 100 * 40) || prezzoPercorso;


document.getElementById("output").innerHTML = prezzoTotale;


num.toFixed(2);