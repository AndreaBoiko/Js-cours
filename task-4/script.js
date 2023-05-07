//1.

let arr = [1, 2, 3, 4, 5, 6, 7];
let first = +prompt('first');
let second = +prompt('second');

function sumSliceArray(arr, first, second){
    if(isNaN(first) || isNaN(second)){
        throw new Error('Is not a number, please input the number!')
    }

    if(first > arr.length || second > arr.length ){
        throw new Error('Your number is out of array!')
    }

    return arr[first] + arr[second];
}

try{
    const result = sumSliceArray(arr, first, second);
    alert(`${result}`);
} catch(error) {
    alert(`Error: ${error.message}`);
}

//2.

let name = prompt('Your name');
let age = +prompt('Your age');
let stat = prompt('Your status');

function checkAge(age, stat){
    
    if(age.trim() === ''){
        throw new Error('The field is empty! Please enter your age')
    }
    if(age < 18 || age > 70 ){
        throw new RangeError('Wrong age')
    }
    if(isNaN(age)){
        throw new TypeError('The field is empty! Please enter a number')
    }
    if(stat === 'admin' && stat === 'user' && stat === 'moderator'){
        throw new EvalError('Wrong status')
    }
    return 'Good viewing'
}

try{
    const check = checkAge(age, stat);
    alert(`${check}`)
} catch(error){
    alert(`Failed ${error.name}, ${error.message}`);
}

//3.
let width = +prompt('Enter width of triangle');
let height = +prompt('Enter height of triangle');

function calcRectangleArea(width, height){
    if(width === '' || height === ''){
        throw new Error('Please enter value')
    }
    if(isNaN(width) || isNaN(height)){
        throw new TypeError('Value not a number')
    }
    if(width === 0 || height === 0){
        throw new RangeError('Invalid value')
    }
    return 0.5*width*height;
}

try{
    const area = calcRectangleArea(width, height);
    alert(`${area}`);
} catch(error){
    alert(`Failed ${error.name}, ${error.message}`);
}

//4.

const month = +prompt('Enter month number');

class MonthException {
    constructor(message) {
        this.message = message;
        this.name = 'MonthException';
    }
}

function showMonthName(month){
    month = month - 1;
    let months = ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Set', 'Otb', 'Nov', 'Dic'];
    if(months[month] !== undefined){
        return months[month]
    } else {
        throw new MonthException('Incorrect month number'); 
    }
}

try{
    let monthName = showMonthName(month);
    alert(`${monthName}`)
} catch(error) {
    alert(`${error.name}, ${error.message} `)
}


//5.
const ids = [7, -12, 44, 22];

function showUser(id){
    if(id < 0){
        throw new Error('ID must not be negative:' + id)
    }
    return { id: id };
}

function showUsers(ids){
    let result = [];
    ids.forEach(function(id) {
        try{
            let person = showUser(id);
            result.push(person);
        } catch(error) {
            console.log(error.message);
        }
    });
    return result;
}

showUsers(ids);