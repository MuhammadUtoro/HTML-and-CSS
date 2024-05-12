// for-loop
for (let i = 0; i < 10; i++) {
    console.log('This is loop number ' + (i));
    console.log(i)
};

// for-of-loop
const users = ['Dio', 'Tom', 'Kerry', 'Dave'];

for (const user of users) {
    console.log(user);
};

// using for-loop for array
for (let i= 0; i < users.length; i++) {
    console.log(users[i]);
};

// for-in-loop
const loggedInUser = {
    name: 'Max',
    age: '43',
    isAdmin: true
};

for (const key in loggedInUser) {
    console.log(key);
    console.log(loggedInUser[key]);
};

// while-loop
let isFinished = false;

while (!isFinished) {
    isFinished = confirm('Do you want to quit?');
};

console.log('Terminated!')