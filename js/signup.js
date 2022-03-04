// form validation for the signup page
let email = document.querySelector('#inputEmail4');
let password = document.querySelector('#inputPassword4');
let selectOption = document.querySelector('#inputState');
let message = document.querySelector('.message');
let form = document.querySelector('form');

form.addEventListener('submit', formValidation)
function formValidation(e) {
    e.preventDefault();
    if (email.value === "" || password.value === "" || selectOption.value === "") {
        message.style.color = "red";
        message.innerHTML = "signup form can not be submitted blank input necessary details"
    } else {
        message.style.color = "green";
        message.innerHTML = "sign up form created"
    }

}