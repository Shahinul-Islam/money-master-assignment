saveBtn.addEventListener("click", function () {
  let monthlySave = Math.round(
    (parseInt(savings.value) / 100) * parseInt(earning.value)
  );
  let finalRemainedMoney =
    parseInt(earning.value) -
    (monthlySave +
      parseInt(rentCost.value) +
      parseInt(foodCost.value) +
      parseInt(clothingCost.value));

  if (finalRemainedMoney < 0) {
    alert("savings amount are invalid");
  }
  document.getElementById("savingAmount").innerText = monthlySave;
  document.getElementById("finalBalance").innerText = finalRemainedMoney;
});
