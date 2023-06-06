
class Hamburger {

    static SIZE_SMALL = { price: '50 tugrics', calories: 20 };
    static SIZE_BIG = { price: '100 tugrics', calories: 40 };

    static STUFFING_CHEESE = { price: '10 tugrics', calories: 20};
    static STUFFING_LETTUCE = { price: '20 tugrics', calories: 5};
    static STUFFING_POTATO = { price: '15 tugrics', calories: 10};

    static TOPPING_SAUCE = { price: '15 tugrics', calories: 0};
    static TOPPING_MAYO = { price: '20 tugrics', calories: 5};
    
    toppingForHamb = [];

    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
    }

    addTopping(topping) {
        this.toppingForHamb.push(topping);
    }

    calcCalories() {
        let allCalories = this.size.calories + this.stuffing.calories;

        this.toppingForHamb.forEach(topping => {
            allCalories += topping.calories;
        });

        console.log(`Calories: ${allCalories}`);
        return allCalories;
    }

    calcPrice() {
        let hambPrice = parseInt(this.size.price) + parseInt(this.stuffing.price);

        this.toppingForHamb.forEach(topping => {
            hambPrice += parseInt(topping.price);
        });

        return hambPrice;
    }
};

console.dir(Hamburger);

// великий гамбургер з начинкою з сиру
const myBigHamburger = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_CHEESE);
console.log(myBigHamburger);

// запитаємо скільки там калорій
myBigHamburger.calcCalories();

// добавка з майонезу
myBigHamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо а скільки там зараз калорій
myBigHamburger.calcCalories();

// скільки коштує
console.log('Price:', myBigHamburger.calcPrice());

// я тут передумав і вирішив додати ще приправу
myBigHamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А скільки тепер коштує?
console.log('Price with sauce:', myBigHamburger.calcPrice());

// добавимо картоплi
myBigHamburger.addTopping(Hamburger.STUFFING_POTATO);

// та запитаємо скільки там калорій
myBigHamburger.calcCalories();

// та дiзнаемось цiну
console.log('Price:', myBigHamburger.calcPrice());

















