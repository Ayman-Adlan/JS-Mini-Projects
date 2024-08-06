/*
const add = function() {
  console.log(2+3);
}
add();
add();

function runTwice(fun) {
  fun();
  fun();
}
runTwice(function() {
  console.log('12b');
})
runTwice(add)
*/

function toggle() {
  const btn = document.querySelector('.js-btn');
  btn.innerText = 'Loading'
  setTimeout(function() {
    btn.innerText = 'Finished'
  }, 2000);
}

function addToCartBtn() {
  const cartBtn = document.querySelector('.js-add-to-cart-btn');
  cartBtn.innerText = 'Added';
  setTimeout(function() {
    cartBtn.innerText = '';
  }, 2000);
}
/*
function displayMessage() {
  const messageElement = document.querySelector('.js-message');
  messageElement.innerHTML = 'Added';

  setTimeout(function() {
    messageElement.innerHTML = '';
  }, 2000);
}
*/
let timeoutId;

function displayMessage() {
  const messageElement = document.querySelector('.js-message');
  messageElement.innerHTML = 'Added';

  // First, cancel the previous timeout so that
  // it doesn't remove the message too quickly.
  clearTimeout(timeoutId);

  timeoutId = setTimeout(function() {
    messageElement.innerHTML = '';
  }, 2000);
}

let messeges = 2;
setInterval(function() {
  if (document.title === 'AD Functions') {
    document.title = '(2) New messages';
  } else {
    document.title = 'AD Functions';
  }
}, 1000);