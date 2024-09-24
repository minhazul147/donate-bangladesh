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


        
        // show the modal
        const modal = document.getElementById("my_modal_1");

        function openModal() {
            modal.showModal();
        }
        openModal();

        function closeModal() {
            modal.close();
        }
        closeModal;

        // History button

        const div = document.createElement("div");
        div.classList.add("border");
        div.classList.add("p-5", "mb-5", "rounded-lg");
        div.innerHTML = `
                         <p class="text-lg font-medium">${inputNumber} Taka is
                            Donated For ${title}</p>
                         <p class = "text-xs"> Date: ${new Date()}</p>
                            `;
        document.getElementById("history-section").appendChild(div);
    

        document.getElementById("history-tab").addEventListener("click", function () {
            const historyBtnStyle = document.getElementById("history-tab");
            historyBtnStyle.classList.add("bg-primary", "font-bold");
          
            const historySection = document.getElementById("history-section");
            historySection.classList.remove("hidden");
          
            const donateSection = document.getElementById("card-section");
            donateSection.classList.add("hidden");
          
            const donateBtnStyle = document.getElementById("btn-donate");
            donateBtnStyle.classList.remove("bg-primary");
            donateBtnStyle.classList.add("border", "border-gray-300", "text-gray-600", "font-semibold");
          });


    });

