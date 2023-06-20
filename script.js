'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

console.log(secretNumber);

document.querySelector('.question').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
        const guessingNumber = Number(document.
                querySelector('.number-input').value);
        console.log(guessingNumber, typeof guessingNumber);

        if (!guessingNumber) {
                document.querySelector('.guess-message').
                        textContent = 'Введите число';
        } else if (guessingNumber === secretNumber) {
                document.querySelector('.guess-message').textContent = 'Правильно';
        } else if (guessingNumber > secretNumber) {

                if (score > 1) {
                        document.querySelector('.guess-message').textContent = 'Слишком большое число';
                        score--;
                        document.querySelector('.score').textContent = score;
                } else {
                        document.querySelector('.guess-message').textContent = 'Game Over';
                }


        } else if (guessingNumber < secretNumber) {
                if (score > 1) {
                        document.querySelector('.guess-message').textContent = 'Слишком маленькое число';
                        score--;
                        document.querySelector('.score').textContent = score;
                } else {
                        document.querySelector('.guess-message').textContent = 'Game Over';
                        document.querySelector('.score').textContent = 0;
                }
        }
});


