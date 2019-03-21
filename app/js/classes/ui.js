export class Ui {
  constructor() {
    this.verse = document.querySelector('verse');
    this.button = document.querySelector('#button');
    this.resetButton = document.querySelector('#resetButton');
    this.copyButton = document.querySelector('#copyButton');
    this.income = document.querySelector('#income');
    this.output = document.querySelector('#output');
    this.container = document.querySelector('main');
    this.verse = document.querySelector('.verse');
  }

  renderVerse(bible) {
    const markup = `
      <span>${bible.verse.text}</span><br><br>
      <a href="${bible.verse.url}">${bible.verse.human_reference}</a>

    `;
    this.verse.innerHTML = markup;
  }
}
