// First example: sum number calculator
// const calculateSumButtonElement = document.body.children[1].children[3]; //using drilling
const calculateSumButtonElement = document.querySelector('#calculator button'); //using query selector

function calculateSum(){
    const userNumberInputElement = document.getElementById('user-number');
    const enteredNumber = userNumberInputElement.value;

    let sumUpToNumber = 0;
    for (let i = 0; i <= enteredNumber; i++) {
        sumUpToNumber = sumUpToNumber+i;
    };

    const outputResultElement = document.getElementById('calculated-sum');

    outputResultElement.textContent = sumUpToNumber;
    outputResultElement.style.display = 'block';
};

calculateSumButtonElement.addEventListener('click', calculateSum);


// Second example: Higlighting anchor elements;
const highlightButtonElement = document.querySelector('#highlight-links button');
// console.dir(highlightButtonElement);

function highlightLinks() {
    const anchorElements = document.querySelectorAll('#highlight-links p a');
    console.log(anchorElements);
    for (anchorElement of anchorElements) {
        anchorElement.classList.add('highlight');
    }

}; 

highlightButtonElement.addEventListener('click', highlightLinks);

//Third example: Displaying user data
const dummyUserData = {
    firstName: 'Dio',
    lastName: 'Utoro',
    age: 33
};

const displayUserDataButtonElement = document.querySelector('#user-data button');

function displayUserData() {
    const outputDataElement = document.getElementById('output-user-data');
    outputDataElement.innerHTML = '';
    for (const key in dummyUserData) {
        const newUserDataListItemElement = document.createElement('li');
        const outputText = key.toUpperCase() + ': ' + dummyUserData[key];
        newUserDataListItemElement.textContent = outputText;
        outputDataElement.append(newUserDataListItemElement);
    };
};

displayUserDataButtonElement.addEventListener('click', displayUserData);

// Fourth example: Rolling the Dice - Statistics
const rollDiceButtonElement = document.querySelector('#statistics button');

function rollDice() {
    return Math.floor(Math.random() * 6) + 1; // returns value between 0 - 6
};

function deriveNumberOfDiceRolls() {
    const targetNumberInputElement = document.getElementById('user-target-number');
    const diceRollsListElement = document.getElementById('dice-rolls');

    const enteredNumber = targetNumberInputElement.value;
    diceRollsListElement.innerHTML = '';

    let hasRolledTargetNumber = false;
    let numberOfRolls = 0;

    while(!hasRolledTargetNumber) {
        const rolledNumber = rollDice();
        // if (rolledNumber == enteredNumber) {
        //     hasRolledTargetNumber = true;
        // };
        numberOfRolls++;
        const newRollListElement = document.createElement('li');
        const outputText = 'Roll ' + numberOfRolls + ': ' + rolledNumber;
        newRollListElement.textContent = outputText;
        diceRollsListElement.append(newRollListElement)
        hasRolledTargetNumber = rolledNumber == enteredNumber;
    };

    const outputTotalRollsElement = document.getElementById('output-total-rolls');
    const outputTargetNumberElement = document.getElementById('output-target-number');

    outputTargetNumberElement.textContent = enteredNumber;
    outputTotalRollsElement.textContent = numberOfRolls;
};

rollDiceButtonElement.addEventListener('click', deriveNumberOfDiceRolls);