//1.

class Circle{
    constructor(x, y, radius){
        this._center = {x: x, y: y};
        this._radius = radius;
    }

    calcPerimeter() {
        return 2 * Math.PI * this._radius;
    }

     static circleObject(x, y, radius){
        return new Circle(x, y, radius);
    }

    isPointInside(x, y) {
        const formula = (x ** 2) + (y ** 2) - (this._radius ** 2)
        formula <= 0 ? console.log('this point inside') : console.log('this point outside');
    }

    toString() {
        return `Center: ${this._center.x} ${this._center.y}, radius: ${this._radius}`;
    } 
}

const circle = new Circle(5, 5, 10);
circle.isPointInside(2, 2);
console.log(circle.toString());

//2.

let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" 
}

const count = currentObj => Object.keys(currentObj).length;
console.log(count(mentor));

//3.

class Person{
    constructor(name, surname){
        this._name = name;
        this._surname = surname;
    }
    showFullName() {
        return `${this._name} ${this.surname}`
    }
}

class Student extends Person{
    constructor(name, surname, year){
        super(name, surname);
        this._year = year;
    }

    showFullName(midleName){
        return `${this._name} ${midleName} ${this._surname}`
    }

    showCourse(){
        try{
        const date = new Date();
        let course = date.getFullYear() - this._year;
        if(course < 1 || course > 6){
            throw new RangeError('Is not a student');
        }
        return course
     } catch(error) {
        console.error(error)
      }
    }
}

const stud1 = new Student("Petro", "Petrenko", 2019);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse());

//4.

const text = "safsflskhf;sajf'jasf;khakfha;slhfljagslfwaflia";

class Marker{
    constructor(color, inkQuality){
        this.color = color;
        this.inkQuality = inkQuality;
    }

    print(text){
       text.split('').forEach(char => {
        document.write(`<span style="color: ${this.color}; 
        opacity: ${this.inkQuality};">${char}</span>`);
        this.inkQuality =- 0.05;
       });
    }
} 

class RefillableMarker extends Marker{
    constructor(color, inkQuality){
        super(color, inkQuality);
    }

    print(text){
        text.split('').forEach(char => {
            while(this.inkQuality < 1){
                this.refill();
            }
         document.write(`<span style="color: ${this.color}; 
         opacity: ${this.inkQuality};">${char}</span>`);
         this.inkQuality =- 0.05;
        });
     }

     refill(){
        this.inkQuality =+ 0.05;
     }
}

let marker = new Marker("#ed6589", 0.8);
marker.print(text);
let marker1 = new Marker("12290d", 1);
marker1.print(text);
let refillableMarker = new RefillableMarker("12290d", 0.5);
refillableMarker.print(text);
let refillableMarker1 = new RefillableMarker("a2644f", 0.7);
refillableMarker.print(text);


//5.

class Worker {
    static workers = [];
    static addToWorkers(instance){
        this.workers.push(instance);
    }

    #experience = 1.2;

    constructor(fullName, dayRate, workingDays){
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        Worker.addToWorkers(this);
    }
    showSalary(){
        return this.dayRate * this.workingDays;
    }
    showSalaryWithExperience(){
        return this.showSalary() * this.#experience;
    }

    set setExp(value){
        this.#experience = value;
    }

    get showExp(){
        return this.#experience;
    }
    static sort(){
        let arr = this.workers.sort((a,b) => a.showSalaryWithExperience() - b.showSalaryWithExperience());
        arr.forEach(el => {
            console.log(`${el.fullName}: ${el.showSalaryWithExperience()}`);
        })
    }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName, worker1.showSalary());                 
console.log("New experience: " + worker1.showExp);
console.log(worker1.fullName, worker1.showSalaryWithExperience()); 
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
console.log(worker1.fullName, worker1.showSalaryWithExperience()); 

let worker2 = new Worker("Tom Tomson", 25, 25);
console.log(worker2.fullName, worker2.showSalary());                 
console.log("New experience: " + worker2.showExp);
console.log(worker2.fullName, worker2.showSalaryWithExperience()); 
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
console.log(worker2.fullName, worker2.showSalaryWithExperience()); 

let worker3 = new Worker("Andy Ander", 18, 15);
console.log(worker3.fullName, worker3.showSalary());                 
console.log("New experience: " + worker3.showExp);
console.log(worker3.fullName, worker3.showSalaryWithExperience()); 
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
console.log(worker3.fullName, worker3.showSalaryWithExperience()); 

Worker.sort();

