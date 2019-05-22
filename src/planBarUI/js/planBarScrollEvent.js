export default class PlanBarScrollEvent {
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