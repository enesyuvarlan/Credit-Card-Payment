document.addEventListener("DOMContentLoaded", function () {
    const frontCard = document.getElementById("card-front");
    const backCard = document.getElementById("card-back");
    const button = document.getElementById("flip-button");

    let selectMonth = document.getElementById("input-month");
    let selectYear = document.getElementById("input-year");
    let numberInput = document.getElementById("input-number");
    let holderInput = document.getElementById("input-holder");

    let isFlipped = false;
    button.addEventListener("click", () => {
        if (!isFlipped) {
            frontCard.style.transform = "rotateY(180deg)";
            backCard.style.transform = "rotateY(0)";
            isFlipped = true;
        } else {
            frontCard.style.transform = "rotateY(0)";
            backCard.style.transform = "rotateY(-180deg)";
            isFlipped = false;
        }
    })
})