"use strict" 

// variables for pets burger menu!!!
let burgerIcon = document.querySelector('.burger');
let burgerIcon2 = document.querySelector('.burger2');
let darkBg = document.querySelector('.dark-bg');
let burgerMenu = document.querySelector('.burger-menu');
let burgerList = document.querySelector('.burger-list');

// pets burger menu!!!
burgerIcon.addEventListener('click', function () {

    burgerList.classList.add('active-burger-list');
    burgerIcon.classList.add('rotate');
    darkBg.classList.add('block');
    burgerList.classList.remove('slide-right');
})

burgerList.addEventListener('click', function (event) {
  let target = event.target;
  if(target.tagName == 'A' || target.tagName == 'IMG') {
    burgerList.classList.remove('active-burger-list');
    darkBg.classList.remove('block');
    burgerIcon.classList.remove('rotate');
    burgerIcon2.classList.add('rotate');
    burgerList.classList.add('slide-right');
  }
  // alert(target.tagName);
})

darkBg.addEventListener('click', function (event) {
  if(event.target.tagName == 'DIV') {
    darkBg.classList.remove('block');
    burgerList.classList.remove('active-burger-list');
    burgerIcon.classList.remove('rotate');
    burgerList.classList.add('slide-right');
  }
})