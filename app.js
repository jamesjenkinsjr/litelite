//variables
const resetButton = document.querySelector('#reset');
const boxes = document.querySelectorAll('.box');
const gridSizeForm = document.querySelector('#grid-size');

//eventListeners
boxes.forEach(function(box, index){
    addEventListener('click', toggleRed);    
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
    console.log(e);
}