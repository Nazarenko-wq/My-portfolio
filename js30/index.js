"use strict"

const mainContainer = document.querySelector('.main-container');
const play = document.querySelector('.play');

// create player
let isPlay = false;

const audioPlayer = new Audio();
audioPlayer.src = `./assets/sounds/forest.mp3`;

function playAudio () {
    audioPlayer.currentTime = 0;
    audioPlayer.play();
    isPlay = true;
}

function pauseAudio () {
    audioPlayer.pause();
    isPlay = false;
}

// Active btn
const findLi = document.querySelectorAll('.nav-li');
findLi.forEach((elem) => elem.addEventListener('click', activBtn));


function activBtn (event) {
    const target = event.target;
    if(target.classList.contains('nav-li')){
        findLi.forEach((elem) => elem.classList.remove('active'));
        target.classList.add('active');
        // change play-btn
        play.classList.add('activePlay')
        // change background
        mainContainer.style.backgroundImage = `url("./assets/img/${target.dataset.item}.jpg")`;
        // audio player
        audioPlayer.src = `./assets/sounds/${target.dataset.item}.mp3`
        playAudio();
    }
}

// change play-btn
play.addEventListener('click', (event) => {
    if(event.target.classList.contains('play')) {
        play.classList.toggle('activePlay');
    }
    if(isPlay) {
        pauseAudio();
    }else{
        playAudio();
    }

})
