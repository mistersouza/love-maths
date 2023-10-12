document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.querySelectorAll('button');

    for (let button of buttons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('data-type' == 'submit')) {
                console.log('You\ve clicked submit!');
                return;
            }
            let gameType = this.getAttribute('data-type');
            alert(`You've clicked ${gameType}`);

        });
    }
});

function runGame() { }

function checkAnswer() { }

function calculateCorrectAnswer() { }

function incrementScore() { }

function incrementWrongAnswer() { }

function displayAddtion() { }

function displayDivision() { }

function displayMultiplication() { }

function displaySubtraction() { }





