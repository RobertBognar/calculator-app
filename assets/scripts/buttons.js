//Click Event
keypad.addEventListener('click', function (e) {
    calculate(e.target.value);
});

body.addEventListener('keypress', (e) => {
    calculate(e.key);
})



