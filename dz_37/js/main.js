
function SuperMath() {
    this.check = function(obj) {

        if (obj.znak) {
            let answer = confirm(`Ви хочете виконати дiю '${obj.znak}' з числами ${obj.X} та ${obj.Y}?`);

            if (answer) {
                let result = this.calculation(obj.X, obj.Y, obj.znak);
                alert(`Результат: ${result}`);

            } else {
                let newValueObj = this.input();
                this.check(newValueObj);
            } 
        }   
        else {
            alert(`Ваш знак '${obj.znak}' некоректний`);
        }               
    }

    this.input = function() {
        let valueX = parseInt(prompt('Введiть число X:'));
        let valueY = parseInt(prompt('Введiть число Y:'));
        let valueZnak = prompt('Вкажiть знак, можливі варіанти: (+, -, /, *, %)');

        if(isNaN(valueX) || isNaN(valueY)) {
            alert('Вашi числа некоректнi');
        }

        return {X: valueX, Y: valueY, znak: valueZnak,};
    }

};

SuperMath.prototype.calculation = function(x, y, znak) {
    switch(znak) {
        case '+' :
            return x + y;
        case '-' :
            return x - y;
        case '/' :
            return x / y;
        case '*' :
            return x * y;
        case '%' :
            return x % y;
        default: 
            return null;
    }
};

let obj = { X: 12, Y: 3, znak: "/" };
let p = new SuperMath();
p.check(obj);

// console.dir(SuperMath.prototype);
// console.dir(p.check);
// console.dir(p.input);






// Створити ф-ю конструктор SuperMath.
// Додати до екземпляра метод - check(obj) та input, параметр obj якого має властивості X, Y, znak. Метод повинен підтвердити у користувача, 
// чи хоче він зробити дію znak c Х і У. Якщо хоче, зробити математичну дію znak (яка описана в прототипі), інакше - запитати введення нових 
// даних через метод-екземпляра input() який поверне новий obj .

// Приклад об'єкта: `obj = {X:12, Y:3, znak: “/”}`, можливі варіанти znak => `+ - / * %`.
// При введенні znak потрібно перевірити коректність введення на можливі математичні дії.

// p = new SuperMath();
// p.check(obj); // --> no p.input() -> 3 prompt -> рахує










