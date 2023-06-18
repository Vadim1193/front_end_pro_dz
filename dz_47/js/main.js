
function createTable() {   
    const wrapperTab = document.querySelector('.wrapper_table'); 
    const condition = 10;

    function getTableElem() {
        const tableElem = document.createElement('table');
        tableElem.classList.add('elem_table');
        return tableElem;
    }

    const createRow = () => document.createElement('tr');

    function createCell(num) {
        const cell = document.createElement('td');
        cell.classList.add('td');
        cell.innerText = num;
        return cell;
    } 

    function fillTable() {
        const myTable = getTableElem();
        const fragment = document.createDocumentFragment();
        let num = 1;

        for (let i = 0; i < condition; i++) {
            const row = createRow();

            for (let j = 0; j < condition; j++) {
                const cell = createCell(num);
                row.append(cell);
                num++;
            }
            fragment.append(row);
        }
        myTable.append(fragment);
        wrapperTab.append(myTable);
    }
    setTimeout(fillTable, 2000);
}

window.onload = createTable;


  