const textEditor = document.getElementById(`editor`);
const storedText = localStorage.getItem(`text`);
const clearButton = document.querySelector('.clear__button')

textEditor.addEventListener(`input`, () => {
    localStorage.setItem(`text`, textEditor.value);
})

clearButton.addEventListener(`click`, () => {
    editor.value = '';
    localStorage.clear();
  });
  
editor.value = localStorage.getItem(`editorValue`);
