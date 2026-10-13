
let humanScore = 0;
let computerScore = 0;
let roundCount = 0;
let gameOver = false;
const result = document.querySelector('#result');

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  let figure;

  if (choice == 0) {
     figure = "rock"
  } 
  else if (choice == 1) {
     figure = "paper"
  }
  else {
    figure = "scissors"
  }

  console.log('computer turn a ' + figure);
  return figure;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == 'rock' && computerChoice == 'scissors') {
    humanScore += 1;
    result.textContent = 'great';
  }
 else if (humanChoice == 'scissors' && computerChoice == 'paper') {
    humanScore += 1;
    result.textContent = 'great';
  }
 else if (humanChoice == 'paper' && computerChoice == 'rock') {
    humanScore += 1;
    result.textContent = 'great';
  }
  else if (humanChoice === computerChoice) { 
    result.textContent = 'draw';
  }
  else {
    computerScore += 1;
    result.textContent = 'unluck';
  }
  roundCount++;

  if (roundCount === 5) {
    endGame();
  }
}

function endGame(){
  gameOver = true;
  if (humanScore > computerScore) {
    result.textContent = 'you are winner!!';
  }
  else if (humanScore === computerScore) {
    result.textContent = 'draw';
  }
  else {
    result.textContent = 'you lose';
  }
}

// input //

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector("#scissors");

// output // 

const Great = document.querySelector('#great');
const Draw = document.querySelector('#draw');
const Lose = document.querySelector('#lose');
const Winner = document.querySelector('#winner');
const unluck = document.querySelector('#unluck');



rockButton.addEventListener("click", () => {
  if (gameOver) {
    return;
  }

  const humanChoice = "rock";
  const computerChoice = getComputerChoice();

  playRound(humanChoice, computerChoice)
});

paperButton.addEventListener("click", () => {
   if (gameOver) {
    return;
  }
  
  const humanChoice = "paper";
  const computerChoice = getComputerChoice();

  playRound(humanChoice, computerChoice)
});

scissorsButton.addEventListener("click", () => {
   if (gameOver) {
    return;
  }
  
  const humanChoice = "scissors";
  const computerChoice = getComputerChoice();

  playRound(humanChoice, computerChoice)
});