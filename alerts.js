let alertBox = document.getElementById("alert");

// Card Number Format Check

function cardNumberFormat(input) {
    let inputValue = input.value.replace(/\s/g, '');
    let formattedValue = inputValue.replace(/(\d{4})/g, '$1 ').trim();
    input.value = formattedValue;

    const creditCardNumberRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/;
    const finalValue = inputValue.replace(/\s/g, '');

    input.addEventListener("blur", e => {
        if (/^\d+$/.test(finalValue) && creditCardNumberRegex.test(finalValue)) {
            alertBox.style.display = "none";
            alertBox.innerText = ' '
        } else {
            alertBox.style.display = 'flex';
            alertBox.innerText = 'Invalid Card Number!';
        }
    });
}

// Card Expirations Format Check
function checkSelection() {
    let selectMonth = document.getElementById("input-month");
    let selectYear = document.getElementById("input-year");
        if (selectMonth.value == "month" || selectYear.value == "year") {
            alertBox.style.display = 'flex';
            alertBox.innerText = 'Select The Expirations!';
        } else {
            alertBox.style.display = "none";
            alertBox.innerText = ' '
        }
}

// Card Holder Format Check
function holderNameFormat(input) {
    const nameRegex = /^[a-z\.]*\s?([a-z\-\']+\s)+[a-z\-\']+$/;

    input.addEventListener('blur', e => {
        if (nameRegex.test(input.value)) {
            alertBox.style.display = "none";
            alertBox.innerText = ' '
        } else {
            alertBox.style.display = 'flex';
            alertBox.innerText = 'Invalid Name!';
        }
    });
}