
//starting and loading
let i = 0

const startBtn = document.getElementById('start-button')
const progressBar = document.getElementById("bar");
const startGame = document.getElementById('start-game')
const gameStarted = document.getElementById('game-started')

startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none'
    playersName.style.display = 'none'
    labelName.style.display = 'none'
    if (i == 0) {
        i = 1;
        progressBar.style.display = 'block'
        let width = 10;
        let id = setInterval(frame, 10);
        function frame() {
          if (width >= 100) {
            clearInterval(id);
            i = 0;
            startGame.style.display = 'none'
            gameStarted.style.display = 'flex'
          } else {
            width++;
            progressBar.style.width = width + "%";
            progressBar.innerHTML = width  + "%";
          }
        }
      }
})


//audio effects
const startSound = new Audio()
startSound.src = ('./resources/start.mp3')

async function startEff() {
    await startSound.play()
}

startBtn.addEventListener('click', startEff)

const moveSound = new Audio()
moveSound.src = ('./resources/move.mp3')

async function moveEff() {
    await moveSound.play();
}


//showing player select
const youRock = document.getElementById('youRock')
youRock.addEventListener('click', selectRock)
youRock.addEventListener('click', computerChoice)
youRock.addEventListener('click', moveEff)

function selectRock() {
    youRock.style.color = '#EC5F2E'
    youRock.style.opacity = 1
}

const youPaper = document.getElementById('youPaper')
youPaper.addEventListener('click', selectPaper)
youPaper.addEventListener('click', computerChoice)
youPaper.addEventListener('click', moveEff)

function selectPaper() {
    youPaper.style.color = '#EC5F2E'
    youPaper.style.opacity = 1
}

const youScissor = document.getElementById('youScissor')
youScissor.addEventListener('click', selectScissor)
youScissor.addEventListener('click', computerChoice)
youScissor.addEventListener('click', moveEff)

function selectScissor() {
    youScissor.style.color = '#EC5F2E'
    youScissor.style.opacity = 1
}


//computer random choice
let compRock = document.getElementById('compRock')
let compPaper = document.getElementById('compPaper')
let compScissor = document.getElementById('compScissor')

//messages
let userMessage = document.getElementById('user-message')
let computerMessage = document.getElementById('computer-message')

let userProgress = document.getElementById('user-progress')

function computerChoice(e) {
    userChoice = e.target.id
    console.log(userChoice)
    let randomChoice = Math.floor(Math.random() * 3)
    if(randomChoice === 1) {
        compRock.style.color = '#EC5F2E'
        compRock.style.opacity = 1
        const compChoseRock = 'youRock'

        if(userChoice === compChoseRock) {
            userMessage.innerHTML = `<p>Draw! One more?</p>`
            computerMessage.innerHTML = "<p>Why not? This is my only job.</p>"
            setTimeout(clearAll, 2500)
        } else if(userChoice === 'youPaper') {
            userMessage.innerHTML = `<p>I rock! 'cause Paper beats Rock!</p>`
            computerMessage.innerHTML = '<p>Really? Is that a joke?</p>'
            setTimeout(clearAll, 2500)

            userProgress.style.width = '33%'
        } else if(userChoice === 'youScissor') {
            userMessage.innerHTML = '<p>Ouch! You smashed my hand!</p>'
            computerMessage.innerHTML = '<p>Sorry, but Rock beats Scissor!</p>'
            setTimeout(clearAll, 3000)
        } else return

    } else if (randomChoice === 2) {
        compPaper.style.color = '#EC5F2E'
        compPaper.style.opacity = 1
        const compChosePaper = 'youPaper'

        if(userChoice === compChosePaper) {
            userMessage.innerHTML = `<p>Draw! One more?</p>`
            computerMessage.innerHTML = "<p>Why not? This is my only job.</p>"
            setTimeout(clearAll, 2500)

        } else if(userChoice === 'youScissor') {
            console.log('user wins')
            setTimeout(clearAll, 2500)

        } else if(userChoice === 'youRock') {
            console.log('computer wins')
            setTimeout(clearAll, 2500)

        } else return

    } else {
        compScissor.style.color = '#EC5F2E'
        compScissor.style.opacity = 1
        const compChoseScissor = 'youScissor'

        if(userChoice === compChoseScissor) {
            userMessage.innerHTML = `<p>Draw! One more?</p>`
            computerMessage.innerHTML = "<p>Why not? This is my only job.</p>"
            setTimeout(clearAll, 2500)

        } else if(userChoice === 'youRock') {
            console.log('user wins')
            setTimeout(clearAll, 2500)

        } else if(userChoice === 'youPaper') {
            console.log('computer wins')
            setTimeout(clearAll, 2500)

        } 
    }
}

function clearAll() {
    youScissor.style.color = '#A18B77'
    youScissor.style.opacity = 0.5
    youRock.style.color = '#A18B77'
    youRock.style.opacity = 0.5
    youPaper.style.color = '#A18B77'
    youPaper.style.opacity = 0.5
    compScissor.style.color = '#A18B77'
    compScissor.style.opacity = 0.5
    compPaper.style.color = '#A18B77'
    compPaper.style.opacity = 0.5
    compRock.style.color = '#A18B77'
    compRock.style.opacity = 0.5
    userMessage.innerHTML = ''
    computerMessage.innerHTML = ''
}

//getting player's name
const labelName = document.getElementById('label-name')
const playersName = document.getElementById('players-name')
playersName.addEventListener('change', (e)=> {
    let inputName = e.target.value
    const myName = document.getElementsByClassName('my-name')
    myName[0].textContent = inputName
    myName[1].textContent = inputName
})
