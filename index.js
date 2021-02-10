let computerPlay = () => {
        let num = (Math.floor(Math.random() * 3))
        if (num === 0) {
            return 'rock'; 
        } else if (num === 1) {
            return 'paper';
        } else {
            return 'scissors';
        }
    }

let playerSel = (sel) => {
    let selLower = sel.toLowerCase()

    if(selLower === 'rock' || selLower === 'paper' || selLower === 'scissors') {
        return selLower
    } else {
        return console.log('Check Your Spelling')
    }
}

let game = (comp, player) => {
    if (comp === 'rock' && player === 'scissors') {
        return console.log('You loose, Rock beats Scissors')
    } else if (comp === 'paper' && player === 'rock') {
        return console.log('You loose, Paper beats Rock')
    } else if (comp === ' scissors' && player === 'paper') {
        return console.log('You loose, Scissors beats Paper')
    } else if (comp === player) {
        return console.log('It\'s a draw!') 
    } else {
        return console.log(`You Win! ${player} beats ${comp}`)
    }
} 



    game(computerPlay(), playerSel('Rock'));