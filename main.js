/*
1.Palidroma Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma




Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
Domande da farsi quando si crea una funzione:
Come dovrebbe chiamarsi?
Ho bisogno di parametri?
Devo restituire un valore?
Se sì, di che tipo?
Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:*/




//es 1 palindroma
let parolaPalidroma = prompt('inserisci una parola ed io ti diro se e palidroma: ', 'Osso').toLowerCase()
let parolaInversa = ""

function isPalindromo( parola ) {
    
    for (let i = parola.length - 1; i >= 0; i--){

        parolaInversa+= parola[i]

    }

    return parola === parolaInversa;
}


if (isPalindromo(parolaPalidroma)) {
    
    console.log(`La parola ${parolaPalidroma} è palindroma ${parolaInversa}`);

} else {

    console.log(`La parola ${parolaPalidroma} non è palindroma ${parolaInversa}`);

}




//2.Pari e Dispari

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
// Dichiariamo chi ha vinto.
let scelta = prompt("scegli Pari o Dispari").toLowerCase();
let numero = (prompt("inserisci un numero tra 1 e 5"));
let numeroComputer = computerRandom;

if (scelta === "pari" || scelta === "dispari") {

    if ((numero >= 1 && numero <= 5))
        console.log(scelta, numero)
}

// numero random per computer
function computerRandom() {
    let numeroCpu = Math.floor((Math.random() * 5) + 1)

    return (numeroCpu)

}


function somma(x, y) {

}


computerRandom()

 function isPariODispari(somma){
    if (somma % 2 == 0){
        console.log ()
    }
 }


 /*let scelta = prompt("Pari o dispari").toLowerCase();
let numeroComputer = computerRandom()

if (scelta === pari || scelta === dispari){
    let numero = parseInt(prompt("Inserisci un numero tra 1 e 5"));
    if ((numero >= 1 && numero <= 5)){
        // console.log(scelta, numero, numeroComputer)
        let somma = numero + numeroComputer
        console.log(somma)
        isPariODispari(somma)
    } 
}

function computerRandom(){
    let numeroCpu = Math.floor((Math.random() * 5) + 1);
    return numeroCpu;
}

function isPariODispari(somma){
    if (somma % 2 == 0){
        console.log("La somma é pari")
    } else if (somma % 2 != 0) {
        console.log("La somma é dispari")
    } else {
        console.log("Pareggio")
    }
}
// Palidroma Chiedere all’utente di inserire una parola 
// Creare una funzione per capire se la parola inserita è palindroma

let parola = prompt("Inserisci la parola").toLowerCase();
let alorap = ""; 


function reverseString(){
    return parola.split("").reverse("").join("") // [ "o", "s", "s", "o" ]
}

alorap = reverseString();


if (parola === alorap){
    console.log(La parola ${parola} é palindroma)
} else {
    console.log(La parola ${parola} non é palindroma)
}

reverseString(parola)
*/