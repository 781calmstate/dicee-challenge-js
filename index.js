let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomImage1 = 'images/dice' + randomNumber1 + '.png';

document.querySelector('.img1').setAttribute('src', randomImage1);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImage2 = 'images/dice' + randomNumber2 + '.png';

document.querySelector('.img2').setAttribute('src', randomImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').innerHTML = 'Player 1 wins';
} else if (randomNumber1 < randomNumber2) {
  document.querySelector('h1').innerHTML = 'Player 2 wins';
} else if (randomNumber1 === randomNumber2) {
  document.querySelector('h1').innerHTML = 'Draw';
}
