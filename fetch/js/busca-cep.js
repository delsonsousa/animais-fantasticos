const inputCep = document.querySelector("#cep");
const btnCep = document.querySelector('#btn-Cep');
const resultadoCep = document.querySelector('.resultado-cep');

btnCep.addEventListener('click', handleClick);

function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep);
}

function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(response => response.text())
  .then(body => {
    resultadoCep.innerText = body;
  })
}

const btcDisplay = document.querySelector('.btc')


function fetchBtc() {
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(btcJson => {
    btcDisplay.innerText = ('R$ ' + btcJson.BRL.buy).replace('.', ',');
  })
}

// setInterval(fetchBtc, 100);


fetchBtc();





