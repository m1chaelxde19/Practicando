const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const output = document.querySelector('.output');

btn.addEventListener('click', () => {
    const value = input.value;
    output.innerHTML = value;
});
