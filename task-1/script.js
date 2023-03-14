//2.
console.log('Boiko');

//3.

let a = 2;
let b = 3;
console.log(a, b);
a = b;
console.log(a, b);

//4.

const myObj = {
    string: 'String',
    number: 5,
    boolean: true,
    undefined: undefined,
    null: null
}

//5.

const isAdult = confirm('Are you adult?');
console.log(isAdult);

//6.

const myName = 'Andrii';
const mySurname = 'Boiko';
const jsGroup = true;
const yearOfBirth = 2000;
const familyStatus = null;
let isClever;

console.log(myName, mySurname, jsGroup, yearOfBirth, familyStatus, isClever);
console.log(typeof familyStatus, typeof isClever);

//7.

const login = prompt('Write your login please...');
const mail = prompt('Write your mail address...');
const password = prompt('Write your password...');

alert(`Dear User ${login}, your email is ${mail}, your password is ${password}`);


//8.

const secInMin = 60;
const minInHour = 60;
const hourInDay = 24;
const dayInMonth = 30;

const secInHour = secInMin * minInHour;
const secInDay = secInHour * hourInDay;
const secInMonth = secInDay * dayInMonth;

console.log(`Sec in a hour ${secInHour}... sec in a day ${secInDay}... sec in a month ${secInMonth}`);