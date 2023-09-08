const modal = document.querySelector(`.modal`);
const modalCloseBtn = document.querySelector(`.modal__close`);

const pairs = document.cookie.split(`; `)
const cookie = pairs.find((i) => i.startsWith(`modal` + `=`));

if (!cookie) {
  modal.classList.add(`modal_active`);
} else {
  modal.classList.remove(`modal_active`);
};

modalCloseBtn.addEventListener(`click`, (event) => {
  modal.classList.remove(`modal_active`);
  document.cookie = `modal=close`;
  event.preventDefault();
});