export default class View {
  constructor() {
    this.searchTab = document.querySelector('.search-tab');
    console.log(this.searchTab);
    this.autocompleteUl = document.querySelector('.autocomplete-ul');
    this.autocomplete = document.querySelector('.search-autocomplete');
    this.showSuggestion = '';
    this.delaySec = 300;
  }

  isSuggestionVal(suggestionValArr) {
    this.showSuggestion = '';
    const noSuggestion = 0;
    (suggestionValArr.length === noSuggestion) ? this.removeSuggestion(this.autocomplete, this.delaySec) : this.renderSuggestion(suggestionValArr)
  }

  removeSuggestion(autocomplete, delaySec) {
    setTimeout(() => autocomplete.classList.remove('search-autocomplete-show'), delaySec);
  }

  renderSuggestion(suggestionArr) {
    this.addSuggestion(suggestionArr);
    this.autocompleteUl.innerHTML = this.showSuggestion;
    this.delayRender(this.delaySec);
  }

  addSuggestion(suggestionArr) {
    suggestionArr.forEach(suggestion => {
      let keyword = suggestion.value.split(' ').join('+');
      this.showSuggestion += `
      <li class = "suggestion">
        <a class = "suggestionLink" href = "https://www.amazon.com/s?k=${keyword}&prefix=?&ref=${suggestion.refTag}">  
         ${suggestion.value}
        </a>
      </li>`
    });
  }

  delayRender(delaySec) {
    setTimeout(() => this.autocomplete.classList.add('search-autocomplete-show'), delaySec);
  }
}