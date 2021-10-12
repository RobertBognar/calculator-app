//Importing Attributes
const firstTheme = document.querySelector('#theme1');
const secondTheme = document.querySelector('#theme2');
const thirdTheme = document.querySelector('#theme3');
const body = document.querySelector('body');
const screen = document.getElementById('display');
const keypad = document.querySelector('.keypad');
const inputDisplay = document.getElementById('display-input');
const popMessage = 'Press Reset Button Before You Start Doing Your Math :)';
window.alert(`${popMessage}`);

//General Function For Screen Update Values & Initializing
function valueUpdated() {
    screen.textContent = inputDisplay.value;
}

//Defining Switch Case Attributes

let num1 = '';
let num2 = '';
let operator = '';

//Function
function calculate(param) {
    switch (param) {
        //Enabling Input On Screen via Values From HTML
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        case '.':
            if (!operator) {
                num1 += param;
            } else {
                num2 += param;
            }
            inputDisplay.value = `${num1}${operator}${num2}`;
            break;
        //Reset Attributes
        case 'reset':
            num1 = '';
            num2 = '';
            operator = '';
            inputDisplay.value = '0';
            break;
        //Defining Cases
        case 'delete':
            inputDisplay.value = inputDisplay.value.toString().slice(0, -1);
            if (!operator || operator) {
                num1 = inputDisplay.value;
                num2 = '';
            }
            break;
        case 'add':
            operator = '+';
            inputDisplay.value = `${num1}${operator}${num2}`;
            break;
        case 'subtract':
            operator = '-';
            inputDisplay.value = `${num1}${operator}${num2}`;
            break;
        case 'multiply':
            operator = '*';
            inputDisplay.value = `${num1}${operator}${num2}`;
            break;
        case 'divide':
            operator = '/';
            inputDisplay.value = `${num1}${operator}${num2}`;
            break;
        case 'equal':
            if (operator === '+') {
                inputDisplay.value = parseFloat(num1) + parseFloat(num2);
                num1 = inputDisplay.value;
                num2 = '';
                operator = '';
            }
            if (operator === '-') {
                inputDisplay.value = parseFloat(num1) - parseFloat(num2);
                num1 = inputDisplay.value;
                num2 = '';
                operator = '';
            }
            if (operator === '/') {
                inputDisplay.value = parseFloat(num1) / parseFloat(num2);
                num1 = inputDisplay.value;
                num2 = '';
                operator = '';
            }
            if (operator === '*') {
                inputDisplay.value = parseFloat(num1) * parseFloat(num2);
                num1 = inputDisplay.value;
                num2 = '';
                operator = '';
            }
            break;
    }
    valueUpdated();
}