"use strict"

const findText = document.querySelector('.span-text');
const findAutor = document.querySelector('.autor-text');
const btn = document.querySelector('.btn');


// Random text
const url = 'https://type.fit/api/quotes';

async function getData () {
    const resolve = await fetch(url);
    const data = await resolve.json();
    const rand =  data[Math.floor(Math.random() * data.length)];
    findAutor.textContent = rand.author;
    findText.textContent = rand.text;
}
getData();
btn.addEventListener('click', getData);


// Audio player
const audioPlayer = new Audio;
audioPlayer.src = './sound/Ennio Morricone - Le Vent, Le Cri.mp3';

function play () {
    audioPlayer.play();
}

btn.addEventListener('click', play);

console.log(`
1. Вёрстка +10
2. При загрузке страницы приложения отображается рандомная цитата +10
3. При перезагрузке страницы цитата обновляется (заменяется на другую) +10
4. Есть кнопка, при клике по которой цитата обновляется (заменяется на другую) +10
5. Смена цитаты сопровождается любым другим эффектом, например, изменяется изображение или меняется фоновый цвет страницы, или проигрывается звук и т.д * +10
6.Можно выбрать один из двух языков отображения цитат: en/ru или en/be ** +10

Самооценка 50/60. 

Спасибо за качественную проверку, хорошего дня =)
`)
