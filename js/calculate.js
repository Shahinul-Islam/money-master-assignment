calculateBtn.addEventListener("click", function () {
  let totalExpense =
    parseFloat(rentCost.value) +
    parseFloat(foodCost.value) +
    parseFloat(clothingCost.value);
  document.getElementById("totalExpenses").innerText = totalExpense;
  let updatedBalance = parseFloat(earning.value) - totalExpense;
  if (updatedBalance < 0) {
    alert("You are in danger!");
  }
  document.getElementById("remainingBalance").innerText = updatedBalance;
});
