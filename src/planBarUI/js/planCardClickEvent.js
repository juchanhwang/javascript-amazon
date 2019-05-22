export default class PlanCardClickEvent {
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
