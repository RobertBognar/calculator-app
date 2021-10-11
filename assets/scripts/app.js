//Importing Attributes
const firstTheme = document.querySelector('#theme1');
const secondTheme = document.querySelector('#theme2');
const thirdTheme = document.querySelector('#theme3');
const body = document.querySelector('body');
const screen = document.getElementById('display');
const secondScreen = document.getElementById('display-second');
const displayInput = document.getElementById('display-input');
const displayContainer = document.getElementById('display-container');
const numberButtons = document.getElementById('btn-num');
const symbolButtons = document.getElementById('btn-symb');
const deleteButton = document.getElementById('btn-del');
const resetButton = document.getElementById('btn-reset');
const calculateButton = document.getElementById('calculate');

//General Function For Screen Update Values & Initializing

function valueUpdated() {
    screen.textContent = displayInput.value;
}
valueUpdated();

//Function Creating & Calling For Enabling Calculator Number Keys

//Function Creating & Calling For Enabling Calculator Symbol Keys

//Delete Button Event Listener

//Reset Button Event Listener

//Calculate Button


