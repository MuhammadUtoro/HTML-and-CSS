// document.body.children[1].children[0].href = "https://google.com";

// console.log(document.body.firstChild);

// console.log(document.body.firstElementChild);

// console.log(document.body.children[0])

// console.log(document.body.children[1])

let anchorElement = document.getElementById('external-link');
anchorElement.href = 'https://google.com'

anchorElement = document.querySelector('p a');
anchorElement.href = 'https://academind.com'

// 3 steps to take when we create a new element with JS
// Add an element
// 1. Create the new element
let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://liquipedia.net';
newAnchorElement.textContent = 'Liquipedia webpage!'

// 2. Get access to the parent element that should hold the new element
let firstParagraph = document.querySelector('p');

// 3. Insert the new element into the parent element content
firstParagraph.append(newAnchorElement);

let newParagraph = document.createElement('p');
newParagraph.textContent = 'Hi I am a new paragraph created with JavaScript!';
h1Element = document.querySelector('h1');
bodyElement = h1Element.parentElement;
bodyElement.append(newParagraph);

// Removing elements - only 2 steps
// 1. Select the element
let firsth1Element = document.querySelector('h1');

// 2. Remove it!
firsth1Element.remove();
// firsth1Element.parentElement.removeChild(firsth1Element); // for older browser

// Move elements around
bodyElement.append(firstParagraph);

// Working with inner HTML
firstParagraph.innerHTML = 'I am <strong>Dio Utoro </strong>';