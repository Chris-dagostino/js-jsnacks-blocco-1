let numero = document.getElementById('numeri');

let somma = document.getElementById('somma');

let sommaNumeri = 0;

numero.innerHTML= "";

for (let i=0; i<10; i++) {

    numeroInserito = parseInt(prompt('inserisci un numero'));
    sommaNumeri += numeroInserito;
    numero.innerHTML += numeroInserito 3;
    somma.innerHTML = sommaNumeri;
}

