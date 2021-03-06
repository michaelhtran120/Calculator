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
const numberButton = document.querySelectorAll('.number-button');

// // //
let displayValue = ''; // Variable to store value to be displayed on calc
let operator = ''; // Variable to store mathemtical function
let arrayOfValues = []; // Variable to store values to be calculated

function updateDisplay(displayValue) {  // function to update the display
    displayText.innerText = displayValue;
}

numberButton.forEach((button) => {  // Event listener for numerical buttons
    button.addEventListener('click', () => {
        displayValue += button.textContent;
        updateDisplay(displayValue);
    });
});  

// Function to clear (ac) and back (c) & eventlistener for 'ac' and 'c' button
// // Declaring Variable
const acButton = document.getElementById('ac-button');
const cButton = document.getElementById('c-button');

// // Event Listener for 'ac' button
acButton.addEventListener('click', () => {
    acClear();
});

// //'ac' button clear Function
function acClear() {
    displayText.innerText = '';
    displayValue = '';
    arrayOfValues = [];
}
// //EventListener for 'c' button
cButton.addEventListener('click', () => { 
    if (displayValue === '' || typeof displayValue === 'number') {
        // do nothing
    } else {
    cDelete();
    }
});

// // 'c' button delete function
function cDelete() {
    displayValue = displayValue.slice(0,-1);
    updateDisplay(displayValue);
}

// Decimal Button
// // Declaring variable
const decimalButton = document.getElementById('decimal-button');

//  Event Listener
decimalButton.addEventListener('click', () => {
    if (displayValue.includes('.')) {
    // do nothing.
    } else {
        displayValue += decimalButton.textContent;
        updateDisplay(displayValue);
    }
})

// Declaring variable for mathematical functions.
const percentageButton = document.getElementById('percent-button');
const addButton = document.getElementById('addition-button');
const subtractButton = document.getElementById('subtraction-button');
const multiplyButton = document.getElementById('multiplication-button');
const divideButton = document.getElementById('division-button');
const equalButton = document.getElementById('equal-button');


//  Event Listener for mathematical function
// // Equal Button Event Listener
equalButton.addEventListener('click', () => {
    if (operator === '') { 
        // Do nothing - prevent error.
    } else {
        arrayOfValues.push(parseFloat(displayValue));
        displayValue = operate(arrayOfValues, operator);
            if (findDecimal(displayValue) === true){
                displayValue = displayValue.toFixed(2);
                updateDisplay(displayValue);
                arrayOfValues = [];
                arrayOfValues.push(parseFloat(displayValue));
                displayValue = '';
                operator = '';
            } else {
                updateDisplay(displayValue);
                arrayOfValues = [displayValue];
                displayValue = '';
                operator = '';
            }
    }
})

// // Percentage button listener
percentageButton.addEventListener('click', () => {
    if (displayValue === '') {
        displayValue = parseFloat((arrayOfValues/100).toFixed(2));
        updateDisplay(displayValue);
        arrayOfValues = [];
    } else {
        displayValue = (displayValue/100);
        updateDisplay(displayValue);
    }
})
// // Addition button listener
addButton.addEventListener('click', () => {
    if (displayValue === '') {
        operator = addition;
    } else {
        arrayOfValues.push(parseFloat(displayValue));
        operator = addition;
        displayValue = '';
    }  
})

// // Subtraction button listener
subtractButton.addEventListener('click', () => {
    if (displayValue === '') {
        operator = subtraction;
    } else {
        arrayOfValues.push(parseFloat(displayValue));
        operator = subtraction;
        displayValue = '';
    }  
})

// // Divison button listener
divideButton.addEventListener('click', () => {
    if (displayValue === '') {
        operator = division;
    } else {
        arrayOfValues.push(parseFloat(displayValue));
        operator = division;
        displayValue = '';
    }
})

// // Multiply button listener
multiplyButton.addEventListener('click', () => {
    if (displayValue === '') {
        operator = multiplication;
    } else {
        arrayOfValues.push(parseFloat(displayValue));
        operator = multiplication;
        displayValue = '';
    }
})

//Function to test if at least one value in array contains decimal => if decimal, toFixed(2).
// function decimalCheck(arrayOfValues) {
//     if (arrayOfValues.some(findDecimal) === true){
//         return true;
//     } else {    
//         return false;
//     }
// }
// function to test if number contains decimal.
function findDecimal(number) {
    if (number % 1 != 0) {
        return true;
    } else {
        return false;
    }
}






// //     // Event Listener to get calculator to work.
// // additionButton.addEventListener('click', () => {
// //     if (valueDisplay === '') {
// //         calculate = addition;
// //         decimalButton.disabled = false;
// //     } else {
// //         valueString.push(parseFloat(valueDisplay));
// //         valueDisplay = '';
// //         calculate = addition;
// //         decimalButton.disabled = false;
// //     }
// // })
// // divisionButton.addEventListener('click', () => {
// //     if (valueDisplay === '') {
// //         calculate = division;
// //         decimalButton.disabled = false;
// //     } else {
// //         valueString.push(parseFloat(valueDisplay));
// //         valueDisplay = '';
// //         calculate = division;
// //         decimalButton.disabled = false;
// //     }
// // })

// // subtractionButton.addEventListener('click', () => {
// //     if (valueDisplay === '') {
// //         calculate = subtraction;
// //         decimalButton.disabled = false;
// //     } else {
// //         valueString.push(parseFloat(valueDisplay));
// //         valueDisplay = '';
// //         calculate = subtraction;
// //         decimalButton.disabled = false;
// //     }
// // })

// // multiplicationButton.addEventListener('click', () => {
// //     if (valueDisplay === '') {
// //         calculate = multiplication;
// //         decimalButton.disabled = false;
// //     } else {
// //         valueString.push(parseFloat(valueDisplay));
// //         valueDisplay = '';
// //         calculate = multiplication;
// //         decimalButton.disabled = false;
// //     }
// // })



// // equalButton.addEventListener('click', () => {
// //     if (valueDisplay == 0 && calculate == division) {
// //         valueDisplay = 'ERROR!';
// //         updateDisplay(valueDisplay);
// //     } else if (valueDisplay == '' || calculate == '') {
// //         valueString = [];
// //         valueDisplay = '';
// //         calculate = ''
// //     } else if (decimalCheck(valueDisplay) === true) {
// //         valueString.push(parseFloat(valueDisplay));
// //         valueDisplay = operate(valueString, calculate);
// //         updateDisplay(valueDisplay.toFixed(2));
// //         valueString = [valueDisplay];
// //         valueDisplay = '';
// //         calculate = '';
// //         decimalButton.disabled = false;
// //     } else {
// //         valueString.push(parseFloat(valueDisplay));
// //         valueDisplay = operate(valueString, calculate);
// //         updateDisplay(valueDisplay);
// //         valueString = [valueDisplay];
// //         valueDisplay = '';
// //         calculate = '';
// //         decimalButton.disabled = false;
// //     }
// // })