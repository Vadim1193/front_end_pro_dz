
function onClickTableHandler() {
    const parentTable = document.querySelector('table');

    function createTextArea(originalText) {
        const textArea = document.createElement('textarea');
        textArea.value = originalText;
        return textArea;
    }
    
    function clickTableHandler(event) {
        const target = event.target;

        if (target.querySelector('textarea')) { 
          return;
        }
        const originalText = target.innerText;

        const textArea = createTextArea(originalText);
        const saveButton = createButton('Save', 'save');
        const cancelButton = createButton('Cancel', 'cancel');
        [textArea, saveButton, cancelButton].forEach(element => target.append(element));

        saveButton.addEventListener('mousedown', clickButtonHandler);
        cancelButton.addEventListener('mousedown', clickButtonHandler);
    }

    function createButton(text, action) {
        const button = document.createElement('button');
        button.innerText = text;
        button.dataset.action = action;
        return button;
    }

    const actions = {
        save(target) {
            const newText = target.querySelector('textarea').value;
            target.innerText = newText;
        },

        cancel(target, originalText) {
            target.innerText = originalText;
        },
    }

    function clickButtonHandler(event) {
        const { action } = event.target.dataset;
        const button = event.target;
        const target = button.parentElement;
        const originalText = target.querySelector('textarea').value;
      
        if (action && typeof actions[action] === 'function') {
          actions[action](target, originalText);
        }
    }
    parentTable.addEventListener('mousedown', clickTableHandler);               
}

window.onload = onClickTableHandler;



