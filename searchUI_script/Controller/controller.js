export default class Controller {
  constructor(view, model, optionObj) {
    this.view = view;
    this.model = model;
    this.optionObj = optionObj;
    this.count = -1;
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
    let li = document.querySelectorAll('.suggestion');
    let liArr = [];
    // for (var el of li) liArr.push(el.textContent.trim());
    console.log(this.count)
    if (e.code === 'ArrowDown' && this.count < 11) {
      this.count++;
      console.log('arr', li[this.count]);
      li[this.count].style.background = `#eee`;
    }

    else if (e.code === 'ArrowUp' && this.count >= 0) {
      this.count--;
      console.log('arr', li[this.count]);
    } else { this.count = -1 }
  }
}