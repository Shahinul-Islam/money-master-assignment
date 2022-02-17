calculateBtn.addEventListener("click", function () {
  let totalExpense =
    parseFloat(rentCost.value) +
    parseFloat(foodCost.value) +
    parseFloat(clothingCost.value);
  document.getElementById("totalExpenses").innerText = totalExpense;
  let updatedBalance = parseFloat(earning.value) - totalExpense;
  document.getElementById("remainingBalance").innerText = updatedBalance;
});

//savings

/* saveBtn.addEventListener("click", function () {
  let monthlySave =
    (parseFloat(savings.value) / 100) * parseFloat(earning.value);
  document.getElementById("savingAmount").innerText = monthlySave;

  let remainedMoney = totalExpense + monthlySave;
  document.getElementById("finalBalance").innerText = remainedMoney;
}); */
