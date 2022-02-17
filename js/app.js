let earning = document.getElementById("earning"); //gets earnings
earning.addEventListener("keyup", function (e) {
  if (isNaN(e.target.value) || e.target.value <= 0) {
    alert("enter positive number");
    document.getElementById("calculate-btn").classList.add("disabled");
  } else {
    document.getElementById("calculate-btn").classList.remove("disabled");
  }
}); //validation

//gets cost
let rentCost = document.getElementById("rentCost");
rentCost.addEventListener("keyup", function (e) {
  if (isNaN(e.target.value) || e.target.value <= 0) {
    alert("enter positive number");
    document.getElementById("calculate-btn").classList.add("disabled");
  } else {
    document.getElementById("calculate-btn").classList.remove("disabled");
  }
});

//validation
let foodCost = document.getElementById("foodCost");
foodCost.addEventListener("keyup", function (e) {
  if (isNaN(e.target.value) || e.target.value <= 0) {
    alert("enter positive number");
    document.getElementById("calculate-btn").classList.add("disabled");
  } else {
    document.getElementById("calculate-btn").classList.remove("disabled");
  }
});

//validation
let clothingCost = document.getElementById("clothingCost");
clothingCost.addEventListener("keyup", function (e) {
  if (isNaN(e.target.value) || e.target.value <= 0) {
    alert("enter positive number");
    document.getElementById("calculate-btn").classList.add("disabled");
  } else {
    document.getElementById("calculate-btn").classList.remove("disabled");
  }
});

//target calculate btn
let calculateBtn = document.getElementById("calculate-btn");

//gets savings value
let savings = document.getElementById("savings");
savings.addEventListener("keyup", function (e) {
  if (isNaN(e.target.value) || e.target.value <= 0) {
    alert("enter positive number");
    document.getElementById("savings-btn").classList.add("disabled");
  } else {
    document.getElementById("savings-btn").classList.remove("disabled");
  }
});

//target save button
let saveBtn = document.getElementById("savings-btn");

//calculate expenses
/* function sum() {
  let totalExpense =
    parseFloat(rentCost.value) +
    parseFloat(foodCost.value) +
    parseFloat(clothingCost.value);
  return totalExpense;
} */

//get remained money after expense
/* function substract() {
  let updatedBalance = parseFloat(earning.value) - totalExpense;
  return updatedBalance;
} */

//savings amount
/* function saingsAmount() {
  let monthlySave =
    (parseFloat(savings.value) / 100) * parseFloat(earning.value);
  return monthlySave;
} */

//remaining balance after all expense and savings
/* function remainingBalance() {
  let remainedMoney = updatedBalance - monthlySave;
  return remainedMoney;
} */
