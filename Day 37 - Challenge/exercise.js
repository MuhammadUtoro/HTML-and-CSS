// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
console.dir(document.body);
console.dir(document.body.children[2].children[4]);

//    - Select the second button by using an "id"
console.dir(document.getElementById('add-blueBG'));

// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
const removeButton = document.body.children[2].children[4];
const addBlueBackgroundButton = document.getElementById('add-blueBG');

//    - Output the first button by using the variable in which it's stored
function getDir(){
    console.dir(removeButton);
};
removeButton.addEventListener('click', getDir);

//    - Output the second button WITHOUT using the variable in which it's stored
function getDirWithoutVar(event) {
    console.dir(event.target);
};
addBlueBackgroundButton.addEventListener('click', getDirWithoutVar);

// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
let firstPar = document.body.children[2].children[1];
let secondPar = document.body.children[2].children[2];
let thirdPar = document.body.children[2].children[3];
// console.dir(firstPar);

//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!
// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
function removeParagraph(){
    // thirdPar.textContent = null;
    thirdPar.remove();
};
removeButton.addEventListener('click', removeParagraph);

//    - The second button changes the background color of the first paragraph to blue
function changeToBlue() {
    // firstPar.style.backgroundColor = 'blue';
    // firstPar.className = 'blue-BG';
    firstPar.classList.add('blue-BG');
};
addBlueBackgroundButton.addEventListener('click', changeToBlue);

// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!

