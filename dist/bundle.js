/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/amazon.css":
/*!************************!*\
  !*** ./src/amazon.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/carouselUI/css/carousel.css":
/*!*****************************************!*\
  !*** ./src/carouselUI/css/carousel.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/carouselUI/js/carousel.js":
/*!***************************************!*\
  !*** ./src/carouselUI/js/carousel.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Carousel; });
class Carousel {
  constructor(carouselArgs) {
    this.carouselSpeed = carouselArgs['carouselSpeed'];
    this.carouselUl = carouselArgs['carouselUl'];
    this.carouselScrollArrowR = carouselArgs['carouselScrollArrowR'];
    this.carouselScrollArrowL = carouselArgs['carouselScrollArrowL'];
    this.timeout = carouselArgs['timeout'];
    this.lastItem = carouselArgs['lastItem'];
    this.firstItem = carouselArgs['firstItem'];
    this.xValue = this.firstItem;
    this.moveR = carouselArgs['moveR'];
    this.moveL = carouselArgs['moveL'];
    this.initialVal = carouselArgs['initialVal'];
    this.autoMove;
    this.true = 1;
    this.false = 0;
    this.isPause = 0;
  }

  moveCarouselL() {
    this.carouselScrollArrowL.addEventListener('click', () => {
      this.moveVal(this.moveL, this.firstItem, this.lastItem);
      this.isPause++;
      this.stopInterval();
    });
  }

  moveCarouselR() {
    this.carouselScrollArrowR.addEventListener('click', () => {
      this.moveVal(this.moveR, this.lastItem, this.firstItem);
      this.isPause++;
      this.stopInterval();
    });
  }

  moveVal(xVal, startItem, endItem) {
    if (this.xValue === startItem) this.initialVal = endItem;
    this.xValue += xVal;
    this.carouselUl.style.transition = `all, ${this.carouselSpeed}ms`;
    this.carouselUl.style.transform = `translateX(${this.xValue}px)`;
  }

  getInfiniteCarousel() {
    this.carouselUl.addEventListener("transitionend", () => {
      if (this.xValue <= this.firstItem && this.xValue >= this.lastItem) return;
      else {
        this.xValue = this.initialVal;
        this.carouselUl.style.transform = `translateX(${this.xValue}px)`;
        this.carouselUl.style.transition = `none`;
      }
    });
  }

  moveAuto() {
    this.autoMove = setInterval(() => {
      this.moveVal(this.moveR, this.lastItem, this.firstItem);
    }, this.timeout);
  }

  stopInterval() {
    clearInterval(this.autoMove);
    if (this.isPause === this.true) {
      setTimeout(() => {
        this.isPause = this.false;
        this.moveAuto();
      }, this.timeout);
    }
  }

  init() {
    this.getInfiniteCarousel();
    this.moveCarouselL();
    this.moveCarouselR();
    this.moveAuto();
  }
}

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _planBarUI_js_planCardClickEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./planBarUI/js/planCardClickEvent.js */ "./src/planBarUI/js/planCardClickEvent.js");
/* harmony import */ var _planBarUI_js_planBarScrollEvent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./planBarUI/js/planBarScrollEvent.js */ "./src/planBarUI/js/planBarScrollEvent.js");
/* harmony import */ var _carouselUI_js_carousel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carouselUI/js/carousel.js */ "./src/carouselUI/js/carousel.js");
/* harmony import */ var _searchUI_Model_model_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searchUI/Model/model.js */ "./src/searchUI/Model/model.js");
/* harmony import */ var _searchUI_View_view_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./searchUI/View/view.js */ "./src/searchUI/View/view.js");
/* harmony import */ var _searchUI_Controller_controller_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./searchUI/Controller/controller.js */ "./src/searchUI/Controller/controller.js");







const planBar = document.querySelector(".nav-plan-bar");
const planCard = document.querySelector(".plan-card");
const logoArrow = document.querySelector(".logo-arrow");
const closeBtn = document.querySelector(".close");
const closeArrow = document.querySelector(".arrow-img");

const planBarScrollEvent = new _planBarUI_js_planBarScrollEvent_js__WEBPACK_IMPORTED_MODULE_1__["default"](planBar);
const planCardClickEvent = new _planBarUI_js_planCardClickEvent_js__WEBPACK_IMPORTED_MODULE_0__["default"](
  planCard,
  logoArrow,
  closeBtn,
  closeArrow
);

const carousel = new _carouselUI_js_carousel_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
  carouselSpeed: 93,
  timeout: 3000,
  lastItem: -1120,
  firstItem: -280,
  moveR: -280,
  moveL: 280,
  initialVal: 0,
  carouselUl: document.querySelector(".carousel-ul"),
  carouselScrollArrowR: document.querySelector(".scroll-right"),
  carouselScrollArrowL: document.querySelector(".scroll-left")
});

document.addEventListener("DOMContentLoaded", () => {
  planBarScrollEvent.showPlanBar();
  planCardClickEvent.openPlanCard();
  planCardClickEvent.closePlanCard();
  carousel.init();
  const model = new _searchUI_Model_model_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
  const view = new _searchUI_View_view_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
  new _searchUI_Controller_controller_js__WEBPACK_IMPORTED_MODULE_5__["default"](view, model, {
    search: document.querySelector(".search-tab"),
    suggestions: document.querySelector(".autocomplete-ul"),
    form: document.querySelector("#searchbar_form")
  });

  getAjax();
  console.log("loaded!!");
});

