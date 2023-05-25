'use stric';

//funzione che mi genere numeri randome 
function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};
// funzione per controllare il risultato della somma
function pariDispari(pardis){
    if (pardis % 2 ==0){
        return true
    }
    else {
        return false
    }
}
// funzione per controllare la scelta del utente
function evenOddChoice(evenOdd){
    if (evenOdd == 'pari'){
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
        let randomizer = randomNumbers(1, 5);
        console.log(randomizer);
        let numberSum = randomizer + userValue;
        console.log(numberSum);
        
        let computer = pariDispari(numberSum)
        let player = evenOddChoice(evenodd.value)

        let result = document.querySelector('.output-result').innerHTML = `<h3>Il risultato e ${numberSum}</h3>`

        if (computer && player){
            document.querySelector('.output').innerHTML = `<h2>Hai scelto pari ed e uscito pari, Hai vinto!</h2>`   
        }
        else if (computer && (player == false)) {
            document.querySelector('.output').innerHTML = `<h2>Hai scleto dispari pari ed e uscito pari, Hai perso!</h2>` 
        }
        else if ((computer == false) && player){
            document.querySelector('.output').innerHTML = `<h2>Tu hai scelto pari ed e uscito dispari , Hai perso!</h2>` 
        }
        else{
            document.querySelector('.output').innerHTML = `<h2>Hai scelto dispari ed e uscito dispari, Hai vinto!</h2>` 
        }

    }
});














































// for (let i=0; i<1; i++){
//     let numero = randomNumbers(1, 5)
//     console.log(numero)
// }