let canvasElement
let canvas

let currentTime
let lastTime
let deltaTime

// RUN INITIALIZATION CODE BEFORE GAME LOOP BEGINS
function start() {
    canvasElement = document.getElementById('canvas')
    canvas = canvasElement.getContext('2d')
}

// HANDLES LOGIC
function update() {
    //implemented later
}

// HANDLES DRAWING TO CANVAS
function draw() {
    // CLEAR CANVAS TO PREVENT DUPLICATE DRAWINGS
    canvas.clearRect(0, 0, canvasElement.width, canvasElement.height)
}

// RUNS ONCE PER FRAME
function runGameLoop() {
    // GET CURRENT TIME OF FRAME
    currentTime = (new Date()).getTime()
    // GET TIME IN SECONDS THAT HAS PASSED SINCE LAST FRAME
    deltaTime = (currentTime - lastTime) / 1000

    update()
    draw()

    lastTime = currentTime

    requestAnimationFrame(runGameLoop)
}

window.addEventListener('load', () => {
    start()
    requestAnimationFrame(runGameLoop)
})