const toggleMenu = document.querySelector("#btnHumberger");
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const body = document.querySelector('body')





toggleMenu.addEventListener("click", () => {

  if (header.classList.contains("open")) { // close menu
    body.classList.remove('no-scroll');
    header.classList.remove("open");
    fadeElems.forEach(function(element){
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
    })
  } else { // open menu
    body.classList.add('no-scroll');
    header.classList.add("open");
    fadeElems.forEach(function(element){
        element.classList.add('fade-in');
        element.classList.remove('fade-out');
    })
  }
});
