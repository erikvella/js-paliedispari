// esercizio Palindromo

// 1 creo un prompt per fare inserire una parola all'utente

// 2 trasformo la parola in un array 

// 3 creo una funzione per capire se la parola inserita è palindroma

// 4 stampo il risultato 




// // 1
// const parolaUtente = prompt('Inserisci una parola');


// // 2

// const arrayParolaUtente = parolaUtente.split("") ;
// let parola = ''; 
// let contrParola = '';
 
// // 3 

// // for(let i = 0 ; i < arrayParolaUtente.length ; i++){
// //   parola += arrayParolaUtente[i]; 
// //   console.log(parola);
// // }




// es 2 pari e dispari

// 1 creare 2 prompt per fa scegliere all'utente "pari" o "dispari" e un numero da 1 a 5

const pariDispari = prompt('Scegli pari o dispari')

const nUtente = parseInt(prompt('Scegli un numero da 1 a 5'))

const min = 1 ;
const max = 5 ; 
const nPc = randomizer ; 
const somma = nUtente + nPc;



// 2 creare le regole secondo le quali deve vincere il PC o l'utente in base alle scelte fatte 

if(verificatore(somma , pariDispari)){
risultato = true ;
console.log('Ha vinto il giocatore')
}else{
  console.log('Ha vinto il PC')
}

 if (pariDispari !== 'pari' && pariDispari !== 'dispari'){
  console.log('Errore! Inserisci pari o dispari!')
 }

 if (nUtente <= 0 || nUtente > 5){
  console.log('Errore! Inserisci un numero compreso tra 1 e 5!');
 }
// 3 creo le mie funzioni 


// funzione per il numero scelto dal pc

function randomizer (min , max){
  const random = Math.floor(Math.random() * (max - min + 1) + min);

  return random;
}



// faccio la mia funzione per verificare se vince il PC o il giocatore


function verificatore (somma , pariDispari){
  let risultato;
  if(somma % 2 === 0 && pariDispari === 'pari'){
    risultato = true;
  }else if(somma % 2 === 0 && pariDispari === 'dispari'){
    risultato = false;
   }else if(somma % 2 !== 0 && pariDispari === 'pari'){
    risultato = false;
   }else{
    risultato = true;
   }
return risultato;  
}
