const grid = document.querySelector('.grid');

function createGrid(rows, cols) {
    grid.style.gridTemplateColumns = `repeat(${rows}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${cols}, 1fr)`

    for (let i = 0; i < (rows * cols); i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add("gridElement");
        grid.appendChild(gridSquare);
    }
}

createGrid(4,4)
