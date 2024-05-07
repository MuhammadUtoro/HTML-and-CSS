let myAge = 32;
let myName = 'Dio';
let myHobbies = [
    'Sports',
    'Reading',
    'Dota2'];
let userJobs = {
    title: 'Developer',
    place: 'Krefeld',
    salary: 50000
};

let totalAdultYears;

function calculateAdultYears(userAge) {
    return userAge - 18;
}

totalAdultYears = calculateAdultYears(myAge);
alert(totalAdultYears);