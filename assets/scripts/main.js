// When the DOM is ready, we list the buttons and hook 'em up with 'onclick' listners.

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

/**
 * "The main game loop fires up as soon as the script loads, 
 * and it gets another shot after crunching the user's answers."
 */
function runGame() {
    let randomNum1 = Math.floor(Math.random() * 25 + 1);
    let randomNum2 = Math.floor(Math.random() * 25 + 1);
}

function checkAnswer() { }

function calculateCorrectAnswer() { }

function incrementScore() { }

function incrementWrongAnswer() { }

function displayAddtion() { }

function displayDivision() { }

function displayMultiplication() { }

function displaySubtraction() { }





