//Click Event
keypad.addEventListener('click', function (e) {
    calculate(e.target.value);
});
//Enabling Keyboard Input
window.addEventListener('keypress', (e) => {
    calculate(e.key);
});

