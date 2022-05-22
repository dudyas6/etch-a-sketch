const size = 16;
let penColor = "black";
let grid = true;

function makeGrid(size) {
    let grid = document.querySelector(".grid");
    let cells = grid.querySelectorAll(".cell")
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    cells.forEach((cell) => cell.remove());

    for (let i = 0; i < size * size; i++) {
        let gridCell = document.createElement('div');
        gridCell.classList.add("cell");
        gridCell.addEventListener('mouseover', colorCell);
        gridCell.addEventListener('mousedown', colorCell);
        grid.insertAdjacentElement("beforeend", gridCell);
    }
}

function colorCell() {
    if (penColor === "rainbow") {
        this.style.backgroundColor = `hsl(${Math.random()* 300}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = penColor;
    }
}

function changeColor(color) {
    penColor = color;
}

function changeSize(size) {
    if (size >= 2 && size <= 100) {
        makeGrid(size);
    } else {
        alert("Not a valid size, please choose size between 2-100.")
    }
}

function clearBoard() {
    let squares = document.querySelectorAll(".cell");
    squares.forEach((cell) => cell.style.backgroundColor = 'white');
}

function removeGrid() {
    let squares = document.querySelectorAll(".cell");
    if (grid==true) {
        squares.forEach(square => square.style.border = 'white');
        grid = false;
    }
    else {
        squares.forEach(square => square.style.border = "1px solid black");
        grid = true;
    }
}

makeGrid(size);