let xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    const jsonXhr = JSON.parse(xhr.responseText); 
    const answers = jsonXhr.data.answers;

    document.getElementById('poll__title').textContent = jsonXhr.data.title;

    answers.forEach(element => {
      document.getElementById('poll__answers').insertAdjacentHTML(
        'beforeEnd',
        `<button class="poll__answer">${element}</button>`
      );
    });

    Array.from(document.getElementsByClassName('poll__answer')).forEach(elem => {
      elem.addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!');
      })
    })
  }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();