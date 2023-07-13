
const promiseObj = [
    {resValue: 0, rejValue: 0},
    {resValue: 1, rejValue: 2},
    {resValue: 3, rejValue: 4},
    {resValue: 5, rejValue: 6},
    {resValue: 7, rejValue: 8},
]
    
const resolver = (index) => {
    console.log(promiseObj[index].resValue, 'resValue');
    return Promise.resolve({value: promiseObj[index].resValue, index: ++index});
}
    
const rejecter = (index) => {
    console.log(promiseObj[index].rejValue, 'rejValue');
    return Promise.reject({value: promiseObj[index].rejValue, index: ++index});
}

//----------------------"0 1 3 6 8"

const myNewPromise = new Promise((resolve, reject) => {
    const flag = false;

    if(flag) {
        resolve({ index: 0 });
    } else {
        reject({ index: 0 });
    }
})

myNewPromise
    .then(
        ({index}) => { return resolver(index)},  
        ({index}) => { return rejecter(index)}    //спрацюе cb цей буде 0
    )

    .then(
        ({index}) => { return rejecter(index)},
        ({index}) => { return resolver(index)}  //спрацюе cb цей буде 1
    )

    .then(
        ({index}) => { return resolver(index)}, //спрацюе cb цей буде 3
        ({index}) => { return rejecter(index)}
    )
    
    .then(
        ({index}) => { return rejecter(index)}, //спрацюе cb цей буде 6
        ({index}) => { return resolver(index)}
    )

    .then(
        ({index}) => { return resolver(index)},
        ({index}) => { return rejecter(index)}  //спрацюе cb цей буде 8
    )
    .then(
        ({index}) => { return resolver(index)},
        () => { console.log('---End---')}
    )
;

//----------------------"0 2 3 6 7"

// const myPromise = new Promise((resolve, reject) => {
//     resolve({ index: 0 });
// })
    
// myPromise
//     .then(
//         ({index}) => { return resolver(index) },  //спрацюе cb цей буде 0
//         ({index}) => { return rejecter(index) }
//     )

//     .then(
//         ({index}) => { return rejecter(index) },   //спрацюе cb цей буде 2
//         ({index}) => { return resolver(index) }
//     )                               

//     .then(
//         ({index}) => { return rejecter(index) }, 
//         ({index}) => { return resolver(index) }  //спрацюе cb цей буде 3
//     )

//     .then(
//         ({index}) => { return rejecter(index) },   //спрацюе cb цей буде 6 
//         ({index}) => { return resolver(index) }
//     )

//     .then(
//         ({index}) => { return rejecter(index) },
//         ({index}) => { return resolver(index) }  //спрацюе cb цей буде 7
//     )
// ;




