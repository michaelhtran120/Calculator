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
// Variable to store mathematical function.
let calculate;

function updateDisplay(valueDisplay) {
    displayText.innerText = valueDisplay;
}

numberButton.forEach((button) => {
    button.addEventListener('click', () => {
        valueDisplay += button.textContent;
        updateDisplay(valueDisplay);
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
const multiplicationButton = document.getElementById('multiplication-button');
const divisionButton = document.getElementById('division-button');
const equalButton = document.getElementById('equal-button');

    // Event Listener to get calculator to work.
additionButton.addEventListener('click', () => {
    if (valueDisplay === '') {
        calculate = addition;
        decimalButton.disabled = false;
    } else {
        valueString.push(parseFloat(valueDisplay));
        valueDisplay = '';
        calculate = addition;
        decimalButton.disabled = false;
    }
})

subtractionButton.addEventListener('click', () => {
    if (valueDisplay === '') {
        calculate = subtraction;
        decimalButton.disabled = false;
    } else {
        valueString.push(parseFloat(valueDisplay));
        valueDisplay = '';
        calculate = subtraction;
        decimalButton.disabled = false;
    }
})

divisionButton.addEventListener('click', () => {
    if (valueDisplay === '') {
        calculate = division;
        decimalButton.disabled = false;
    } else {
        valueString.push(parseFloat(valueDisplay));
        valueDisplay = '';
        calculate = division;
        decimalButton.disabled = false;
    }
})

multiplicationButton.addEventListener('click', () => {
    if (valueDisplay === '') {
        calculate = multiplication;
        decimalButton.disabled = false;
    } else {
        valueString.push(parseFloat(valueDisplay));
        valueDisplay = '';
        calculate = multiplication;
        decimalButton.disabled = false;
    }
})

equalButton.addEventListener('click', () => {
    if (valueDisplay == 0 && calculate == division) {
        valueDisplay = 'ERROR!';
        updateDisplay(valueDisplay);
    } else if (valueDisplay == '' || calculate == '') {
        valueString = [];
        valueDisplay = '';
        calculate = ''
    } else if (decimalCheck(valueDisplay) === true) {
        valueString.push(parseFloat(valueDisplay));
        valueDisplay = operate(valueString, calculate);
        updateDisplay(valueDisplay.toFixed(2));
        valueString = [valueDisplay];
        valueDisplay = '';
        calculate = '';
        decimalButton.disabled = false;
    } else {
        valueString.push(parseFloat(valueDisplay));
        valueDisplay = operate(valueString, calculate);
        updateDisplay(valueDisplay);
        valueString = [valueDisplay];
        valueDisplay = '';
        calculate = '';
        decimalButton.disabled = false;
    }
})

//Function to test if number contains decimal => if decimal, toFixed(2).
function decimalCheck(num) {
    if ((num - Math.floor(num)) !== 0) {
        return true;
    } else {
        return false;
    }
}

// Decimal point button and event listener.
const decimalButton = document.getElementById('decimal-button');

decimalButton.addEventListener('click', () => {
    if (valueDisplay.includes('.')) {
        decimalButton.disabled = true;
    } else {
        valueDisplay += decimalButton.textContent;
        updateDisplay(valueDisplay);
    }
})