// We want to listen to every keystrokes in the input
// Update the character entered

const productNameInputElement = document.getElementById('product-name');
const remainingCharsElement = document.getElementById('remaining-chars');
const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
    const enteredText = event.target.value;
    const enteredTextLength = enteredText.length;

    const remainingChars = maxAllowedChars - enteredTextLength;
    remainingCharsElement.textContent = remainingChars;
};

productNameInputElement.addEventListener('input', updateRemainingCharacters)