const humanScoreElement = document.querySelector('#humanScore');
const computerScoreElement = document.querySelector('#computerScore');
const startGameButton = document.querySelector('#startGameBtn');
const buttons = document.querySelectorAll('#buttons');
const selectionMenu = document.querySelector('#selectionMenu');
const winnerElement = document.querySelector('#winnerElement');
const roundEl = document.querySelector('#round');

let computerSelection, humanSelection;
let humanScore = 0;
let computerScore = 0;
let rounds = 0;
let maxRounds = 5;
let moves = ['Rock', 'Paper', 'Scissors'];

const getRandomChoice = () => {
    return moves[getRandomInt(moves.length)];
}

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max); 
}

const increaseScore = (hasHumanWon) => {
    return hasHumanWon ? humanScore++ : computerScore++;
}

const checkWinner = () => {
    return (humanScore > computerScore) ? 
            'Human won with ' + humanScore + ' points!' :
            'Computer won with ' + computerScore + ' points!';
}

const playRound = (humanSelection, computerSelection) => {
    if(humanSelection === computerSelection) {   
        rounds++;
        roundEl.textContent = rounds + '/' + maxRounds;
        return
    }
    let hasHumanWon = false;

    switch(humanSelection) {
        case moves[0]:
            if(computerSelection === moves[1]) {
                break;
            }
            hasHumanWon = true;
            break;
        case moves[1]:
            if(computerSelection === moves[2]) {
                break;
            }
            hasHumanWon = true;
            break;
        case moves[2]:
            if(computerSelection === moves[0]) {
                break;
            }
            hasHumanWon = true;
            break;      
    }

    increaseScore(hasHumanWon);

    rounds++;

    roundEl.textContent = rounds + '/' + maxRounds;
}

const endGame = () => {
    let winner = checkWinner();

    winnerElement.textContent = winner;
    winnerElement.classList.remove('hidden');

    startGameButton.classList.remove('hidden');
    selectionMenu.classList.add('hidden');
}

const startGame = () => {
    if(rounds === maxRounds) return endGame();

    computerSelection = getRandomChoice();

    playRound(humanSelection, computerSelection);

    humanScoreElement.textContent = humanScore;
    computerScoreElement.textContent = computerScore;
}

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        switch(event.target.id) {
            case 'rockButton':
                humanSelection = moves[0];
                break;
            case 'paperButton':
                humanSelection = moves[1];
                break;
            case 'scissorsButton':
                humanSelection = moves[2];
                break;
        }

        startGame();
    });
});
