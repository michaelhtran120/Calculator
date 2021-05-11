// Mathematical functions
function addition(array) {
    const add = (total, num) => total + num;
    return array.reduce(add);
}

function subtraction(array) {
    const subtract = (total, num) => total - num;
    return array.reduce(subtract);
}

function multiplication(array) {
    const multiply = (total, num) => total * num;
    return array.reduce(multiply);
}

function division(array) {
    const divide = (total, num) => total / num;
    return array.reduce(divide);
}
// Function to call mathematical functions and values.
function operate(array, calculate) {
    return calculate(array);
}

// Function to update text display when number button are pressed.
const displayText = document.getElementById('display-text');
const numberButton = document.querySelectorAll('.number-button')

//Variable to store value
let valueDisplay = '';
let valueString = [];
let calculate;

function updateDisplay(valueDisplay) {
    displayText.innerText = valueDisplay;
}

numberButton.forEach((button) => {
    button.addEventListener('click', () => {
        if (!valueDisplay == '' && !calculate == '') {
            clearDisplay();
            valueDisplay += button.textContent;
            updateDisplay(valueDisplay);
        } else {
            valueDisplay += button.textContent;
            updateDisplay(valueDisplay);
        }
    });
});

// Function to clear
const clearButton = document.getElementById('clear-button');

function clearDisplay() {
    displayText.innerText = '';
    valueDisplay = '';
}

clearButton.addEventListener('click', () => {
    valueString = [];
    clearDisplay();
});

// Declaring variable for mathematical functions.
const additionButton = document.getElementById('addition-button');
const subtractionButton = document.getElementById('subtraction-button');
const mulitplicationButton = document.getElementById('multiplication-button');
const divisionButton = document.getElementById('division-button');
const equalButton = document.getElementById('equal-button');

// Event Listener to get calculator to work.
additionButton.addEventListener('click', () => {
    valueString.push(parseInt(valueDisplay));
    calculate = addition;
})

equalButton.addEventListener('click', () => {
    valueString.push(parseInt(valueDisplay));
    valueDisplay = operate(valueString, calculate);
    updateDisplay(valueDisplay);
    valueString = [];
    calculate = '';
})
