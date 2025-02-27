const form = document.querySelector(".form");
const inputField=document.querySelector(".email");
const errorMsg=document.querySelector(".error-msg");
const signup=document.querySelector(".sign-up-page");
const submit= document.querySelector(".submit-page");
const handsubmit = e => {
    e.preventDefault(e);
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const email = data['email'];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
        console.log(true);
    }
    else {
        inputField.classList.add("error-input");
        errorMsg.style.display="block";
    }
}
form.addEventListener("submit", handsubmit);
