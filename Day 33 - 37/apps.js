// Adding event listener to the paragraph - Click event
// when the click event occurs, the content changes

// Accessing the paragraph element
let parElement = document.querySelector('p');

// since event listener method can't take script/ text as argument, we need to create function so that it can be passed to the method

function changeParagraphText(event) {
    parElement.textContent = 'Clicked!!';
    console.log('It is clicked');
    console.log(event);
};

// Adding event listener using method
parElement.addEventListener('click', changeParagraphText);

// Creating input event listener
let inputElement = document.querySelector('input');

function retrieveUserInput(event) {
    // let enteredText = inputElement.value;
    let enteredText = event.target.value; // Using event object to retrieve value
    // let enteredText = event.data; // giving only the last value entered
    console.log(enteredText);
    console.log(event)
}

inputElement.addEventListener('input', retrieveUserInput);
