
// Використовуючи ланцюжок Promise згідно з таблицею (див вкладення).
// Організувати виведення в консоль такий порядок цифр "0 1 3 6 8", "0 2 3 6 7".
// Де 0 - це значення, яке виводиться в сallback - ф-ії яка передається в Promise.

const promiseObj = [
    {resValue: 0, rejValue: 0},
    {resValue: 1, rejValue: 2},
    {resValue: 3, rejValue: 4},
    {resValue: 5, rejValue: 6},
    {resValue: 7, rejValue: 8},
]
   
const myPromise = new Promise((resolve, reject) => {
    let flag = true; 

    if (flag) {
        resolve({ index: promiseObj[0].resValue });
    } else {
        reject({ index: promiseObj[0].rejValue });
    }
});
    
const resolver = (index) => {
    console.log(promiseObj[index].resValue, 'resValue');
    return Promise.resolve({value: promiseObj[index].resValue, index: ++index});
}
    
const rejecter = (index) => {
    console.log(promiseObj[index].rejValue, 'rejValue');
    return Promise.reject({value: promiseObj[index].rejValue, index: ++index});
}
    
// myPromise 
//     .then(({index}) => resolver(index))
//     .then(({index}) => resolver(index))
//     .then(({index}) => resolver(index))
    // .then(({index}) => rejecter(index))

    
myPromise 
    .then(({index}) => rejecter(index))
    .then(({index}) => rejecter(index))
    // .then(({index}) => resolver(index))
    // .then(({index}) => rejecter(index))
    // .then(({index}) => resolver(index))
