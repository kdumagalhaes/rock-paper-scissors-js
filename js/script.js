// rules
// option === option = draw
// scissor and paper = scissor wins
// scissor and rock = rock wins
// rock and paper = paper wins


// starting and loading
let i = 0

const startBtn = document.getElementById('start-button')
const elem = document.getElementById("myBar");
const startGame = document.getElementById('start-game')
const gameStarted = document.getElementById('game-started')

startBtn.addEventListener('click', () => {
    startBtn.classList.toggle('hide')
    if (i == 0) {
        i = 1;
        elem.classList.toggle('show')
        var width = 10;
        var id = setInterval(frame, 10);
        function frame() {
          if (width >= 100) {
            clearInterval(id);
            i = 0;
            startGame.classList.toggle('hide')
            gameStarted.classList.toggle('show')
          } else {
            width++;
            elem.style.width = width + "%";
            elem.innerHTML = width  + "%";
          }
        }
      }
})

// showing player select
const youRock = document.getElementById('youRock')
youRock.addEventListener('click', handleRock)
youRock.addEventListener('click', computerChoice)

function handleRock(e) {
    youRock.style.color = '#EC5F2E'
    youRock.style.opacity = 1
}

const youPaper = document.getElementById('youPaper')
youPaper.addEventListener('click', handlePaper)
youPaper.addEventListener('click', computerChoice)

function handlePaper(e) {
    youPaper.style.color = '#EC5F2E'
    youPaper.style.opacity = 1
}

const youScissor = document.getElementById('youScissor')
youScissor.addEventListener('click', handleScissor)
youScissor.addEventListener('click', computerChoice)


function handleScissor(e) {
    youScissor.style.color = '#EC5F2E'
    youScissor.style.opacity = 1
}

//Computer random choice
let compRock = document.getElementById('compRock')
let compPaper = document.getElementById('compPaper')
let compScissor = document.getElementById('compScissor')

function computerChoice() {
    let randomChoice = Math.floor(Math.random() * 3)
    if(randomChoice === 1) {
        compRock.style.color = '#EC5F2E'
        compRock.style.opacity = 1

    } else if (randomChoice === 2) {
        compPaper.style.color = '#EC5F2E'
        compPaper.style.opacity = 1
    } else {
        compScissor.style.color = '#EC5F2E'
        compScissor.style.opacity = 1
    }
}
