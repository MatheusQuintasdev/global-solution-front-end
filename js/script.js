const menuBtn = document.querySelector("#menu-btn");

const nav = document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("active");

});

const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {

question.addEventListener("click", () => {

const answer = question.nextElementSibling;

answer.classList.toggle("show");

});

});