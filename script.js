const container = document.querySelector(".container");
const play = document.querySelector("button");

const width = "cell10";
const totOfCell = 100;

play.addEventListener("click", function()
{
    newGrid(width, totOfCell)
}, {once : true});

// FUNCTIONS

function newGrid(width, totOfCell) {
    for (let i = 1; i < totOfCell + 1; i++) {
        const newCell = createGrid10([i], width);
        newCell.addEventListener("click", onClick)
        container.append(newCell);
    }
}

function createGrid10(numberOfCells, string) {
    const cell = document.createElement("div");
    cell.classList.add(string);
    cell.innerHTML = numberOfCells;
    return cell;
}

function onClick() {
    this.classList.add("ciano");
}