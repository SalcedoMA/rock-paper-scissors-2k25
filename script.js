const cpuPlay = document.getElementById('cpu-play');
const winner = document.getElementById('winner');
const moves = document.getElementById('moves');





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

function game(user, cpu) {
    if (user === "rock") {
        switch (cpu) {
            case "rock":
                winner.innerText = "It's a tie!"
                break;
            case "paper":
                winner.innerText = "The computer wins! Womp womp"
                break;
            case "scissors":
                winner.innerText = "You win!"
                break;
        }
    } else if (user === "paper") {
        switch (cpu) {
            case "paper":
                winner.innerText = "It's a tie!"
                break;
            case "scissors":
                winner.innerText = "The computer wins! Womp womp"
                break;
            case "rock":
                winner.innerText = "You win!"
                break;
        }
    } else if (user === "scissors") {
        switch (cpu) {
            case "scissors":
                winner.innerText = "It's a tie!"
                break;
            case "rock":
                winner.innerText = "The computer wins! Womp womp"
                break;
            case "paper":
                winner.innerText = "You win!"
                break;
        }
    }
}

document.querySelector('#moves').addEventListener('click', event => { //I would've used document.getElementById('moves')
    let btnClicked = event.target;
    if (btnClicked.matches('button')) { //could've used .tagName instead of .matches
      let value = btnClicked.value;
      game(value,rps(random()));
    //   return value;
    }
  });