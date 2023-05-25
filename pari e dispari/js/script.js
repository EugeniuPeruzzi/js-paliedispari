'use stric';

//funzione che mi genere numeri randome 
function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};

function pariDispari(pardis){
    if (pardis % 2 ==0){
        return true
    }
    else {
        return false
    }
}

// definisco le variabili che vengono prese dal HTML
let oneFive = document.getElementById('onefive');
let evenodd = document.getElementById('evenodd');
let get = document.getElementById('btn');

// faccio in modo che al click accadano le cose
get.addEventListener('click', function(){
    //estrago il valore del utente
    let userValue = parseInt(oneFive.value);
    console.log(oneFive.value)
    evenodd.value;
    console.log(evenodd.value)
    //genera 1 solo numero number con l'utilizzo della funzione
    for (let i=0; i<1; i++){
        let randomizer = randomNumbers(1, 5)
        console.log(randomizer)
        let numberSum = randomizer + userValue;
        console.log(numberSum)
    }


});














































// for (let i=0; i<1; i++){
//     let numero = randomNumbers(1, 5)
//     console.log(numero)
// }