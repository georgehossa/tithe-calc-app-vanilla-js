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

async function getBible(book, chapter, verse){
  const response = await fetch(`https://try.readme.io/https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-01/passages/${book}.${chapter}.${verse}?content-type=json`, {
    "credentials":"omit",
    "headers":{
      "accept":"application/json",
      "api-key":"ca2b23cb70ae4f58b953aa799df78b3d",
      "content-type":"application/json"
    },
    "referrer":"https://docs.api.bible/v1.0/reference",
    "referrerPolicy":"no-referrer-when-downgrade",
    "body":null,
    "method":"GET",
    "mode":"cors"
  })
  const data = await response.json()
  return data
}
const verseData = getBible('GEN', 1, 1)

//Button take input value
$button.addEventListener('click', titheCalc)
//reset button
$resetButton.addEventListener('click', resetInput)
