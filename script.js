const container = document.querySelector(".container");
const play = document.querySelector("button");
const level = document.getElementById("mySelect");

let width = "cell10";
let totOfCell = 100;

play.addEventListener("click", function()
{
    switch (level.selectedIndex) {
        case 0:
            width = "cell10";
            totOfCell = 100;
            break;
        case 1:
            width = "cell9";
            totOfCell = 81;
            break;
        case 2:
            width = "cell7";
            totOfCell = 49;
            break;
    };
    newGrid(width, totOfCell, container);
}
// , {once : true}
);

// FUNCTIONS

function newGrid(width, totOfCell, container) {
    container.innerHTML = "";
    for (let i = 1; i < totOfCell + 1; i++) {
        const newCell = createGrid([i], width);
        newCell.addEventListener("click", onClick)
        container.append(newCell);
    }
}

function createGrid(numberOfCells, string) {
    const cell = document.createElement("div");
    cell.classList.add(string);
    cell.innerHTML = numberOfCells;
    return cell;
}

function onClick() {
    this.classList.add("ciano");
    console.log(this.innerHTML);
}