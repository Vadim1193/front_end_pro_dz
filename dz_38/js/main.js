
class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
};

class Apartment {
    arrayResidents = [];

    addResident(people) {
        if (people instanceof Person) {
            this.arrayResidents.push(people);
        } else {
            console.error('Не є екземпляром класу Person');
        }
    }
};

class House {
    arrayApartments = [];
    maxQuantityApartments;

    constructor(maxQuantityApartments) {
        this.maxQuantityApartments = maxQuantityApartments;
    }

    addApartment(apartment) {
        if (this.arrayApartments.length < this.maxQuantityApartments) {
            this.arrayApartments.push(apartment);
        } else {
            console.warn('Досягнута максимальна кiлькicть');
        }
    }
};

//---------демонстрацiя 

const personOne = new Person('Tommy', 'man');             // декілька екземплярів класу Людина;
const personTwo = new Person('Sendi', 'woman');
const personThree = ('Roza');
const personFour = new Person('Ivan', 'man');

console.log(personOne);
console.log(personTwo);
console.log(personThree);
console.log(personFour);

const apartmentPersonOne = new Apartment();            // декілька екземплярів класу Квартира;
const apartmentPersonTwo = new Apartment();
const apartmentPersonThree = new Apartment();
const apartmentPersonFour = new Apartment();


apartmentPersonOne.addResident(personOne);   // додадити екземпляри класу Людина до екземплярів класу Квартира;
apartmentPersonTwo.addResident(personTwo);
apartmentPersonThree.addResident(personThree);
apartmentPersonFour.addResident(personFour);

console.log(apartmentPersonOne);
console.log(apartmentPersonTwo);
console.log(apartmentPersonThree);
console.log(apartmentPersonFour);

const iqHouse = new House(2);               // екземпляр класу Будинок;

iqHouse.addApartment(apartmentPersonOne);
iqHouse.addApartment(apartmentPersonTwo);
iqHouse.addApartment(apartmentPersonThree);
iqHouse.addApartment(apartmentPersonFour);          // додадити екземпляри класу Квартира до екземплярів класу Будинок.
console.log(iqHouse);






























