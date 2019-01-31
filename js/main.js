const $button = document.querySelector("#button");
const $resetButton = document.querySelector("#resetButton");
const $income = document.querySelector("#income");
const $output = document.querySelector("#output");
const $container = document.querySelector("main");
const $verse = document.querySelector(".verse");

//input mask by Cleave
var cleave = new Cleave(".income", {
  numeral: true,
  numeralThousandsGroupStyle: "thousand"
});

//Calc Function
function titheCalc() {
  const tithePercent = 0.1;
  let value = $income.value.replace(/,/g, "");
  let roundNumber = Number(value);
  let titheTotal = roundNumber * tithePercent;
  const markdown = `
    <span>${verseText}</span><br><br>
    <a href="${verseLink}">${verseRef}</a>
  `;
  $output.innerHTML = titheTotal.toLocaleString("es-CO", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
  $verse.innerHTML = markdown;
}

function copyToClipboard(text){
  var dummy = document.createElement("input");
  document.body.appendChild(dummy);
  dummy.setAttribute('value', text);
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}


// Reset Function
function resetInput() {
  $income.value = "";
  $output.innerHTML = "";
  $verse.innerHTML = "";
}

// Bible API
const day = new Date().getDate(); // Get current date

// Fetch Data
fetch(
  `https://developers.youversionapi.com/1.0/verse_of_the_day/${day}?version_id=1`,
  {
    headers: {
      "X-YouVersion-Developer-Token": "ChY3zDzH34aBkd42GfDl7i4rdXo",
      "Accept-Language": "en",
      Accept: "application/json"
    }
  }
)
  .then(response => response.json())
  .then(data => {
    // Get data
    verseText = data.verse.text;
    verseRef = data.verse.human_reference;
    verseLink = data.verse.url;

    // Calling titheCalc Function
    $button.addEventListener("click", titheCalc);
  });

//reset button
$resetButton.addEventListener("click", resetInput);
