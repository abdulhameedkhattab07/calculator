let currentInput = '';
let previousInput = '';
const display = document.querySelector('#display')
display.value = '0';
let operator = '';

function appendValue(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    display.value = '0';
}

function setOperator(op) {
    if (currentInput === '') return; // Prevent setting operator without a number
    if (previousInput !== '') {
        operate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function operate() {
    if (previousInput === '' || currentInput === '' || operator === '') return;

    let result;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    // using switch statement instead of if...else statement
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }

    display.value = result;
    currentInput = result.toString();
    previousInput = '';
    operator = '';
}