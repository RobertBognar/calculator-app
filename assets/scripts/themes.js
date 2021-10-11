//Toggle switch themes

firstTheme.addEventListener('click', () => {
    body.classList.remove('thirdTheme');
    body.classList.remove('secondTheme');
    body.classList.add('firstTheme');
});

secondTheme.addEventListener('click', () => {
    body.classList.remove('thirdTheme');
    body.classList.remove('firstTheme');
    body.classList.add('secondTheme');
});

thirdTheme.addEventListener('click', () => {
    body.classList.remove('secondTheme');
    body.classList.remove('firstTheme');
    body.classList.add('thirdTheme');
});