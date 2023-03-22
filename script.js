let COLOR = 'black';
let MODE = '';
const DEFAULT = 16;
const grid = document.querySelector('.grid');
const changeGridSize = document.querySelector('.grid-size')
const blackMode = document.querySelector('.black-mode')
const pinkMode = document.querySelector('.pink-mode')
const rgbMode = document.querySelector('.rgb-mode')
const eraserMode = document.querySelector('.eraser-mode')
const colorPicker = document.querySelector('#color-picker')
const slider = document.querySelector('.slider')
const sliderValue = document.querySelector('.grid-value')


blackMode.addEventListener('click', () => {
    COLOR = 'black';
    MODE = '';
    drawOnGrid();
})

pinkMode.addEventListener('click', () => {
    COLOR = '#e94196';
    MODE = ''
    drawOnGrid();
})

rgbMode.addEventListener('click', () => {
    MODE = 'RGB';
    drawOnGrid();
})

eraserMode.addEventListener('click', () => {
    COLOR = '#ffe2ed'
    MODE = ''
    drawOnGrid();
})

colorPicker.addEventListener('click', () => {
    colorPicker.oninput = (e) => {
        MODE = '';
        COLOR = e.target.value;
        colorPicker.style.backgroundColor = COLOR
    }
    drawOnGrid();
})

slider.addEventListener('input', () => {
    let num = document.querySelector('#slider').value
    sliderValue.innerHTML = `${num}x${num}`;
    clearGrid();
    MODE = '';
    COLOR = 'black';
    createGrid(num);
})

changeGridSize.addEventListener('click', () => {
    MODE = '';
    clearGrid();
    createGrid(16);
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
            if ((isClicked === true) && (MODE === 'RGB')) {
                box.style.backgroundColor = randomRGB();
            }
            else if ((isClicked === true) && (MODE === '')) {
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
    return `rgb(${r}, ${g}, ${b})`;
}


createGrid(DEFAULT);
