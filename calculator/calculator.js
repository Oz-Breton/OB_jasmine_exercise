window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let initValues = {
    amount: 1000,
    years: 10,
    rate: 10
  }
  document.getElementById("loan-amount").value = initValues.amount;
  document.getElementById("loan-years").value = initValues.years;
  document.getElementById("loan-rate").value = initValues.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const values = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(values));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const P = values.amount;
  const i = (values.rate / 100)/12;
  const n = Math.floor(values.years*12);
  if (i === 0){
    return (P/n).toFixed(2);
  }

  const dividend = P * i;
  const divisor = 1 - Math.pow(1 + i, -n);
  let num = dividend / divisor;
  return num.toFixed(2);

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const payText = document.querySelector('#monthly-payment');
  payText.innerText = monthly;
}
