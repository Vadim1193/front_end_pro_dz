
const inputs = [...document.getElementsByClassName('my_input')];
// console.log(inputs);

const textareaForm = document.getElementById('all_info');
// console.log(textareaForm);

const myTime = 3000;

function renderInfoTextArea() {
    let inputsValue = '';
    inputs.forEach(function(input) {
        if(input.value !== "") {
            inputsValue += input.value + ', ';
        }
    });
    textareaForm.value = inputsValue.slice(0, -2);
};

setInterval(renderInfoTextArea, myTime);
















