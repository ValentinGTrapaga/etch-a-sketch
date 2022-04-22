let gridSize = document.getElementById("myRange")

let pValue = document.getElementById("slider-value")
pValue.innerText = `${gridSize.value} x ${gridSize.value}`

let sketch = document.getElementById("sketch")

function makeGrid() {
    for (let i = 0; i < gridSize.value; i++) {
        let myRow = document.createElement("div")
        myRow.className = "row"
        sketch.appendChild(myRow)
        for (let j = 0; j < gridSize.value; j++) {
            let cell = document.createElement("span")
            cell.className = "cell"
            myRow.appendChild(cell)
        }
    }
}

makeGrid()

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let cells = document.querySelectorAll(".cell")
const btns = document.querySelectorAll(".btn")

let red = 0
let green = 0
let blue = 0

function paint(red, green, blue) {
    cells = document.querySelectorAll(".cell")
    cells.forEach(el => (el.addEventListener('mouseenter', () => {
        el.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    }
    )))
}

function clearAll() {
    cells.forEach(el => {
        el.style.backgroundColor = "white";
    })
}

const color = btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.id == "black") {
            red = 0;
            green = 0;
            blue = 0;
            paint(red, green, blue)
        } else if (btn.id == "white") {
            red = 255;
            green = 255;
            blue = 255;
            paint(red, green, blue)
        } else if (btn.id == "random") {
            paint(red = getRandomInt(255), green = getRandomInt(255), blue = getRandomInt(255))
        } else if (btn.id == "clear") {
            clearAll()
        }
    })
})

paint(red, green, blue)

gridSize.oninput = () => {
    pValue.innerText = `${gridSize.value} x ${gridSize.value}`
    // Hasta aca anda
    sketch.innerHTML = ""
    makeGrid()
    color
    paint(red, green, blue)
}
