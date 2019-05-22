import PlanCardClickEvent from "./planBarUI/js/planCardClickEvent.js";
import PlanBarScrollEvent from "./planBarUI/js/planBarScrollEvent.js";
import Carousel from "./carouselUI/js/carousel.js";
import Model from "./searchUI_script/Model/model.js";
import View from "./searchUI_script/View/view.js";
import Controller from "./searchUI_script/Controller/controller.js";

const planBar = document.querySelector(".nav-plan-bar");
const planCard = document.querySelector(".plan-card");
const logoArrow = document.querySelector(".logo-arrow");
const closeBtn = document.querySelector(".close");
const closeArrow = document.querySelector(".arrow-img");

const planBarScrollEvent = new PlanBarScrollEvent(planBar);
const planCardClickEvent = new PlanCardClickEvent(
  planCard,
  logoArrow,
  closeBtn,
  closeArrow
);

const carousel = new Carousel({
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
  const model = new Model();
  const view = new View();
  new Controller(view, model, {
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
