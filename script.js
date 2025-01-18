const cpuPlay = document.getElementById('cpu-play');
const winner = document.getElementById('winner');
const moves = document.getElementById('moves');
const playAgain = document.getElementById('playagain');
const playerScoreText = document.getElementById('playerscore');
const cpuScoreText = document.getElementById('cpuscore');
const gameOver = document.getElementById('gameover');
const roundCount = document.getElementById('roundcount');
const buttons = document.querySelectorAll('button.moves');

function disableButtons() {
    buttons.forEach(button => {
      button.disabled = true; 
    });
  }

function random() {
            return Math.floor(Math.random() * 3);
        }

function rps(number) {
    switch (number) {
        case 0:
            cpuPlay.innerText = "rock";
            return "rock";
            break;
        case 1:
            cpuPlay.innerText = "paper";
            return "paper";
            break;
        case 2:
            cpuPlay.innerText = "scissors";
            return "scissors";
            break;
    } 
}

let rounds = 0;
let playerScore = 0;
let cpuScore = 0;

function game(user, cpu) {
    rounds += 1;
    roundCount.innerText = rounds.toString();
    if (user === "rock") {
        switch (cpu) {
            case "rock":
                winner.innerText = "It's a tie!"
                break;
            case "paper":
                winner.innerText = "Point for the computer!"
                cpuScoreText.innerText  = cpuScore.toString();
                cpuScore += 1;
                playerScore
                break;
            case "scissors":
                winner.innerText = "Point for you!"
                playerScore += 1;
                playerScoreText.innerText  = playerScore.toString();
                break;
        }
    } else if (user === "paper") {
        switch (cpu) {
            case "paper":
                winner.innerText = "It's a tie!"
                break;
            case "scissors":
                winner.innerText = "Point for the computer!"
                cpuScore += 1;
                cpuScoreText.innerText  = cpuScore.toString();
                break;
            case "rock":
                winner.innerText = "Point for you!"
                playerScoreText.innerText  = playerScore.toString();
                playerScore += 1;
                break;
        }
    } else if (user === "scissors") {
        switch (cpu) {
            case "scissors":
                winner.innerText = "It's a tie!"
                break;
            case "rock":
                winner.innerText = "Point for the computer!";
                cpuScore += 1;
                cpuScoreText.innerText = cpuScore.toString();
                break;
            case "paper":
                winner.innerText = "Point for you!";
                playerScore += 1;
                playerScoreText.innerText  = playerScore.toString();
                break;
            }
    
        console.log(rounds);
    } 
    if (rounds === 5) {
        // cpuPlay.innerText += "Game over :c"
        disableButtons()
        playAgain.style.display = "block";
        // moves.style.display = "none";
        if (playerScore > cpuScore) {
            winner.innerText = "YOU WON!"
        } else if (cpuScore > playerScore) {
            winner.innerText = "The computer won :c womp womp"
        } else {
            winner.innerText = "Its a tie!"
        }
    }
}

playAgain.addEventListener('click', event => {
    rounds = 0;
    cpuScore = 0;
    playerScore = 0;
    playerScoreText.innerText = "0";
    cpuScoreText.innerText = "0";
    cpuPlay.innerText = "";
    winner.innerText = "";
    playAgain.style.display = "none";
    moves.style.display = "inline";
})

document.querySelector('#moves').addEventListener('click', event => { //I would've used document.getElementById('moves')
    let btnClicked = event.target;
    if (btnClicked.matches('button')) { //could've used .tagName instead of .matches
      let value = btnClicked.value;
      game(value,rps(random()));
    //   return value;
    }
  });