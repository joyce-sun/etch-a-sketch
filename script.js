const grid = document.querySelector('.grid');
const changeGridSize = document.querySelector('.grid-size')

changeGridSize.addEventListener('click', () => {
    let size = prompt("Enter Grid Size (up to 100)")
    if (size > 100 || isNaN(size)) {
        window.alert("ERROR: Please choose a number up to 100")
    }
    else {
        clearGrid();
        createGrid(size);
    }
} )

function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < (size * size); i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add("gridElement");
        grid.appendChild(gridSquare);
    }
    drawOnGrid();

}

function drawOnGrid() {
    let boxes = document.querySelectorAll('.gridElement');
    let isClicked = false;

    grid.addEventListener('mousedown', e => {
        isClicked = true;
    })

    grid.addEventListener('mouseup', e => {
        if (isClicked === true) {
            isClicked = false;
        }
    })

    boxes.forEach((box) => {
        box.addEventListener('mousemove', () => {
            if (isClicked === true) {
                box.style.backgroundColor = 'black';
            }
        })
    })
}

function clearGrid() {
    grid.innerHTML = "";
}
