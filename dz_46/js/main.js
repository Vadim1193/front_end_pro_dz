
window.onload = function() {    
    const inputRange = document.querySelector('.input_range');
    // console.log(inputRange);
    const inputNumber = document.querySelector('.input_number');
    // console.log(inputNumber);
    const greenBlock = document.querySelector('.green_block');
    // console.log(greenBlock);
    const commissionBlock = document.querySelector('.comission');
    // console.log(commissionBlock);

    inputRange.addEventListener('input', () => {
        inputNumber.value = inputRange.value;
        greenBlock.style.height = inputRange.value + "px";

        let commissionValue;
        if (parseInt(inputRange.value) === 0) {
            commissionValue = 0;
        } else if(inputRange.value <= 20) {
            commissionValue = 2;
        } else if (inputRange.value >= 20 && inputRange.value < 50) {
            commissionValue = 4;
        } else if (inputRange.value >= 50 && inputRange.value < 75) {
            commissionValue = 6;
        } else if (inputRange.value >= 75 && inputRange.value <= 100) {
            commissionValue = 8;  
        }

        commissionBlock.style.height = commissionValue + "px";
        commissionBlock.style.bottom = greenBlock.clientHeight + "px";
    }) 
        
    inputNumber.oninput = function() {
        inputRange.value = inputNumber.value;
        // console.log(this.value);
    }
};



