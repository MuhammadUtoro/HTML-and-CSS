// We want to listen to every keystrokes in the input
// Update the character entered

let productNameInputElement = document.getElementById('product-name');
let remainingCharsElement = document.getElementById('remaining-chars');
let maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;

    let remainingChars = maxAllowedChars - enteredTextLength;
    remainingCharsElement.textContent = remainingChars;
};

productNameInputElement.addEventListener('input', updateRemainingCharacters)