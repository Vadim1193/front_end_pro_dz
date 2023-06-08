
const inputs = [...document.getElementsByClassName('my_input')];
// console.log(inputs);

const textareaForm = document.getElementById('all_info');
// console.log(textareaForm);

const myTime = 3000;

function renderInfoTextArea() {
    let inputsValue = [];
    // console.log(inputsValue);
    inputs.forEach(function(input) {
        if(input.value !== "") {
            inputsValue.push(input.value);
        }
    });
    textareaForm.value = inputsValue.join(',');
};

setInterval(renderInfoTextArea, myTime);
















