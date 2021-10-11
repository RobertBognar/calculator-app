//Importing Attributes
const firstTheme = document.querySelector('#theme1');
const secondTheme = document.querySelector('#theme2');
const thirdTheme = document.querySelector('#theme3');
const body = document.querySelector('body');
const screen = document.getElementById('display');
const keypad = document.querySelector('.keypad');
const inputDisplay = document.getElementById('display-input');
const displayContainer = document.getElementById('display-container');
const numberButtons = document.getElementById('btn-num');
const symbolButtons = document.getElementById('btn-symb');
const deleteButton = document.getElementById('btn-del');
const resetButton = document.getElementById('btn-reset');
const calculateButton = document.getElementById('calculate');


//General Function For Screen Update Values & Initializing
function valueUpdated() {
    screen.textContent = inputDisplay.value;
}
valueUpdated();

//Switch Case Attributes

let first = '';
let second = '';
let operator = '';

//Function
