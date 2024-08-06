let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

/*
if (score === null) {
score = {
  wins: 0,
  losses: 0,
  ties: 0
  }
}
*/
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  }
})
const rockBtn = document.querySelector('.js-rock-btn');
rockBtn.addEventListener('click', () => {
  playGame('rock');
})
const paperBtn = document.querySelector('.js-paper-btn');
paperBtn.addEventListener('click', () => {
  playGame('paper');
})
const scissorsBtn = document.querySelector('.js-scissors-btn');
scissorsBtn.addEventListener('click', () => {
  playGame('scissors');
})
const resetBtn = document.querySelector('.js-reset-btn');
resetBtn.addEventListener('click', () => {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScore();
  document.querySelector('.js-result').innerHTML = '';
  document.querySelector('.js-move').innerHTML = '';
})

let isAutoPlaying = false;
let intervalId;
const autoPlayBtn = document.querySelector('.js-auto-play-btn');
autoPlayBtn.addEventListener('click', () => {
  autoPlay();
})
function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

updateScore()
//const storage = JSON.parse(localStorage.getItem("score"));
//console.log(JSON.parse(localStorage.getItem("score")));

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.'
    } else if (computerMove === 'paper') {
      result = 'You win.'
    } else if (computerMove === 'scissors') {
      result = 'Tie.'
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.'
    } else if (computerMove === 'paper') {
      result = 'Tie.'
    } else if (computerMove === 'scissors') {
      result = 'You lose.'
    }

  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.'
    } else if (computerMove === 'paper') {
      result = 'You lose.'
    } else if (computerMove === 'scissors') {
      result = 'You win.'
    };
  };

  let jsResult = document.querySelector('.js-result').innerHTML = result;
  let jsMove = document.querySelector('.js-move')
    .innerHTML = `You
  <img class="img-icon" src="images/${playerMove}-emoji.png">
  <img class="img-icon" src="images/${computerMove}-emoji.png">
  Computer`;

  if (result === 'You win.') {
    score.wins += 1;
  } else if (result === 'You lose.') {
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  };

  localStorage.setItem("score", JSON.stringify(score));
  updateScore();
};

function updateScore() {
document.querySelector('.js-score')
.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
};

function pickComputerMove () {
let randomNumber = Math.random();
let computerMove = '';

if(randomNumber >= 0 && randomNumber < 1/3) {
  computerMove = 'rock';
} else if(randomNumber >= 1/3 && randomNumber < 2/3) {
  computerMove = 'paper';
} else if (randomNumber >= 2/3 && randomNumber < 1) {
  computerMove = 'scissors';
}
return computerMove;
};