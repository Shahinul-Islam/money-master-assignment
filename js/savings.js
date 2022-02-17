saveBtn.addEventListener("click", function () {
  let monthlySave =
    (parseFloat(savings.value) / 100) * parseFloat(earning.value);
  document.getElementById("savingAmount").innerText = monthlySave;
});
