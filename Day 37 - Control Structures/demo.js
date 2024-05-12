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

    if (remainingChars === 0) {
        remainingCharsElement.classList.add('error');
        productNameInputElement.classList.add('error');
    } else if (remainingChars <= 10) {
        remainingCharsElement.classList.add('warning');
        productNameInputElement.classList.add('warning');
        remainingCharsElement.classList.remove('error');
        productNameInputElement.classList.remove('error');       
    }
    else {
        remainingCharsElement.classList.remove('warning');
        productNameInputElement.classList.remove('warning');       
    }
};

productNameInputElement.addEventListener('input', updateRemainingCharacters)