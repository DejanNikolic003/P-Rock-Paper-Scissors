const humanScoreElement = document.querySelector('#humanScore');
const computerScoreElement = document.querySelector('#computerScore');
const startGameButton = document.querySelector('#startGameBtn');

const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorsButton = document.querySelector('#scissorsButton');

const selectionMenu = document.querySelector('#selectionMenu');
const winnerElement = document.querySelector('#winnerElement');

let computerSelection, humanSelection;
let humanScore = 0;
let computerScore = 0;
let moveTypes = ['Rock', 'Paper', 'Scissors'];


function getChoice() {
    return moveTypes[getRandomInt(moveTypes.length)];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function checkWinner()
{
    if(humanScore > computerScore) {
        return 'Human won with ' + humanScore + ' points!';
    } else if(humanScore < computerScore) {
        return 'Computer won with ' + computerScore + ' points!';
    } else {
        return 'TIE';
    }
}

function playRound(humanSelection, computerSelection) {
    let hasHumanWon, hasComputerWon = false;

    console.log('Selections:');
    console.log('Human: ' + humanSelection);
    console.log('Computer: ' + computerSelection);

    if(humanSelection === computerSelection)
    {
        console.log('TIE!');
        return;
    }

    switch(humanSelection) {
        case moveTypes[0]:
            if(computerSelection !== moveTypes[1]) {
                hasHumanWon = true;
                break;
            }
            hasComputerWon = true;
            break;
        case moveTypes[1]:
            if(computerSelection !== moveTypes[2]) {
                hasHumanWon = true;
                break;
            }
            hasComputerWon = true;
            break;
        case moveTypes[2]:
            if(computerSelection !== moveTypes[0]) {
                hasHumanWon = true;
                break;
            }
            hasComputerWon = true;
            break;
    }
    

    if(hasHumanWon) {
        humanScore++;
        return;
    }

    if(hasComputerWon) {
        computerScore++;
        return;
    }
}

function startGame() {
    computerSelection = getChoice();
    playRound(humanSelection, computerSelection);

    winnerElement.innerHTML = checkWinner();

    humanScoreElement.innerHTML = humanScore;
    computerScoreElement.innerHTML = computerScore;

    winnerElement.classList.remove('hidden');
    startGameButton.classList.remove('hidden');
    selectionMenu.classList.add('hidden');
}

startGameButton.addEventListener('click', (event) => {
    startGameButton.classList.add('hidden');
    winnerElement.classList.add('hidden');
    selectionMenu.classList.remove('hidden');

    humanScore = 0;
    computerScore = 0;

    humanScoreElement.innerHTML = humanScore;
    computerScoreElement.innerHTML = computerScore;
});

rockButton.addEventListener('click', (event) => {
    humanSelection = moveTypes[0];
    startGame();
});

paperButton.addEventListener('click', (event) => {
    humanSelection = moveTypes[1];
    startGame();
});

scissorsButton.addEventListener('click', (event) => {
    humanSelection = moveTypes[2];
    startGame();
});
