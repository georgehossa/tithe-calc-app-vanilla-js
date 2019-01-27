const $button = document.querySelector('#button');
const $resetButton = document.querySelector('#resetButton');
const $income = document.querySelector('#income');
const $output = document.querySelector('#output');
const tithePercent = 0.10;
//input mask
var cleave = new Cleave('.income', {
  numeral: true,
  numeralThousandsGroupStyle: 'thousand'
});

//Calc Function
function titheCalc () {
  let value = $income.value.replace(/,/g, '')
  let roundNumber = Number(value)
  //$output.innerHTML = (roundNumber * tithePercent);
  let titheTotal = roundNumber * tithePercent
  $output.innerHTML = (titheTotal.toLocaleString('es-CO', {minimumFractionDigits: 0, maximumFractionDigits: 0 }));
};
// Reset Function
function resetInput () {
  $income.value = '';
  $output.innerHTML = ('')
};
// Fetch Bible API
async function API(url){
  const endpoint = 'https://gist.githubusercontent.com/jorgehossa/1fb82ea5b25bfeb1af979cd4ea8bc00b/raw/9eaeb436b6a0107ef35a1b770647369a5a33d87b/es_rves_rvr.json';
  const response = await fetch(endpoint)
}

//Button take input value
$button.addEventListener('click', titheCalc)
//reset button
$resetButton.addEventListener('click', resetInput)
