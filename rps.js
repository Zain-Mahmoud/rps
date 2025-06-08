function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    while (choice === 3){
        choice = Math.floor(Math.random() * 3)
    }
    if (choice === 0){
        return 'Scissors'
    } else if (choice === 1) {
        return 'Rock';
    } else {
        return 'Paper';
    }
}

function getHumanChoice(){
    return prompt("Choose rock, paper or scissors")
}

function playRound(humanChoice, computerChoice, humanScore, computerScore){
    switch (humanChoice){
        case 'Rock':
            switch (computerChoice){
                case 'Rock': 
                    break
                case 'Scissors':
                    humanScore++
                    break
                case 'Paper':
                    computerScore++
                    break
            }
            break
        case 'Paper':
            switch (computerChoice){
                case 'Rock': 
                    humanScore++
                    break
                case 'Scissors':
                    computerScore++
                    break
                case 'Paper':
                    break
            }
            break
        case 'Scissors':
            switch (computerChoice){
                case 'Rock': 
                    computerScore++
                    break
                case 'Scissors':
                    break
                case 'Paper':
                    humanScore++
                    break
            }
            break
    }
    return [humanScore, computerScore]
}

function gameWinner(humanScore, computerScore){
    if (humanScore > computerScore){
        console.log('You win!')
    } else if (humanScore < computerScore) {
        console.log('You lose...')
    } else {
        console.log('Tie')
    }
}

let humanScore = 0;
let computerScore = 0;


for (let i = 0; i < 5; i++){
    newScores = playRound(getHumanChoice(), getComputerChoice(), humanScore, computerScore);
    humanScore = newScores[0]
    computerScore = newScores[1]
    console.log(`Round ${i+1} score:`)
    console.log(`You: ${humanScore}`)
    console.log(`Computer: ${computerScore}`)
}
gameWinner(humanScore, computerScore);
