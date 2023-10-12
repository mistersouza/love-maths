// When the DOM is ready, we list the buttons and hook 'em up with 'onclick' listners.

document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.querySelectorAll('button');

    for (let button of buttons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('data-type' == 'submit')) {
                console.log('You\ve clicked submit!');
                return;
            }
            let operation = this.getAttribute('data-type');
            play(operation);

        });
    }

    play('add');
});

/**
 * "The main game loop fires up as soon as the script loads, 
 * and it gets another shot after crunching the user's answers."
 */
function play(operation) {
    let randomNum1 = Math.floor(Math.random() * 25 + 1);
    let randomNum2 = Math.floor(Math.random() * 25 + 1);

    if (operation === 'add') {
        displayAddtion(randomNum1, randomNum2);
    } else {
        alert(`Sorry. I can't hack that ${operation} :/`);
        throw `Unknown opeartion: ${operation}. Quiting game`;
    }
}

function checkAnswer() { }

/**
 * "Grab those two numbers and the operator, then hand me the right answer!"
 */
function calculateCorrectAnswer() {
    let operand1 = Number.parseInt(document.querySelector('#operand1').innerText);
    let operand2 = Number.parseInt(document.querySelector('#operant2'.innerText));
    let operator = document.querySelector('#operator').innerText;

    switch (operator) {
        case '+':
            return [operand1 + operand2, 'add'];
        case '-':
            return [operand1 - operand2, 'multiply'];
        case '*':
            return [operand1 * operand2, 'divide'];
        default:
            alert(`${operator} isn't avalaible`)
            throw `Unimplemented operator: ${operator}. Quiting game`
    }
}

function incrementScore() { }

function incrementWrongAnswer() { }

function displayAddtion(operand1, operand2) {
    document.querySelector('#operand1').textContent = operand1;
    document.querySelector('#operand2').textContent = operand2;
    document.querySelector('#operator').textContent = '+';
}

function displayDivision() { }

function displayMultiplication() { }

function displaySubtraction() { }





