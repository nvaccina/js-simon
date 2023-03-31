const playBtn = document.getElementById('play');
const message = document.querySelector('h1');

const NUM_MAX = 5;
let arrayNumeri = [];


//AZIONE AL PLAY
playBtn.addEventListener('click', play);

//funzione play
function play() {
  console.log('PLAY');
  arrayNumeri = generatenumber();
  message.innerHTML = `${arrayNumeri}` 
  console.log(arrayNumeri);
}

//genero 5 numeri
function generatenumber() {
  const arrayNumeri = [];
  while(arrayNumeri.length < NUM_MAX){
    const numero = getRandomNumber(1, 10);
    if(!arrayNumeri.includes(numero)) arrayNumeri.push(numero);
  }
  return arrayNumeri;
}

//genero numeri random
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
