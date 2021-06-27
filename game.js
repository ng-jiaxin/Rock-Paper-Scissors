let playerScore = 0
let computerScore = 0

function computerPlay(){
    let value = Math.floor(Math.random()*3)
    //console.log("value is " + value)
    if(value == 0){
        computerChoice = "rock"
    }else if(value == 1){
        computerChoice = "paper"
    }else if(value == 2){
        computerChoice = "scissors"
    }else{
        return "Nothing found"
    }
    return computerChoice
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Draw"
    }if((playerSelection == "rock" && computerSelection == "scissors")||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")){
        playerScore += 1
        return "Player Wins"
    }if((computerSelection == "rock" && playerSelection == "scissors")||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")){
        computerScore += 1
        return "Computer Wins"
    }
}

function game(){
    for(i=1;i<6;i++){
        let playerSelection = prompt("Please select your weapon","Tigger")
        let computerSelection = computerPlay()
        playRound()
        console.log("Round "+ i)
        console.log("Player chooses " + playerSelection)
        console.log("Computer chooses " +computerSelection)
        console.log(playRound(playerSelection,computerSelection))
        console.log("Player vs Computer: " + playerScore+":"+computerScore)
    }

}

// const playerSelection = "rock"
// const computerSelection = computerPlay()
// console.log("Player chooses " + playerSelection)
// console.log("Computer chooses " +computerSelection)
// console.log(playRound(playerSelection,computerSelection))
game()