function getAjax() {
  let ourRequest = new XMLHttpRequest();
  ourRequest.open("GET", "./json.txt");
  ourRequest.addEventListener("load", () => {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      let ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
    } else {
      console.log("We connected to the server, but it returned an error.");
    }
  });
  ourRequest.send();

  function renderHTML(data) {
    const items = data.map(item => {
      return `<li class="carousel-li">
                                  <img src="${item.imgurl}">
                                </li>`;
    });
    document.querySelector(".carousel-ul").innerHTML = items.join("");
  }
}


/***/ }),

/***/ "./src/planBarUI/js/planBarScrollEvent.js":
/*!************************************************!*\
  !*** ./src/planBarUI/js/planBarScrollEvent.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlanBarScrollEvent; });
class PlanBarScrollEvent {
  constructor(planBar) {
    this.planBar = planBar;
  }

  showPlanBar() {
    window.addEventListener('scroll', function () {
      if (window.scrollY >= 100) this.planBar.classList.add('shown');
      else this.planBar.classList.remove('shown');
    }.bind(this));
  }
}

/***/ }),

/***/ "./src/planBarUI/js/planCardClickEvent.js":
/*!************************************************!*\
  !*** ./src/planBarUI/js/planCardClickEvent.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlanCardClickEvent; });
class PlanCardClickEvent {
  constructor(planCard, logoArrow, closeBtn, closeArrow) {
    this.planCard = planCard;
    this.logoArrow = logoArrow;
    this.closeBtn = closeBtn;
    this.closeArrow = closeArrow;
  }

  openPlanCard() {
    this.logoArrow.addEventListener("click", function () {
      this.planCard.classList.add("plan-card-open");
    }.bind(this));
  }

  closePlanCard() {
    this.closeBtn.addEventListener("click", function () {
      this.planCard.classList.remove("plan-card-open");
    }.bind(this));

    this.closeArrow.addEventListener("click", function () {
      this.planCard.classList.remove("plan-card-open");
    }.bind(this));
  }
}


/***/ }),

/***/ "./src/searchUI/Controller/controller.js":
/*!***********************************************!*\
  !*** ./src/searchUI/Controller/controller.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Controller; });
class Controller {
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
      this.getKeyWordBackground(suggestionVal, keywordNodeLs, this.minIdx, this.idx - 1);
    }

    else if (e.code === 'ArrowDown' && (this.idx === this.maxIdx || this.idx === this.removeHover)) {
      this.getKeyWordTransparent(keywordNodeLs, suggestionVal, this.maxIdx)
      this.idx = this.initIdx;
    }

    else if (e.code === 'ArrowUp' && this.idx > this.minIdx) {
      this.idx--;
      this.getKeyWordBackground(suggestionVal, keywordNodeLs, this.maxIdx, this.idx + 1);
    }

    else if (e.code === 'ArrowUp' && this.idx === this.minIdx) {
      this.getKeyWordTransparent(keywordNodeLs, suggestionVal, this.minIdx)
      this.idx = this.removeHover;
    }

    this.getKeyWordUrl();
  }

  getKeyWordBackground(suggestionVal, keywordNodeLs, MinOrMaxIdx, nextOrPrevIdx) {
    keywordNodeLs[this.idx] ?
      [this.optionObj.search.value, suggestionVal[this.idx].style.background] = [keywordNodeLs[this.idx].text.trim(), `#eee`] : null;
    keywordNodeLs[this.idx] && (this.idx !== MinOrMaxIdx) ?
      suggestionVal[nextOrPrevIdx].style.background = `transparent` : null;
  }

  getKeyWordTransparent(keywordNodeLs, suggestionVal, MinOrMaxIdx) {
    keywordNodeLs[this.idx] ? suggestionVal[MinOrMaxIdx].style.background = `transparent` : null;
  }

  getKeyWordUrl() {
    let keyword = this.optionObj.search.value.split(' ').join('+');
    let searchUrl = `https://www.amazon.com/s?k=${keyword}`;
    document.getElementById('searchbar_form').action = searchUrl;
  }
}

/***/ }),

/***/ "./src/searchUI/Model/model.js":
/*!*************************************!*\
  !*** ./src/searchUI/Model/model.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Model; });
class Model {
  constructor(data) {
    this.data = data
  }

  fetchData(responseUrl) {
    const fetchVal = fetch(responseUrl)
      .then(res => res.json())
      .then(data => {
        return data.suggestions;
      })
    return fetchVal;
  }

  getSuggestionVal(suggestionArr) {
    const suggestionValArr = suggestionArr.map(suggestion => {
      return suggestion.value;
    });
    return suggestionValArr;
  }
}

/***/ }),

/***/ "./src/searchUI/View/view.js":
/*!***********************************!*\
  !*** ./src/searchUI/View/view.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View; });
class View {
  constructor() {
    this.searchTab = document.querySelector('.search-tab');
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

/***/ }),

/***/ "./src/searchUI/style/autocomplete.css":
/*!*********************************************!*\
  !*** ./src/searchUI/style/autocomplete.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!********************************************************************************************************************!*\
  !*** multi ./src/main.js ./src/amazon.css ./src/carouselUI/css/carousel.css ./src/searchUI/style/autocomplete.css ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/main.js */"./src/main.js");
__webpack_require__(/*! ./src/amazon.css */"./src/amazon.css");
__webpack_require__(/*! ./src/carouselUI/css/carousel.css */"./src/carouselUI/css/carousel.css");
module.exports = __webpack_require__(/*! ./src/searchUI/style/autocomplete.css */"./src/searchUI/style/autocomplete.css");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map