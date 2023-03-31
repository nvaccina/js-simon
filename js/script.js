//element
const main = document.querySelector('main');
const playBtn = document.getElementById('play');
const message = document.querySelector('h1');
const contatore = document.querySelector('p');
const NUM_MAX = 5;
let arrayNumber = [];

let time;
let counter = 5;


// AZIONE CLICK BOTTONE
playBtn.addEventListener('click', () => {
  console.log('PLAY');
  arrayNumber = generatenumber();
 // arrayNumeri.classList.remove('hide')
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
    clearInterval(time);
    counter = 0;
    arrayNumber = generatenumber();
    for (let i = 0; i < arrayNumber; i++) {
      arrayNumber[i].classList.add('hide');
    }
    
    let remeberNumber = prompt('Inserisci, uno alla volta, i numeri che hai visualizzato.');
    contatore.innerHTML = remeberNumber;
  }, 5000);
}

// Funzione che stampa il valore del counter secondi nella pagina e decrementa il contatore
function printCounter(){
  contatore.innerHTML = `Hai rimasto solo ${counter} secondi per memorizzare i numeri`
  counter--;
}

//Funzione che genera i 5 numeri random
function generatenumber() {
  const arrayNumber = [];
  while(arrayNumber.length < NUM_MAX){
    const numero = getRandomNumber(1, 100);
    if(!arrayNumber.includes(numero)) arrayNumber.push(numero);
  }
  return arrayNumber;
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

