function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
  }
  
  function getTextFieldValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;

    
  }

  // History button





  const historyTab = document.getElementById("history-tab").addEventListener("click", function(){
     const historyPage = document.getElementById("history-section");
    historyPage.classList.remove("hidden");
   
    const historyBtnStyle = document.getElementById("history-tab");
            historyBtnStyle.classList.add("bg-primary", "font-bold");

    const donateSection = document.getElementById("card-section");
            donateSection.classList.add("hidden");

            const donateBtnStyle = document.getElementById("btn-donate");
            donateBtnStyle.classList.remove("bg-primary");
            donateBtnStyle.classList.add("border", "border-gray-300", "text-gray-600", "font-semibold");        
    console.log(historyPage)
});
const donationTab = document.getElementById('btn-donate');
donationTab.addEventListener("click", function () {
  donationTab.classList.remove("border", "border-gray-300", "text-gray-600", "font-semibold");
  donationTab.classList.add("bg-primary", "font-bold");

  const historyBtnStyle = document.getElementById("history-tab");
  historyBtnStyle.classList.remove("bg-primary", "font-bold");


  const donateSection = document.getElementById("card-section");
  donateSection.classList.remove("hidden");
  const historySection = document.getElementById("history-section");
  historySection.classList.add("hidden");
});