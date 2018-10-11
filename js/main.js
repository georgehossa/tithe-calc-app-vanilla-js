const $button = document.querySelector('#button');
const $income = document.querySelector('#income');
const $output = document.querySelector('#output');
const porcentaje = 0.10;


$button.addEventListener('click', () => {
  console.log($income.value * porcentaje);
})
