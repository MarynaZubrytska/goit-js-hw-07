const inputElem = document.querySelector('#name-input');
const outputElem = document.querySelector('#name-output');

inputElem.addEventListener('input', ()=> {
    const userName = inputElem.value.trim();

    if (userName === '') {
        outputElem.textContent = 'Anonymous'
    } else {
        outputElem.textContent = userName
    }
});