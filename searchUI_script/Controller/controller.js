export default class Controller {
  constructor(view, model, optionObj) {
    this.view = view;
    this.model = model;
    this.optionObj = optionObj;
    this.initIdx = -1;
    this.maxIdx = 10;
    this.minIdx = 0;
    this.idx = this.initIdx;
    this.removeHover = 11;
    this.addEvent();
  }

  addEvent() {
    this.optionObj.search.addEventListener('input', this.getFetchData.bind(this));
    this.optionObj.search.addEventListener('keydown', this.handler.bind(this));
    this.autocomplete = document.querySelector('.search-autocomplete');
    this.optionObj.search.addEventListener('blur', this.view.removeSuggestion.bind(this, this.autocomplete, this.view.delaySec));
  }

  getFetchData(event) {
    const inputVal = event.target.value;
    const responseUrl = `https://completion.amazon.com/api/2017/suggestions?session-id=146-2216035-3218645&customer-id=&request-id=DV2W3G68C9YMG9FR19CF&page-type=PrimeLandingPageHorizonte&lop=en_US&site-variant=desktop&client-info=amazon-search-ui&mid=ATVPDKIKX0DER&alias=aps&b2b=0&fresh=0&ks=73&prefix=${inputVal}&event=onKeyPress&limit=11&fb=1&suggestion-type=KEYWORD&_=1551712792496`;
    this.model.fetchData(responseUrl)
      .then(suggestionArr => this.showSuggestionVal(suggestionArr));
  }

  showSuggestionVal(suggestionArr) {
    this.view.isSuggestionVal(suggestionArr);
  }

  handler(e) {
    let suggestionVal = document.querySelectorAll('.suggestion');
    let keywordNodeLs = document.querySelectorAll('.suggestion > a');

    if (e.code === 'ArrowDown' && this.idx < this.maxIdx) {
      this.idx++;
      keywordNodeLs[this.idx] ? [this.optionObj.search.value, suggestionVal[this.idx].style.background] = [keywordNodeLs[this.idx].text.trim(), `#eee`] : null;
      keywordNodeLs[this.idx] && (this.idx !== this.minIdx) ? suggestionVal[this.idx - 1].style.background = `transparent` : null;
    }

    else if (e.code === 'ArrowDown' && (this.idx === this.maxIdx || this.idx === this.removeHover)) {
      keywordNodeLs[this.idx] ? suggestionVal[this.maxIdx].style.background = `transparent` : null;
      this.idx = this.initIdx;
    }

    else if (e.code === 'ArrowUp' && this.idx > this.minIdx) {
      this.idx--;
      keywordNodeLs[this.idx] ? [this.optionObj.search.value, suggestionVal[this.idx].style.background] = [keywordNodeLs[this.idx].text.trim(), `#eee`] : null;
      keywordNodeLs[this.idx] && (this.idx !== this.maxIdx) ? suggestionVal[this.idx + 1].style.background = `transparent` : null;
    }

    else if (e.code === 'ArrowUp' && this.idx === this.minIdx) {
      keywordNodeLs[this.idx] ? suggestionVal[this.minIdx].style.background = `transparent` : null;
      this.idx = this.removeHover;
    }
    let keyword = this.optionObj.search.value.split(' ').join('+');
    let searchUrl = `s?k=${keyword}`;
    document.getElementById('searchbar_form').base = 'https://www.amazon.com';
    document.getElementById('searchbar_form').action = searchUrl; 
  }
}