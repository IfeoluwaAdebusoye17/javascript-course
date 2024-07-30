let calculation = localStorage.getItem('storedCalc') || '';
document.querySelector('.js-calc-view').innerHTML = calculation

function updateCalculation(value) {
  calculation += value;
  //console.log(calculation);
  document.querySelector('.js-calc-view').innerHTML = calculation;

  localStorage.setItem('storedCalc', calculation);

}
