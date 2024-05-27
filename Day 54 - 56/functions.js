function greetUser(greetingPrefix = 'Hi', userName = 'user') {
    // console.log(greetingPrefix + ' ' + userName + '!');
    console.log(`${greetingPrefix} ${userName}!`);
};

greetUser('Hello', 'Dio');

function sumUp(...numbers) {// ... is the rest parameters
    let result = 0;

    for (const number of numbers) {
        result += number;
    }

    return result;
};

const inputNumbers = [2,4,6,8,12];

//console.log(sumUp(1, 4, 6, 7, 10));
console.log(sumUp(...inputNumbers)); // ... is the spread operator

console.log(sumUp);
