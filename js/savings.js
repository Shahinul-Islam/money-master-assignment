saveBtn.addEventListener("click", function () {
  let monthlySave =
    (parseFloat(savings.value) / 100) * parseFloat(earning.value);
  let finalRemainedMoney =
    parseFloat(earning.value) -
    (monthlySave +
      parseFloat(rentCost.value) +
      parseFloat(foodCost.value) +
      parseFloat(clothingCost.value));
  document.getElementById("savingAmount").innerText = monthlySave;
  document.getElementById("finalBalance").innerText = finalRemainedMoney;
});
