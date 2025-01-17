const cpuPlay = document.getElementById('cpu-play');
const winner = document.getElementById('winner');
const moves = document.getElementById('moves');



document.querySelector('#moves').addEventListener('click', event => { //I would've used document.getElementById('moves')
    let btnClicked = event.target;
    if (btnClicked.matches('button')) { //could've used .tagName instead of .matches
      let value = btnClicked.value;
      console.log(value);
      return value;
    }
  });

function random() {
    return Math.floor(Math.random() * 3);
}

function rps(number) {
    switch (number) {
        case 0:
            // console.log("rock");
            cpuPlay.innerText = "rock";
            return "rock";
            break;
        case 1:
            // console.log("paper");
            cpuPlay.innerText = "paper";
            return "paper";
            break;
        case 2:
            // console.log("scissors");
            cpuPlay.innerText = "scissors";
            return "scissors";
            break;
    } 
}

random();
moves.onclick = function () {rps(random())};