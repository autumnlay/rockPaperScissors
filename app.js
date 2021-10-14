let choices = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']
    let randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]

}
console.log(getComputerChoice())

function play(playerChoice) {
    let computerChoice = getComputerChoice()
    //let activeCoice = choice.find(ch => ch.playerChoice === rock


    if (playerChoice === getComputerChoice()) {
        //this would apply to all that match
        console.log('You Tie')
        return 'You Tie!'
    }
    else if (playerChoice === 'rock' && getComputerChoice() == 'paper') {
        console.log('You Loose!')
        return 'You Loose!'
    }
    else if (playerChoice === 'rock' && getComputerChoice() == 'scissors') {
        console.log('You Win!')
        return 'You Win!'
    }
    else if (playerChoice === 'scisssors' && getComputerChoice() == 'paper') {
        console.log('You Win!')
        return 'You Win!'
    }
    else if (playerChoice === 'scissors' && getComputerChoice() == 'rock') {
        console.log('You Loose!')
        return 'You Loose!'
    }
    else if (playerChoice === 'paper' && getComputerChoice() == 'scissors') {
        console.log('You Loose!')
        return 'You Loose!'
    }
    else if (playerChoice === 'paper' && getComputerChoice() == 'rock') {
        console.log('You Win!')
        return 'You Win!'
    }
}






// if Tie
// else if p == rock{
//     if c choice = paper
//     else
// }
// else if p == paper