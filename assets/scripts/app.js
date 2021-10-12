//Importing Attributes
const firstTheme = document.querySelector('#theme1');
const secondTheme = document.querySelector('#theme2');
const thirdTheme = document.querySelector('#theme3');
const body = document.querySelector('body');
const screen = document.getElementById('display');
const keypad = document.querySelector('.keypad');
const inputDisplay = document.getElementById('display-input');
const deleteButton = document.getElementById('#btn-del');
const resetButton = document.getElementById('#btn-reset');
const popMessage = 'Press RESET BUTTON/X On Keyboard For Display Reset! Press C On Keyboard For Deleting Single Digits!';
const secondPopMessage = 'Enjoy! :)';
window.alert(`${popMessage}`);
window.alert(`${secondPopMessage}`);

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
        case 'x':
            num1 = '';
            num2 = '';
            operator = '';
            inputDisplay.value = '0';
            break;
        //Defining Cases
        case 'c':
            inputDisplay.value = inputDisplay.value.toString().slice(0, -1);
            if (!operator || operator) {
                num1 = inputDisplay.value;
                num2 = '';
            }
            break;
        case '+':
            operator = '+';
            inputDisplay.value = `${num1}${operator}${num2}`;
            break;
        case '-':
            operator = '-';
            inputDisplay.value = `${num1}${operator}${num2}`;
            break;
        case '*':
            operator = '*';
            inputDisplay.value = `${num1}${operator}${num2}`;
            break;
        case '/':
            operator = '/';
            inputDisplay.value = `${num1}${operator}${num2}`;
            break;
        case '=':
            if (operator === '+') {
                inputDisplay.value = Number(num1) + Number(num2);
                num1 = inputDisplay.value;
                num2 = '';
                operator = '';
            }
            if (operator === '-') {
                inputDisplay.value = Number(num1) - Number(num2);
                num1 = inputDisplay.value;
                num2 = '';
                operator = '';
            }
            if (operator === '/') {
                inputDisplay.value = Number(num1) / Number(num2);
                num1 = inputDisplay.value;
                num2 = '';
                operator = '';
            }
            if (operator === '*') {
                inputDisplay.value = Number(num1) * Number(num2);
                num1 = inputDisplay.value;
                num2 = '';
                operator = '';
            }
            break;
    }
    valueUpdated();
}