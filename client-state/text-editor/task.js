const textEditor = document.getElementById(`editor`);
const clearButton = document.querySelector('.clear__button');

textEditor.value = localStorage.getItem(`text`);

textEditor.addEventListener(`input`, () => {
    localStorage.setItem(`text`, textEditor.value);
})

clearButton.addEventListener(`click`, () => {
    textEditor.value = ``;
    localStorage.removeItem(`text`);
})
  
