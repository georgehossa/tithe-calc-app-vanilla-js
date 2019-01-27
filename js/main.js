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
}
// Reset Function
function resetInput () {
  $income.value = '';
  $output.innerHTML = ('')
}

//Button take input value
$button.addEventListener('click', titheCalc)
//reset button
$resetButton.addEventListener('click', resetInput)
