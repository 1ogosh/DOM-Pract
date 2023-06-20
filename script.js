'use strict';

//сделать кнопку сначала

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

console.log(secretNumber);

document.querySelector('.again').addEventListener('click', function () {
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        score = 20;
        
        document.querySelector('.guess-message').textContent = "Начни угадывать!";
        document.querySelector('body').style.backgroundColor = '#000';
        document.querySelector('.question').style.width = '25rem';
        document.querySelector('.question').textContent = '???';
        document.querySelector('.score').textContent = score;
        document.querySelector('.number-input').value = '';
})

document.querySelector('.check').addEventListener('click', function () {
        const guessingNumber = Number(document.
                querySelector('.number-input').value);
        console.log(guessingNumber, typeof guessingNumber);

        //No input
        if (!guessingNumber) {
                document.querySelector('.guess-message').textContent = 'Введите число';

                //Player won
        } else if (guessingNumber === secretNumber) {
                document.querySelector('.guess-message').textContent = 'Правильно';
                document.querySelector('.question').textContent = secretNumber;
                document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
                document.querySelector('.question').style.width = '50rem';

                //Too high number
        } else if (guessingNumber > secretNumber) {

                if (score > 1) {
                        document.querySelector('.guess-message').textContent = 'Слишком большое число';
                        score--;
                        document.querySelector('.score').textContent = score;
                } else {
                        document.querySelector('.guess-message').textContent = 'Game Over';
                }

                //Too low number
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


