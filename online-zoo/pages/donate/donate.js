"use strict"

// Active nav
;(function(){
    let parent = document.querySelector('.parentLi');
    let elements = parent.querySelectorAll('a');


    parent.addEventListener('click', function (e) {
        for(let a of elements) {
            a.style.color = 'white';
        }

        e.target.style.color = '#FE9013';

        // console.log(e.target.tagName);
    })
})()


// Active burger
;(function(){
    let darkBg = document.querySelector('.darck-bg');
    let icon = document.querySelector('.burger-icon');
    let menu = document.querySelector('.burger-menu');
    let closeicon = document.querySelector('.closeicon');
    let parent = document.querySelector('.burger-ul');

    icon.addEventListener('click', function () {
        menu.classList.add('activeBurger');
        darkBg.style.display = 'block';
    })

    closeicon.addEventListener('click', function () {
        menu.classList.remove('activeBurger');
        darkBg.style.display = 'none';
    })

    darkBg.addEventListener('click', function () {
        this.style.display = 'none';
        menu.classList.remove('activeBurger');
    })

    parent.addEventListener('click', function (e) {
        if(e.target.matches('a')) {
            darkBg.style.display = 'none';
            menu.classList.remove('activeBurger');
        }
    })
})()

// Active range
;(function(){
    let thumb = document.querySelector('input[type=range]');
    let num = document.querySelector('#num');

    thumb.addEventListener('input', function () {
        num.value = thumb.value;
    })

    num.addEventListener('input', function () {
        thumb.value = num.value;
    })

    const mediaQuery = window.matchMedia('(max-width: 1599px)')
    const mediaQuery2 = window.matchMedia('(max-width: 999px)')

    if(mediaQuery.matches) {
        thumb.max = '2000';
    }

    if(mediaQuery2.matches) {
        thumb.max = '500';
    }
})()