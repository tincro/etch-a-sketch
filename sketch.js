const makeBoxes = (size=16) => {
    let boxSize = (960/size);
    let grid = size*size;

    let container = document.querySelector('#container');
    for(let i=1;i<=grid; i++){
        let square = document.createElement('div');
        square.className = 'box';
        square.style.height = boxSize;
        square.style.width = boxSize;
        square.addEventListener('mouseover', function(){
            square.classList.add('draw');
        })
        container.appendChild(square);
    }
}

const reset = () => {
    let size = prompt("Enter board size: EX. 16 will grid 16x16 squares");
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(function(div){
        container.removeChild(div);
    });

    makeBoxes(parseInt(size));
}

// Set up the board
makeBoxes();

let btn = document.querySelector('#btn')
btn.addEventListener('click', reset);