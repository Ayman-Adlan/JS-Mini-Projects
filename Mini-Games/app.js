// Set Vars
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('.game-1');

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice;
  randomComputerChoice();
  getResult();
  resultColor();
}));

function randomComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1 // Or * 3
  // console.log(randomNumber);
  if (randomNumber === 1) {
    computerChoice = 'Rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'Scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'Paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice;
};

function getResult() {
  if (computerChoice === userChoice) {
    result = 'Draw'
  }
  if (computerChoice === 'Rock' && userChoice === 'Paper') {
    result = 'You Win!'
  }
  if (computerChoice === 'Rock' && userChoice === 'Scissors') {
    result = 'You Lose!'
  }
  if (computerChoice === 'Paper' && userChoice === 'Scissors') {
    result = 'You Win!'
  }
  if (computerChoice === 'Paper' && userChoice === 'Rock') {
    result = 'You Lose!'
  }
  if (computerChoice === 'Scissors' && userChoice === 'Paper') {
    result = 'You Lose!'
  }
  if (computerChoice === 'Scissors' && userChoice === 'Rock') {
    result = 'You Win!'
  }

  resultDisplay.innerHTML = result;
};

function resultColor() {
  if (result === 'You Win!') {
    resultDisplay.style.color = 'green'
  }
  if (result === 'You Lose!') {
    resultDisplay.style.color = 'red'
  }
  if (result === 'Draw') {
    resultDisplay.style.color = 'orange'
  }
};


// Start memory game
// Making an array to contain card images
const cardArray = [
  {
    name: 'pizza',
    img: 'images/Memory Game/pizza.png'
  },
  {
    name: 'cheeseburger',
    img: 'images/Memory Game/cheeseburger.png'
  },
  {
    name: 'ice-cream',
    img: 'images/Memory Game/ice-cream.png'
  },
  {
    name: 'hotdog',
    img: 'images/Memory Game/hotdog.png'
  },
  {
    name: 'milkshake',
    img: 'images/Memory Game/milkshake.png'
  },
  {
    name: 'fries',
    img: 'images/Memory Game/fries.png'
  },
  {
    name: 'pizza',
    img: 'images/Memory Game/pizza.png'
  },
  {
    name: 'cheeseburger',
    img: 'images/Memory Game/cheeseburger.png'
  },
  {
    name: 'ice-cream',
    img: 'images/Memory Game/ice-cream.png'
  },
  {
    name: 'hotdog',
    img: 'images/Memory Game/hotdog.png'
  },
  {
    name: 'milkshake',
    img: 'images/Memory Game/milkshake.png'
  },
  {
    name: 'fries',
    img: 'images/Memory Game/fries.png'
  },
]
cardArray.sort(() => 0.5 - Math.random());
// console.log(cardArray) // For testing
const grid = document.querySelector('#grid');
const score = document.querySelector('#score');

let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createCards() {
  for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img');
      card.setAttribute('src', 'images/Memory Game/blank.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      card.style.cursor = 'pointer';
      grid.style.marginBottom = '40px';
      grid.appendChild(card);
      // console.log(card);
  }
};
createCards();

function checkMatch() {
  const cards = document.querySelectorAll('img');
  const cardOneId = cardsChosenIds[0];
  const cardTwoId = cardsChosenIds[1];
  // console.log(cards)
  if (cardOneId == cardTwoId) {
      cards[cardOneId].setAttribute('src', 'images/Memory Game/blank.png');
      cards[cardTwoId].setAttribute('src', 'images/Memory Game/blank.png');
      alert('You have clicked the same image!')
  }
  if (cardsChosen[0] == cardsChosen[1]) {
      alert('Awesome keep going!')
      cards[cardOneId].setAttribute('src', 'images/Memory Game/white.png');
      cards[cardTwoId].setAttribute('src', 'images/Memory Game/white.png');
      cards[cardOneId].removeEventListener('click', flipCard);
      cards[cardTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
  }else{
      cards[cardOneId].setAttribute('src', 'images/Memory Game/blank.png');
      cards[cardTwoId].setAttribute('src', 'images/Memory Game/blank.png');
      alert('Sorry try again!');
  }
  score.textContent = cardsWon.length;
  
  cardsChosen = [];
  cardsChosenIds = [];
  
  if (cardsWon.length == cardArray.length/2) {
      score.textContent = 'Congratulations you found them all!';
  }
};

function flipCard() {
  const cardId = this.getAttribute('data-id');
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  // console.log(cardsChosenIds)
  this.setAttribute('src', cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
};