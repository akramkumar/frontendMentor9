const form = document.querySelector(".form");
const inputField=document.querySelector(".email");
const errorMsg=document.querySelector(".error-msg");
const signup=document.querySelector(".sign-up-page");
const submit= document.querySelector(".submit-page");
const dismiss=document.querySelector(".dismiss");
const span=document.querySelector("span");
const image=document.querySelector(".image");
const imageDesign1=document.querySelector(".img-design1");
const imageDesign2=document.querySelector(".img-design2");
const handsubmit = e => {
    e.preventDefault(e);
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const email = data['email'];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
        signup.style.display="none";
        submit.style.display="block";
        span.textContent=email;
        
    }
    else {
        inputField.classList.add("error-input");
        errorMsg.style.display="block";
    }
}
form.addEventListener("submit", handsubmit);

dismiss.addEventListener("click", ()=>{
    signup.style.display="flex";
        submit.style.display="none";
        inputField.classList.remove("error-input");
        errorMsg.style.display="none";
        form.reset();
});
console.log(window.innerWidth);
function resize(){
    if(window.innerWidth>650){
        imageDesign1.style.display="block";
        imageDesign2.style.display="none";
    }
    else{
        imageDesign1.style.display="none";
        imageDesign2.style.display="block";
    }
}
document.addEventListener("DOMContentLoaded", function() {
    resize();
    window.addEventListener("resize", resize);
});