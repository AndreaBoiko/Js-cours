//1.
let a = 1;
let b = 2;
let c = 3;

let isTrue = function (a, b, c) {
  if (a < b && b < c) {
    return console.log(true);
  } else {
    return console.log(false);
  }
};

isTrue(a, b, c);

//2.

let x = 1;
let y = 2;

let res1 = x + '' + y// Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = x = 'true' + y // Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = x < y// Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = (x-1) / (y-2) // Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // ""number""

//3.

age = +prompt('Напишіть свій вік');

let isAdult = function (age){
    if (age >= 18){
        return console.log('Ви досягли повнолітнього віку');
    } else {
        return console.log('Ви ще надто молоді');
    }
}

isAdult(age);

//4. 

let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5]

let obj = {};
for (let i = 0; i < arr.length; i += 1 ){
    let num = arr[i];
    obj[num] = obj[num] ? obj[num] + 1 : 1;
}

let int = 0;
let data;
for (let num in obj){
    if (obj[num] > int){
        int = obj[num];
        data = num;
    }
}

console.log(typeof data);
data = parseInt(data);
console.log(typeof data);
let newArr = [];
for (let i = 0; i < arr.length; i++){
    if (arr[i] !== data){
        newArr.push(arr[i]);
    }
}

console.log(newArr);
console.log(data);

//5.

let side1 = +prompt('side of triangle 1');
let side2 = +prompt('side of triangle 2');
let side3 = +prompt('side of triangle 3');
if(side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1){
    let halfPerimeter = (side1 + side2 + side3) / 2;
    let triangleArea = Math.sqrt(halfPerimeter * (halfPerimeter - side1) * (halfPerimeter - side2) * (halfPerimeter - side3));
    let roundedTriangleArea = triangleArea.toFixed(3);
    console.log(`Triangle area: ${roundedTriangleArea} `);

    if (side1 * side1 + side2 * side2 === side3 * side3 || side2 * side2 + side3 * side3 === side1 * side1 || side1 * side1 + side3 * side3 === side2 * side2) {
        console.log("Це прямокутний трикутник.");
      } else {
        console.log("Це не прямокутний трикутник.");
      }
} else {
    console.log('Incorrect data');
}

//6.

let now = new Date();
let hour = now.getHours();

if (hour >= 23 || hour < 5) {
  console.log("Доброї ночі");
} else if (hour >= 5 && hour < 11) {
  console.log("Доброго ранку");
} else if (hour >= 11 && hour < 17) {
  console.log("Доброго дня");
} else {
  console.log("Доброго вечора");
}

//6.2

switch (true) {
    case hour >= 23 || hour < 5:
      console.log("Доброї ночі");
      break;
    case hour >= 5 && hour < 11:
      console.log("Доброго ранку");
      break;
    case hour >= 11 && hour < 17:
      console.log("Доброго дня");
      break;
    default:
      console.log("Доброго вечора");
      break;
}