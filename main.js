const submitBtn = document.getElementById("submit-btn");

console.log("helloooo");


function checkPassword() {

let password = document.getElementById("password").value;
let confirmPassword = document.getElementById("confirm-password").value;
let message = document.getElementsByClassName("error-message");



if (password !== confirmPassword) {
    message.style.visibility = visible;
}}

submitBtn.addEventListener("click", checkPassword);