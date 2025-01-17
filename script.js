console.log("hello world")

function random() {
    return Math.floor(Math.random() * 3);
}

function rps(number) {
    switch (number) {
        case 0:
            console.log("rock");
            return "rock";
            break;
        case 1:
            console.log("paper");
            return "paper";
            break;
        case 2:
            console.log("scissors");
            return "scissors";
            break;
    } 
}

random();
rps(random());