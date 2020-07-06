
const game = () => {
    const startBtn = document.getElementById('start-button')
    const progressBar = document.getElementById("bar");
    const startGame = document.getElementById('start-game')
    const gameStarted = document.getElementById('game-started')
    const playersName = document.getElementById('players-name')
    const labelName = document.getElementById('label-name')

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
      const userChoseRock = document.getElementById('userChoseRock')
      userChoseRock.addEventListener('click', changeColorSelected)
      const userChosePaper = document.getElementById('userChosePaper')
      userChosePaper.addEventListener('click', changeColorSelected)
      const userChoseScissor = document.getElementById('userChoseScissor')
      userChoseScissor.addEventListener('click', changeColorSelected)

      function changeColorSelected() {
          this.style.color = 'var(--orange)'
          this.style.opacity = 1
      }
    }

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
    
    //audio effects
    startBtn.addEventListener('click', startEff)
    
    const startSound = new Audio()
    startSound.src = ('./resources/start.mp3')
    
    async function startEff() {
        await startSound.play()
    }
    
    const moveSound = new Audio()
    moveSound.src = ('./resources/move.mp3')
    
    async function moveEff() {
        await moveSound.play();
    }

  gettingNames()
  userSelections()
}

game()