//element
const main = document.querySelector('main');
const playBtn = document.getElementById('play');
const message = document.querySelector('h1');
const contatore = document.querySelector('p');
const NUM_MAX = 5;
let arrayNumber = [];
let arrNumberInseriti = [];  
let numeriTrovati = [];
let time;
let counter = 5;


// AZIONE CLICK BOTTONE
playBtn.addEventListener('click', () => {
  console.log('PLAY');

  arrayNumber = generateNumber();

  message.classList.remove('hide');

  message.innerHTML = `${arrayNumber}` 

  console.log(arrayNumber);

  startSetTimeout();
  printCounter();

  time = setInterval(function() {
    printCounter();
  }, 1000)
})

// Funzione che dopo 5000ms interrompe il time e stampa il prompt per inserire i numeri
function startSetTimeout() {
  setTimeout(function() {
    if(counter == 0){
      message.classList.add('hide');
    }
    console.log(message);
    clearInterval(time);
    contatore.innerHTML = inserisciNumeri();


    verifica(arrayNumber, arrNumberInseriti);

    if(numeriTrovati === arrayNumber){      
      message = `Hai scritto tutti i numeri corretti`;
    }

  }, 5000);
}

// Funzione che stampa il valore del counter secondi nella pagina e decrementa il contatore
function printCounter(){
  contatore.innerHTML = `Hai rimasto solo ${counter} secondi per memorizzare i numeri`
  counter--;
}

//Funzione che genera i 5 numeri random
function generateNumber() {
  const arrayNumber = [];
  while(arrayNumber.length < NUM_MAX){
    const numero = getRandomNumber(1, 100);
    if(!arrayNumber.includes(numero)) arrayNumber.push(numero);
  }
  return arrayNumber;
}

//Funzione per inserire i numeri
function inserisciNumeri(){
  let arrNumberInseriti = [];  

  for (let i = 0; i < 5; i++){
    let remeberNumber = prompt('Inserisci, uno alla volta, i numeri che hai visualizzato.');
    arrNumberInseriti.push(remeberNumber);
  }
  console.log(arrNumberInseriti);
  return arrNumberInseriti;
} 

//Funzione per verificare i numeri esatti
function verifica(array1, array2){
  // guardo una carta alla volta della lista di sinistra finchè non sono finite
    // guardo se nella lista di destra c'è  questa carta
      // se c'è
        // la metto nella lista delle carte che ho trovato
        // ritorno a controllare le carte di sinistra
  // e riinizio da capo
  let numeriTrovati = [];
  for(let i = 0; i < array1.length; i++){
    
    if(array2.includes(array1[i])){
      numeriTrovati.push(array1[i]);
    }
  }
  console.log(numeriTrovati);
  return numeriTrovati;
}

//Funziona che genera numeri random unici
function getRandomNumber(min, max){
  let error = false;
  let errorMsg;
  if(isNaN(min) || isNaN(max)){
    error = true;
    errorMsg = 'min e max devono essere numeri';
  }
  if(error){
    console.error(errorMsg);
    return;
  }
  return Math.floor(Math.random()*(max - min + 1) + min);
}