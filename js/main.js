const $button = document.querySelector('#button');
const $resetButton = document.querySelector('#resetButton');
const $copyButton = document.querySelector('#copyButton');
const $income = document.querySelector('#income');
const $output = document.querySelector('#output');
const $container = document.querySelector('main');
const $verse = document.querySelector('.verse');

// input mask by Cleave
const cleave = new Cleave('.income', {
  numeral: true,
  numeralThousandsGroupStyle: 'thousand',
});

// Copy function
function copyToClipboard(text) {
  const dummy = document.createElement('input');
  document.body.appendChild(dummy);
  dummy.setAttribute('value', text);
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);
}

// Calc Function
function titheCalc() {
  const tithePercent = 0.1;
  const value = $income.value.replace(/,/g, '');
  const roundNumber = Number(value);
  const titheTotal = roundNumber * tithePercent;
  const total = titheTotal.toLocaleString('es-CO', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  const markdown = `
    <span>${verseText}</span><br><br>
    <a href="${verseLink}">${verseRef}</a>
  `;
  $output.innerHTML = total;
  $verse.innerHTML = markdown;
  copyToClipboard(total);
}

// Reset Function
function resetInput() {
  $income.value = '';
  $output.innerHTML = '';
  $verse.innerHTML = '';
}

// Bible API
const day = new Date().getDate(); // Get current date

// Fetch Data
fetch(
  `https://developers.youversionapi.com/1.0/verse_of_the_day/${day}?version_id=1`,
  {
    headers: {
      'X-YouVersion-Developer-Token': 'ChY3zDzH34aBkd42GfDl7i4rdXo',
      'Accept-Language': 'en',
      Accept: 'application/json',
    },
  }
)
  .then(response => response.json())
  .then(data => {
    // Get data
    verseText = data.verse.text;
    verseRef = data.verse.human_reference;
    verseLink = data.verse.url;

    // Calling titheCalc Function
    $button.addEventListener('click', titheCalc);
  });

// reset button
$resetButton.addEventListener('click', resetInput);
