//variables
const resetButton = document.querySelector('#reset');
const boxes = document.querySelectorAll('.box');
const gridSizeForm = document.querySelector('#grid-size');
const main = document.querySelector('main');

//eventListeners
boxes.forEach(function(box, index){
    box.addEventListener('click', toggleRed);    
})
resetButton.addEventListener('click', resetBoard);
gridSizeForm.addEventListener('submit', changeGrid);

//functions

function toggleRed(e) {
    const element = e.target;
    element.classList.toggle('red');
}

function resetBoard(e) {
    boxes.forEach((box, index) => {
        box.classList.remove('red');
    });
}

function changeGrid(e) {
    e.preventDefault();
    const gridSizeValue = +gridSizeForm.querySelector('input:checked').value;
    const grid = makeGrid(gridSizeValue);
    main.innerHTML = '';
    grid.forEach((row) => {
        main.appendChild(row);
    });
    //set the main to grid
    
}

/** 
 * make the grid with class of row
 * make a div with class col-md-12 inside of row
 * make 6 divs with class of box inside of col-md-12
 * copy and paste 6 times
 * set the main to grid
 */

function makeGrid(size) {
    const rows = [];
    for(let i = 0; i < size; i += 1) {
        const row = document.createElement('div');
        row.classList.add('row');

        const column = document.createElement('div');
        column.classList.add('col-md-12');
        row.appendChild(column);

        for(let i = 0; i < size; i += 1) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.addEventListener('click', toggleRed);
            column.appendChild(box);
        }
        rows.push(row);
    }
    return rows;
}