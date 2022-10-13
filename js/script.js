//calcolare prezzo finale del biglietto

// 1 chiedere all'utente quanti km da percorrere
// 2 chiedere all'utente l'età

//calcolare prezzo totale del viaggio considerando
  //prezzo biglietto al km 0.21 euro
  //sconto minorenni del 20%
  //sconto over 65 del 40%

  
  const age = parseInt(prompt('Quanti anni hai?'));
  const km = parseInt(prompt('Quanti Km vuoi percorrere?'));
  const priceForKm = 0.21;
  const discountJunior = 0.2;
  const discountSenior = 0.4;
  
  let msg, totalPrice, discountPrice;
  
  totalPrice = km * priceForKm;
  
  msg = `Il prezzo del biglietto è di € ${totalPrice.toFixed(2)}.`;
  
  // anche se è una stringa lo vede come numero
  if(age < 18){
    //discountPrice = totalPrice - totalPrice * discountJunior;
    discountPrice = totalPrice * (1 - discountJunior);
    msg += `
      <br>
      Essendo minorenne hai lo sconto del ${discountJunior * 100}% quindi paghi solo € ${discountPrice.toFixed(2)}!
    `;
  }else if(age >= 65){
    discountPrice = totalPrice * (1 - discountSenior);
    msg += `
      <br>
      Essendo over 65 hai lo sconto del ${discountSenior * 100}% quindi paghi solo € ${discountPrice.toFixed(2)}!
    `;
  }
  
  document.getElementById('output').innerHTML = msg;