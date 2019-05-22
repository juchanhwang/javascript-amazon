export default class Carousel {
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