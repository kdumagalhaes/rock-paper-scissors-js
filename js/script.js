
const rpsGame = () => {
    const startBtn = document.getElementById('start-button')
    const progressBar = document.getElementById("bar");
    const startGame = document.getElementById('start-game')
    const gameStarted = document.getElementById('game-started')
    const playersName = document.getElementById('players-name')
    const labelName = document.getElementById('label-name')

    const userChoseRock = document.getElementById('userChoseRock')
    const userChosePaper = document.getElementById('userChosePaper')
    const userChoseScissor = document.getElementById('userChoseScissor')

    const compChoseRock = document.getElementById('compChoseRock')
    const compChosePaper = document.getElementById('compChosePaper')
    const compChoseScissor = document.getElementById('compChoseScissor')

    //getting names
      function gettingNames() {
        playersName.addEventListener('change', (e) => {
          let userName = document.querySelectorAll('.my-name')
          let nameValue = e.target.value
          userName.forEach((_, i) => {
            userName[i].textContent = nameValue
          })
      })
    }

    //starting and loading game when click enter
    window.addEventListener('keyup', (e) => {
      if(e.key === 'Enter') {
        startingGame()
      }
    })

    //starting and loading game
    startBtn.addEventListener('click', startingGame)

    function startingGame() {
        startBtn.style.display = 'none'
        playersName.style.display = 'none'
        labelName.style.display = 'none'
        let i = 0
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
    }

    //user selections
    function userSelections() {
      userChoseRock.addEventListener('click', changeColorUserSelected)
      userChoseRock.addEventListener('click', computerSelections)
      userChoseRock.addEventListener('click', whoIsTheWinner)
      userChosePaper.addEventListener('click', changeColorUserSelected)
      userChosePaper.addEventListener('click', computerSelections)
      userChoseScissor.addEventListener('click', changeColorUserSelected)
      userChoseScissor.addEventListener('click', computerSelections)
    }

    //change user selection color
    function changeColorUserSelected() {
      this.style.color = 'var(--orange)'
      this.style.opacity = 1
    }

    //computer selections
    function computerSelections() {

      let computerOptions = ['rock', 'paper', 'scissor']
      let computerRandomChoice = Math.floor(Math.random() * 3)
      const computerChoice = computerOptions[computerRandomChoice]

      //paiting selections    
      if(computerChoice === 'rock') {
        changeColorComputerSelected(compChoseRock)
      } else if (computerChoice === 'paper') {
        changeColorComputerSelected(compChosePaper)
      } else {
        changeColorComputerSelected(compChoseScissor)
      }
    }

    //change computer selection color
    function changeColorComputerSelected(option) {
      option.style.color = 'var(--orange)'
      option.style.opacity = 1
    }

    //verifying who's the winner
    function whoIsTheWinner(userHand) {
      if(userHand.target.id === 'userChoseRock') {
        console.log('empateee')
      }
    }
    
    //audio effects
    function audioEffects() {
      startBtn.addEventListener('click', startEff)
    
      const startSound = new Audio()
      startSound.src = ('./resources/start.mp3')
      
      async function startEff() {
          await startSound.play()
      }
  
      userChoseRock.addEventListener('click', moveEff)
      userChosePaper.addEventListener('click', moveEff)
      userChoseScissor.addEventListener('click', moveEff)
      
      const moveSound = new Audio()
      moveSound.src = ('./resources/move.mp3')
      
      async function moveEff() {
          await moveSound.play();
      }
    }

  audioEffects()
  gettingNames()
  userSelections()
}

rpsGame()