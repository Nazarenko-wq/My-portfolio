"use strict"

// burger
;(function(){
    let burgerIcon = document.querySelector('.burger');
    let burgerList = document.querySelector('.burger-list');
    
    burgerIcon.addEventListener('click', function foo(){
        burgerList.classList.remove('slide-right');
        burgerList.classList.add('active-burger-list');
    })

    let burgerIcon2 = document.querySelector('.burger2');

    burgerIcon2.addEventListener('click', function () {
        burgerList.classList.remove('active-burger-list');
        burgerList.classList.add('slide-right');
    })

    let parent = document.querySelector('.parent-list');

    parent.addEventListener('click', function (event) {
        if(event.target.matches('a')) {
            burgerList.classList.add('slide-right');
        }        
    })

})();

// modal window
;(function(){
    let modalContainer = document.querySelector('.modal-container');
    let btn = document.querySelector('.first-btn');

    btn.addEventListener('click', function () {
        modalContainer.classList.add('modal-display');
    })

    let closeIcon = document.querySelector('.close-icon');

    closeIcon.addEventListener('click', function () {
        modalContainer.classList.remove('modal-display');
    })
})();


// Gallery scope
;(function(){
    let closeIcon = document.querySelector('.gallery-close-icon');
    let galleryScope = document.querySelector('.gallery-scope');

    closeIcon.addEventListener('click', function () {

        galleryScope.style.display = 'none';
    })

    let gallery = document.querySelector('.gallery');
    let currentImg = document.querySelector('.current-img');

    gallery.addEventListener('click', function (event) {
        if(event.target.matches('img')) {
            galleryScope.style.display = 'flex';
            currentImg.src = event.target.src;
            // this.style.backgroundColor = 'red';

        }
    })

})();

// add yandex map
;(function(){


    function init () {
        let map = new ymaps.Map('map', {
            center: [52.421180901028,31.019892651245094],
            zoom: 16
        });
    }

    ymaps.ready(init);
})();