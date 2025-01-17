let cpuPlay = document.getElementById('cpu-play');
let winner = document.getElementById('winner');
let moves = document.getElementById('moves');


function random() {
    return Math.floor(Math.random() * 3);
}

function rps(number) {
    switch (number) {
        case 0:
            console.log("rock");
            cpuPlay.innerText = "rock";
            return "rock";
            break;
        case 1:
            console.log("paper");
            cpuPlay.innerText = "paper";
            return "paper";
            break;
        case 2:
            console.log("scissors");
            cpuPlay.innerText = "scissors";
            return "scissors";
            break;
    } 
}

random();
moves.onclick = function () {rps(random())};