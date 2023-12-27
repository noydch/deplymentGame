let x = 0
let y = 0
let fx = 0
let fy = 0
let score = 0
let intervalId;
const snake = document.getElementById('snake')
const frog = document.getElementById('frog')

function frogJump() {
    fx = Math.floor(Math.random() * 136) * 10 // Generating x position ending with zero
    fy = Math.floor(Math.random() * 76) * 10  // Generating y position ending with zero
    frog.style.top = fy + 'px'
    frog.style.left = fx + 'px'
}

function moveBox(direction) {
    const xx = `: x: ${x}, y: ${y}, fx: ${fx}, fy: ${fy}`
    document.getElementById('score').innerText = `your score: ${score + xx}`
    if (x === fx && y === fy) {
        score++
        frogJump()
    }


    // X
    if( x < -50){
        snake.style.transition = 'all 0s'
        x = 1720
    }
    if( x < 1720 ){
        snake.style.transition = 'all 0.3s ease-in-out'
    }
    if( x > 1720){
        snake.style.transition = 'all 0s'
        x = -50
    }
    if( x < -50 ){
        snake.style.transition = 'all 0.3s ease-in-out'
    }

        // Y
        if( y < -50){
            snake.style.transition = 'all 0s'
            y = 950
        }
        if( y < 950 ){
            snake.style.transition = 'all 0.3s ease-in-out'
        }
        if( y > 950){
            snake.style.transition = 'all 0s'
            y = -50
        }
        if( y < -50 ){
            snake.style.transition = 'all 0.3s ease-in-out'
        }

    startAutoRun(direction);

    switch (direction) {
        case 'up':
        case 'down':
            snake.style.width = '10px';
            snake.style.height = '30px';
            break;
        case 'right':
        case 'left':
            snake.style.width = '30px';
            snake.style.height = '10px';
            break;
    }

    switch (direction) {
        case 'up':
            y -= 10;
            break;
        case 'down':
            y += 10;
            break;
        case 'right':
            x += 10;
            break;
        case 'left':
            x -= 10;
            break;
    }
    snake.style.top = y + 'px'
    snake.style.left = x + 'px'

}

// Function to start auto run
function startAutoRun(direction) {
    clearInterval(intervalId); // Clear any existing interval

    intervalId = setInterval(() => {
        moveBox(direction);
    }, 200); // Adjust the interval speed as needed
}

// Function to stop auto run
function stopAutoRun() {
    clearInterval(intervalId);
}


// add event listener to the document keydown event
document.addEventListener('keydown', function (event) {
    console.log(event.key)

    switch (event.key) {
        case 'ArrowUp':
            moveBox('up')
            break;
        case 'ArrowDown':
            moveBox('down')
            break;
        case 'ArrowRight':
            moveBox('right')
            break;
        case 'ArrowLeft':
            moveBox('left')
            break;
        case 'w':
            moveBox('up')
            break;
        case 's':
            moveBox('down')
            break;
        case 'd':
            moveBox('right')
            break;
        case 'a':
            moveBox('left')
            break;
        case ' ':
            frogJump()
            break;
        case 'j':
            frogJump()
            break;
        case 'b':
            stopAutoRun()
    }

})
