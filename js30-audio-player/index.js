"use strict"

// constans
const tittle = document.querySelector('.tittle');
const subtittle = document.querySelector('.subtittle');
const back = document.querySelector('.back');
const straight = document.querySelector('.straight');
const play = document.querySelector('.play');
const wrapBg = document.querySelector('.wrap-container');
const playerBg = document.querySelector('.image');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const curent = document.querySelector('.curent');
const fullTime = document.querySelector('.full-time');


// songs&artists
let songs = [
    {
        artist: 'Buoence',
        nam: "Don't Hurt Yourself",
    },
    {
        artist: 'Duolippo',
        nam: "Don't start now",
    }
];

// create play&pouse btn

let isPlay = false;

const audioPlayer = new Audio()
// audioPlayer.src = './sounds/beyonce.mp3';

function playAudio () {
    audioPlayer.play();
    isPlay = true;
}

function pouseAudio () {
    audioPlayer.pause();
    isPlay = false;
}

play.addEventListener('click', (event) => {
    if(event.target.classList.contains('play')){
        event.target.classList.toggle('pouse');
    }
    condition();
});

function condition () {
    if(isPlay){
        pouseAudio();
    }else{
        playAudio();
    }
}


// change songs

let playNum = 0;

function loadSong (song) {
    tittle.innerHTML = song.artist;
    subtittle.innerHTML = song.nam;
    audioPlayer.src = `./sounds/track${playNum + 1}.mp3`;
    playerBg.style.backgroundImage = `url(./img/cover/cover${playNum + 1}.png)`;
}

loadSong(songs[playNum]);

function playNext () {
    playNum ++;
    play.classList.add('pouse');

    if(playNum > songs.length -1){
        playNum = 0;
    }

    loadSong(songs[playNum])
    playAudio();
}

function playPrev () {
    playNum --;
    play.classList.add('pouse');

    if(playNum < 0) {
        playNum = songs.length - 1;
    }

    loadSong(songs[playNum])
    playAudio();
}

straight.addEventListener('click',playNext);
back.addEventListener('click',playPrev);


// Progres bar

function updateProgress (event) {
    // Destruction 
    const {duration, currentTime} = event.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    // add curentTime
    // curent.innerHTML = audioPlayer.currentTime;
    updateTime();
    // add fullTime
    fullTime.innerHTML = audioPlayer.duration;
}

audioPlayer.addEventListener('timeupdate', updateProgress);

// Set progress

function setProgress (event) {
    const width = this.clientWidth;
    const clickX = event.offsetX;
    const duration = audioPlayer.duration;

    audioPlayer.currentTime = (clickX / width) * duration;
} 

progressContainer.addEventListener('click', setProgress);


// Audoplay next song
audioPlayer.addEventListener('ended', playNext);

// currentTime
function updateTime () {
    let curent = curent.innerHTML;
    curent = audioPlayer.currentTime;
    let minutes = Math.floor(curent / 60);
    let seconds = curent % 60;
    if(seconds < 10) {
        seconds = `0 + ${seconds}`;
    }
    curent = `${minutes}:${seconds}`;
    audioPlayer.currentTime--;
}