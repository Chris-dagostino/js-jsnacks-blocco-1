numero = document.getElementById('numeri');
numero.innerHTML = numero;

somma = document.getElementById('somma');
somma.innerHTML = somma;

for (let i=0; i<10; i++) {

    numero = parseInt(prompt('inserisci un numero'));
    somma = somma + numero
}