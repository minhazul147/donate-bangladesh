document
  .getElementById("donate-btn-noakhali")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const inputNumber = getInputFieldValueById("input-noakhali");
    const balance = getTextFieldValueById("account-balance");
    const title = document.getElementById("noakhali-title").innerText;

    if (inputNumber <= 0 || isNaN(inputNumber)) {
      alert("Please enter a valid number");
      return;
    }
    if (inputNumber > balance) {
      alert("Insufficient balance");
      return;
    }
    const totalBalance = balance - inputNumber;
    document.getElementById("account-balance").innerText = totalBalance;
    const donateAmount = parseFloat(
      document.getElementById("donate-result-show-noakhli").innerText
    );
    const totalDonateAmount = inputNumber + donateAmount;
    document.getElementById("donate-result-show-noakhli").innerText =
      totalDonateAmount;

    document.getElementById("input-noakhali").value = " ";
    alert("Congrats you are successfully Donate!");

 
  });