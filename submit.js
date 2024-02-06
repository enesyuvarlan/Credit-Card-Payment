// Submit
const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', e => {
    e.preventDefault();
    let cardNumber = document.getElementById('input-number').value;
    let cardHolder = document.getElementById('input-holder').value;
    let cardMonth = document.getElementById('input-month').value;
    let cardYear = document.getElementById('input-year').value;
    let cardCvv = document.getElementById('input-cvv').value;
    alert(`Card Number: ${cardNumber}
Card Holder: ${cardHolder}
Expiration Month: ${cardMonth}
Expiration Year: ${cardYear}
Card Cvv: ${cardCvv}`)
});