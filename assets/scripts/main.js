// When the DOM is ready, we list the buttons and hook 'em up with 'onclick' listners.t the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
                return;
            }
            let operation = this.getAttribute("data-type");
            play(operation);
        });
    }

    play("add");

});

/**
 * The main game loop fires up as soon as the script loads, 
 * and it gets another shot after crunching the user's answers.
 */
function play(operation) {
    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (operation === "add") {
        displayAddition(num1, num2);
    } else {
        alert(`We can't hack that ${operation} yet`);
        throw `Operation unknown: ${operation}. Quiting`;
    }

}

/**
 * Match the answer with what's in that calculateCorrectAnswer array's first slot.
 */
function checkAnswer() {

    let guess = parseInt(document.getElementById("answer-box").value);
    let [answer, operation] = calculateCorrectAnswer();


    guess === answer
        ? alert('You\'ve got it right. Way to go!')
        : alert(`Awwww.... you've guessed ${guess}. The correct answer is ${answer}!`);
    play(operation);

}

/**
 * Grab those two numbers and the operator, then hand me the right answer!
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand-1').innerText);
    let operand2 = parseInt(document.getElementById('operand-2').innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "add"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Quitin'`;
    }

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAddition(operand1, operand2) {

    document.getElementById('operand-1').textContent = operand1;
    document.getElementById('operand-2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}

function displaySubtract() {

}

function displayMultiply() {

}

