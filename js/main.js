const button = document.querySelector(".faqs__item");
const info = document.querySelector(".faqs__item-info--opened")
const burger = document.querySelector(".header__burger")
const nav = document.querySelector(".header__nav")
burger.addEventListener("click", function() {
    burger.classList.toggle("header__burger--opened")
    nav.classList.toggle("header__nav--opened")
})
button.addEventListener("click", function() {
    button.classList.toggle("faqs__item--opened")
    info.classList.toggle("faqs__item-info")
    
})



