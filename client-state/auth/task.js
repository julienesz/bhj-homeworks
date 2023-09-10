const signinForm = document.getElementById(`signin__form`);
const welcome = document.getElementById(`welcome`);
const userId = document.getElementById(`user_id`);
const signin = document.getElementById(`signin`);
const exit = document.getElementById(`exit`);


function auth() {
    signinForm.addEventListener(`submit`, (e) => {
        e.preventDefault();
        const formData = new FormData(signinForm);
        const xhr = new XMLHttpRequest();
        xhr.open(`POST`, `https://students.netoservices.ru/nestjs-backend/auth`);
        xhr.responseType = `json`;
        xhr.send(formData);
        xhr.addEventListener(`load`, () => {
            if(xhr.status === 200) {
                let data = xhr.response;
                if (data.success) {
                    signin.classList.remove(`signin_active`);
                    welcome.classList.add(`welcome_active`);
                    localStorage.setItem(`userId`, data.user_id);
                    userId.innerHTML = localStorage.getItem(`userId`);
                } else {
                    alert(`Неверный логин/пароль`);
                    signinForm.reset();
                }
            } else {
                alert(`Ошибка: ` + xhr.status);
                signinForm.reset();
            }
            });
        });
};

exit.addEventListener(`click`, () => {
    welcome.classList.remove(`welcome_active`);
    signin.classList.add(`signin_active`);
    userId.innerHTML = localStorage.getItem(`userId`);
    signinForm.reset();
});