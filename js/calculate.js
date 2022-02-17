calculateBtn.addEventListener("click", function () {
  let totalExpense =
    parseInt(rentCost.value) +
    parseInt(foodCost.value) +
    parseInt(clothingCost.value);
  document.getElementById("totalExpenses").innerText = totalExpense;
  let updatedBalance = parseInt(earning.value) - totalExpense;
  if (updatedBalance < 0) {
    alert("You are in danger! Your income is less than your Expenses");
  }

  document.getElementById("remainingBalance").innerText = updatedBalance;
});
