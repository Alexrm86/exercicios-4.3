let maiornumeroprimo = 0;

for (let numero = 0; numero <= 50; numero += 1) {
  let cont = true;
  for (let divisor = 2;divisor < numero; divisor += 1) {
    if (numero % divisor === 0) {
      cont = false;
    }
  }
  if (cont) {
    maiornumeroprimo = numero;
  }
}

console.log(maiornumeroprimo);
     

