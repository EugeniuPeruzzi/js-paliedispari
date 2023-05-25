'use stict';
// recuperiamo la parola inserita dal utente
let parola = prompt('Inserisci la parola per verificare se e palindroma');

// creo la funzione che calcola le parole e verifica se sono palindrome
function controlloParola(stringa){
    let splitWord = stringa.split('');
    let reverseWord = splitWord.reverse();
    let join = reverseWord.join('')

    if (stringa === join){
        return true;
    }

    else {
        return false;
    }
}

// eseguo un if else per dire all'utente se la parola e palindroma oppure no
verifica = controlloParola(parola);

if (verifica == true){
    alert('Questa parola e palindroma');
}
else {
    alert('Questa parola NON e palindroma');
}
