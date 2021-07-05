let playerScore = 0
let computerScore = 0
let playerSelection = null
let computerChoice = null

const score = document.querySelector('#score')
const output = document.querySelector('#output')
const choices = document.querySelector('#choices')
const buttons = document.querySelectorAll('.btn')
const replay = document.querySelector('#replay')
const playerChoose = document.querySelector('.playerchoice')
const computerChoose = document.querySelector('.computerchoice')

buttons.forEach((button)=>{button.addEventListener('click',()=>{

    playerChoice = button.id
    if(playerChoice == 'replay'){
        playerScore = 0
        computerScore = 0
        output.textContent = ''
        choices.textContent = ''
        score.textContent = '0 - 0'
        playerChoose.innerHTML = ''
        computerChoose.innerHTML = ''
        console.log('enable')
        enableButtons()
    }
    else{
    if(playerChoice == 'rock'){
        playerSelection = 'rock'
        console.log('rock')
    }
    if(playerChoice == 'paper'){
        playerSelection = 'paper'
        console.log('paper')
    }
    if(playerChoice == 'scissors'){
        playerSelection = 'scissors'
        console.log('scissors')
    }
    computerSelection = computerPlay()
    console.log(computerSelection)
    playRound(playerSelection,computerSelection)
    game()
    }
}
    
)})

// replay.addEventListener('click',()=>{
//     if(playerChoice == 'replay'){
//         playerScore = 0
//         computerScore = 0
//         output.textContent = ''
//         choices.textContent = ''
//         score.textContent = '0 - 0'
//         enableButtons()
//     }
// })

function disableButtons(){
    buttons.forEach((button)=>{
        if(button.id == 'rock' || button.id == 'paper' || button.id == 
        'scissors'){
            button.disabled = true
        }
    })
}

function enableButtons(){
    buttons.forEach(button=>{
        button.disabled = false
    })
}

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
    choices.textContent = `You chose ${playerSelection}, Computer chose ${computerSelection}`
    playerChoose.appendChild(appendText(`${playerSelection}`))
    computerChoose.appendChild(appendText(`${computerSelection}`))
    if(playerSelection == computerSelection){
        output.textContent = "Draw"
        //return "Draw"
    }if((playerSelection == "rock" && computerSelection == "scissors")||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")){
        playerScore += 1
        output.textContent = "Player Wins"
        //return "Player Wins"
    }if((computerSelection == "rock" && playerSelection == "scissors")||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")){
        computerScore += 1
        output.textContent = "Computer Wins"
        //return "Computer Wins"
    }
}

function game(){
    if(computerScore == 5){
        output.textContent = "Victory for Computer"
        disableButtons()
    }
    if(playerScore == 5){
        output.textContent = "Victory for Player"
        disableButtons()
    }
    score.textContent = playerScore + ' - ' + computerScore
    console.log("Player chooses " + playerSelection)
    console.log("Computer chooses " +computerSelection)
    //console.log(playRound(playerSelection,computerSelection))
    console.log("Player vs Computer: " + playerScore+":"+computerScore)
 
    // for(i=1;i<6;i++){
    //     //let playerSelection = 'rock'
    //     //let playerSelection = prompt("Please select your weapon","Tigger")
    //     let computerSelection = computerPlay()
    //     playRound()
    //     console.log("Round "+ i)
    //     console.log("Player chooses " + playerSelection)
    //     console.log("Computer chooses " +computerSelection)
    //     console.log(playRound(playerSelection,computerSelection))
    //     console.log("Player vs Computer: " + playerScore+":"+computerScore)
    // }

}

function appendText(text){
    const newText = document.createElement('p')
    newText.textContent = text

    return newText
}

// const playerSelection = "rock"
// const computerSelection = computerPlay()
// console.log("Player chooses " + playerSelection)
// console.log("Computer chooses " +computerSelection)
// console.log(playRound(playerSelection,computerSelection))
//game()