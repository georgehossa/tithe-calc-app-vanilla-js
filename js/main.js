const $button = document.querySelector('#button');
const $income = document.querySelector('#income');
const $output = document.querySelector('#output');
const tithePercent = 0.10;
//input mask


//Button take input value
$button.addEventListener('click', () => {
  //let roundNumber = $income.value.replace(',', '');
  $output.innerHTML = ($income.value * tithePercent);
  //console.log(roundNumber * tithe)
})
