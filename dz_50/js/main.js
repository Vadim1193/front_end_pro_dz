
function onClickCountHandler() {

    const buttonFirstBlock = document.querySelector('.button_first_block');
    const buttonSecondBlock = document.querySelector('.button_second_block');
    const inputNumFirst = document.querySelector('.number_first');
    const inputNumSecond = document.querySelector('.number_second');

    function setValueNumber(button, input, key) { 
        button.onclick = () => {
            input.value++;
            addToStorage(key, input.value);
        }
    };

    const addToStorage = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    };

    const appendDataToFile = (key, input) => {
        const data = localStorage.getItem(key);
        if (data) {
          const parsedValue = JSON.parse(data);
          input.value = parsedValue;
        }
    };

    appendDataToFile('firstCounter', inputNumFirst);
    appendDataToFile('secondCounter', inputNumSecond);

    setValueNumber(buttonFirstBlock, inputNumFirst, 'firstCounter');
    setValueNumber(buttonSecondBlock, inputNumSecond, 'secondCounter');
    
    const clearButton = document.querySelector('.clear');
    clearButton.addEventListener('click', clearStorage);

    function clearStorage() {
        localStorage.clear();
        const inputs = [inputNumFirst, inputNumSecond];
        inputs.forEach((input => {
            input.value = "";
        }))
    }

    const buttonSet = document.querySelector('.button_set');

    const allBlocks = {
        firstBlock: {
            input: inputNumFirst,
            storageName: 'firstCounter',
        },

        secondBlock: {
            input: inputNumSecond,
            storageName: 'secondCounter',
        },
    }

    function setCounter() {
        const blockId = prompt('Вкажiть id блоку iз iснуючих: firstBlock або secondBlock');
        const currentBlock = allBlocks[blockId];

        if (currentBlock) {
            const valueNum = parseInt(prompt('Вжiть бажане значення лiчильника'));
            if (!isNaN(valueNum)) {
                currentBlock.input.value = valueNum;
                addToStorage(currentBlock.storageName, valueNum)
            } else {
                alert('Число не валiдне');
            }   
        } else {
            alert('Id не валiдне');
        }
    }
    buttonSet.addEventListener('click', setCounter);
}

window.onload = onClickCountHandler;

  



  