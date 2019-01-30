const $button = document.querySelector('#button');
const $resetButton = document.querySelector('#resetButton');
const $income = document.querySelector('#income');
const $output = document.querySelector('#output');
//input mask
var cleave = new Cleave('.income', {
  numeral: true,
  numeralThousandsGroupStyle: 'thousand'
});

//Calc Function
function titheCalc() {
  const tithePercent = 0.10;
  let value = $income.value.replace(/,/g, '')
  let roundNumber = Number(value)
  let titheTotal = roundNumber * tithePercent
  $output.innerHTML = (titheTotal.toLocaleString('es-CO', { minimumFractionDigits: 0, maximumFractionDigits: 0 }));
};
// Reset Function
function resetInput() {
  $income.value = '';
  $output.innerHTML = ('')
};

// Fetch Bible API
const verse = []

fetch('https://developers.youversionapi.com/1.0/verse_of_the_day/1?version_id=1', {
    headers: {
        'X-YouVersion-Developer-Token': 'ChY3zDzH34aBkd42GfDl7i4rdXo',
        'Accept-Language': 'es',
        Accept: 'application/json',
    }
})
.then((result) => result.json())
.then((json) => verse.push(json.verse))


//Button take input value
$button.addEventListener('click', titheCalc)
//reset button
$resetButton.addEventListener('click', resetInput)