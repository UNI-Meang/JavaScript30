const loginForm = document.getElementById('login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';
// link = 'index.html';

function loginSubmit(e){
    e.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

// function movePage(){
//     const username = loginInput.value;
//     localStorage.setItem(USERNAME_KEY, username);
//     location.href = link;
// }

function paintGreetings(username){
    greeting.innerHTML = `
    <p class="greeting"> Welcome! ${username}</p>
    `;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const checkUsername = localStorage.getItem(USERNAME_KEY);

if(checkUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', loginSubmit);
} else {
    paintGreetings(checkUsername);
}

// if(checkUsername === null) {
//     loginForm.classList.remove(HIDDEN_CLASSNAME);
//     loginForm.addEventListener('submit', movePage);
// } else {
//     location.href = link;
// }