
function onLoadHandler() {    
    const inputRange = document.querySelector('.input_range');
    const inputNumber = document.querySelector('.input_number');
    const greenBlock = document.querySelector('.green_block');
    const commissionBlock = document.querySelector('.comission');

    const onInputNumberHandler = () => {
        const inputValue = inputNumber.value;
        setValue(inputValue);
    }

    const oninputRangeHandler = () => {
        const rangeValue = inputRange.value;
        setValue(rangeValue);

        const commissionValue = getCommission(inputRange.value);
        priceScale(rangeValue, commissionValue);
    }

    inputNumber.addEventListener('input', onInputNumberHandler);
    inputRange.addEventListener('input', oninputRangeHandler);

    function priceScale(priceHeight, commissionHeight) {
        greenBlock.style.height = priceHeight + "px";
        commissionBlock.style.height = commissionHeight + "px";
        commissionBlock.style.bottom = greenBlock.clientHeight + "px";
    }

    function setValue(value) {
        inputNumber.value = value;
        inputRange.value = value; 
    }

    function getCommission(value) {
        if (parseInt(value) === 0) {
          return 0;
        } else if (value <= 20) {
          return 2;
        } else if (value < 50) {
          return 4;
        } else if (value < 75) {
          return 6;
        } else if (value <= 100) {
          return 8;
        }
    }
};

window.onload = onLoadHandler;


    







