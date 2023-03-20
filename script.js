let COLOR = 'black';
const DEFAULT = 16;
const grid = document.querySelector('.grid');
const changeGridSize = document.querySelector('.grid-size')
const blackMode = document.querySelector('.black-mode')
const pinkMode = document.querySelector('.pink-mode')
const rbgMode = document.querySelector('.rainbow-mode')

blackMode.addEventListener('click', () => {
    COLOR = 'black';
})

pinkMode.addEventListener('click', () => {
    COLOR = '#e94196';
})

pinkMode.addEventListener('click', () => {
    let randomColor = randomRGB();
    COLOR = randomColor;
})



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
                box.style.backgroundColor = COLOR;
            }
        })
    })
}

function clearGrid() {
    grid.innerHTML = "";
}

function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}


createGrid(DEFAULT);
