
function createNumbers() {    
    const tableElem = document.createElement('table');
    tableElem.classList.add('elem_table');
    const wrapperTab = document.querySelector('.wrapper_table');

    const condition = 10;
    let num = 1;

    for (let i = 0; i < condition; i++) {
        const row = document.createElement('tr');
    
        for (let j = 0; j < condition; j++) {
            const index = i * condition + j;
            setTimeout(() => {
                const cell = document.createElement('td');
                cell.classList.add('td');
                cell.innerText = num;
                row.append(cell);
                num++;
            }, index * 100);
        }
        tableElem.append(row);
    }
    wrapperTab.append(tableElem);
};

window.onload = createNumbers;








