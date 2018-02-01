//variables
const resetButton = document.querySelector('#reset');
const box = document.querySelector('.box');

//eventListeners
box.addEventListener('click', toggleRed);
resetButton.addEventListener('click', resetBoard)

//functions

function toggleRed(e) {
    const element = e.target;
    element.classList.toggle('red');
}

function resetBoard(e) {
    console.log('reset the board');
}