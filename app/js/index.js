// import '@babel/polyfill';
import '../scss/main.scss';
import Cleave from './lib/cleave';

const { Bible } = require('./classes/Bible');
const { Ui } = require('./classes/ui');

const day = new Date().getDate(); // Get current date

const bible = new Bible(day);
const ui = new Ui();

const $button = document.querySelector('#button');
const $resetButton = document.querySelector('#resetButton');
const $copyButton = document.querySelector('#copyButton');
const $income = document.querySelector('#income');
const $output = document.querySelector('#output');
const $container = document.querySelector('main');
const $verse = document.querySelector('.verse');

// input mask by Cleave
// eslint-disable-next-line no-undef
/* const cleave = new Cleave('.income', {
  numeral: true,
  numeralThousandsGroupStyle: 'thousand',
}); */

// Copy function
function copyToClipboard(text) {
  const dummy = document.createElement('input');
  document.body.appendChild(dummy);
  dummy.setAttribute('value', text);
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);
}

// Bible API
async function getBibleVerse() {
  const data = await bible.getVerse(day);
  ui.renderVerse(data);
}

// Calc Function
async function titheCalc() {
  const tithePercent = 0.1;
  const value = $income.value.replace(/,/g, '');
  const roundNumber = Number(value);
  const titheTotal = roundNumber * tithePercent;
  const total = titheTotal.toLocaleString('es-CO', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  $output.innerHTML = total;
  await getBibleVerse();
}

// Reset Function
function resetInput() {
  $income.value = '';
  $output.innerHTML = '';
  $verse.innerHTML = '';
}

// Calling titheCalc Function
$button.addEventListener('click', titheCalc);
// reset button
$resetButton.addEventListener('click', resetInput);
