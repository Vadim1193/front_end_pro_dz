
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showPersonInfo() {
        console.log(`name: ${this.name}, age: ${this.age}`);
    }
};

class Car {
    constructor(brand, model, year, licensePlate, color) {
        this.brandCar = brand;
        this.modelCar = model;
        this.year = year;
        this.licensePlate = licensePlate;
        this.colorCar = color;
        this.owner;
    }

    newOwnerCar (person) {
        const minAge = 18;
        if(person instanceof Person) {
            if (person.age > minAge) {
                this.owner = person;
                console.log(`Added new owner ${person.name} for car ${this.brandCar} ${this.modelCar}`);
            } else {
                console.warn(`The owner must be at least ${minAge} years old.`);
            }
        } else {
            console.error('Invalid person.');
        }
    }

    showCarInfo() {
        console.log(`Car Information:
            Brand: ${this.brandCar}
            Model: ${this.modelCar}
            Year: ${this.year}
            License Plate: ${this.licensePlate}
            Color: ${this.colorCar}`
        );

        if(this.owner) {
            console.log('Information owner car:');
            this.owner.showPersonInfo();
        } else {
            console.warn('No owner')
        }
    }
};


//---------демонстрацiя 
                         
const userOne = new Person('Poul', 30);                      //декілька екземплярів класу Людина;
const userTwo = new Person('Bob', 10);
const userThree = new Person('Polina', 24);
// console.log(userOne);
userOne.showPersonInfo();
userTwo.showPersonInfo();
userThree.showPersonInfo();

const carOne = new Car('Ford', 'Fiesta', '2016', '3232F3', 'Green');       //декілька екземплярів класу Автомобіль;
const carTwo = new Car('Nissan', 'Rog', '2018', 'BD3435F4', 'Red');
const carThree = new Car('Audi', 'Q7', '2014', 'H7543JF', 'Black');

console.log(carOne);
console.log(carTwo);
console.log(carThree);

carOne.newOwnerCar(userOne);                      //присвоїв власникам автомобілi. 
carTwo.newOwnerCar(userTwo);
carThree.newOwnerCar(userThree);

carThree.showCarInfo();
carOne.showCarInfo();
carTwo.showCarInfo();
































