const grid = document.querySelector('.grid');
const changeGridSize = document.querySelector('.grid-size')

changeGridSize.addEventListener('click', () => {
    alert("Enter Grid Size")
} )

function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < (size * size); i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add("gridElement");
        grid.appendChild(gridSquare);
    }
}

function drawOnGrid() {
    let boxes = document.querySelectorAll('.gridElement');

    boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'black';
        })
    })

}

createGrid(16)
drawOnGrid()
