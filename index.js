const drawingPad = document.querySelector("#drawing-pad")
const resetButton = document.createElement("button");
const resizeButton = document.createElement("button");
let sketchPadHeight = 16;
let sketchPadWidth = 16;
function createRow(){
    let row = document.createElement("div");
    row.classList.add("row");
    for(let i = 0; i < sketchPadWidth; i++){
        let box = document.createElement("div");
        box.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = "black";
        });
        row.appendChild(box);
    }
    return row;
}

function createGrid(){
    //drawingPad
    for(let i = 0; i < sketchPadHeight; i++){
        let row = createRow();
        drawingPad.appendChild(row);
    }
}

resetButton.style.margin = "20px";
resetButton.innerHTML = "Reset";
resetButton.addEventListener('click', function() {
    const boxes = drawingPad.querySelectorAll("#drawing-pad .row div");
    boxes.forEach(box => {
        box.style.backgroundColor = "white";
    });
});
resizeButton.style.margin = "10px";
resizeButton.innerHTML = "Resize";
resizeButton.addEventListener('click', function(){
    const rows = drawingPad.querySelectorAll("#drawing-pad .row");
    rows.forEach(row => {
        drawingPad.removeChild(row);
    });
    sketchPadWidth = prompt("enter width:")
    sketchPadHeight = prompt("enter height:")
    createGrid();
});

createGrid();
drawingPad.parentElement.appendChild(resetButton);
drawingPad.parentElement.appendChild(resizeButton);