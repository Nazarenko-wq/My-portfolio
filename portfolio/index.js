"use strict"
// Internationalization

const i18Obj = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Rotouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'send-message': 'Send message'
    },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'send-message': 'Отправить'
    }
}

// Activ translate btns
const findLangwegBtns = document.querySelectorAll('.btn-switch');
findLangwegBtns.forEach((elem) => elem.addEventListener('click', changeActivBnt));

function changeActivBnt (event) {
    const target = event.target;
    if(target.classList.contains('btn-switch')){
        findLangwegBtns.forEach((elem) => elem.classList.remove('light'));
        target.classList.add('light');
    }
}



// Translate to English
const findEnBtn = document.querySelector('.en');
findEnBtn.addEventListener('click', translateToEnglish);

function translateToEnglish (event) {
    const target = event.target;
    if(target.classList.contains('en')){
        for(let elem of document.querySelectorAll('[data-i18]')){
            let field = elem.dataset.i18;
            elem.innerHTML = i18Obj.en[field];
        }
    }
}

// Translate to Russian
const findRuBtn = document.querySelector('.ru');
findRuBtn.addEventListener('click', translateToRussian);

function translateToRussian (event) {
    const target = event.target;
    if(target.classList.contains('ru')){
        for(let elem of document.querySelectorAll('[data-i18]')){
            let field = elem.getAttribute('data-i18');
            elem.innerHTML = i18Obj.ru[field];
        }
    }
}

// Click winter
const winterBtn = document.querySelector('.winter-btn');
const portfolioImg = document.querySelectorAll('.portfolio-img');

function handler () {
    winterBtn.classList.add('active');
    portfolioImg.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);
}
winterBtn.addEventListener('click', handler);

//Click soring 
const springBtn = document.querySelector('.spring-btn');

function handler1 () {
    portfolioImg.forEach((img, index) => img.src = `./assets/img/spring/${index + 1}.jpg`);
}
springBtn.addEventListener('click', handler1);

// Click summer
const summerBtn = document.querySelector('.summer-btn');

function handler2 () {
    portfolioImg.forEach((img, index) => img.src = `./assets/img/summer/${index + 1}.jpg`);
}
summerBtn.addEventListener('click', handler2);


// Click autumn
const autumnBtn = document.querySelector('.autumn-btn');
autumnBtn.addEventListener('click', handler3);

function handler3 () {
    portfolioImg.forEach((img, index) => img.src = `./assets/img/autumn/${index + 1}.jpg`)
}

autumnBtn.addEventListener('click', handler3);




// Active buttons

const findBtns = document.querySelectorAll('.portfolio-btn');
findBtns.forEach((element) => element.addEventListener('click', changeBtn));

function changeBtn (event) {
    const target = event.target;
    if(target.classList.contains('portfolio-btn')){
        findBtns.forEach((element) => element.classList.remove('active'));
        target.classList.add('active');
    }
}


// White background 

const findSunBtn = document.querySelector('.sun');
findSunBtn.addEventListener('click', changeBackground);

function changeBackground () {
    const findContainer = document.querySelectorAll('.container');
    findContainer.forEach((elem) => elem.classList.toggle('white'));

    const findTitleBg = document.querySelectorAll('.title-bg');
    findTitleBg.forEach((elem) => elem.classList.toggle('white'));

    const findSectionTitle = document.querySelectorAll('.section-title');
    findSectionTitle.forEach((elem) => elem.classList.toggle('color-title'));

    const findSkilsItemTitle = document.querySelectorAll('.item-title');
    findSkilsItemTitle.forEach((elem) => elem.classList.toggle('sun-color'));

    const findSkilsItemSubitle = document.querySelectorAll('.item-subtitle');
    findSkilsItemSubitle.forEach((elem) => elem.classList.toggle('sun-color'));

    const findPornfolioTitle = document.querySelectorAll('.portfolio-btn');
    findPornfolioTitle.forEach((elem) => elem.classList.toggle('sun-color'));

    const findPriceItemTitle = document.querySelectorAll('.price-item');
    findPriceItemTitle.forEach((elem) => elem.classList.toggle('sun-color'));

    const findPriceCost = document.querySelectorAll('.cost');
    findPriceCost.forEach((elem) => elem.classList.toggle('sun-color'));

    const findHideMenu = document.querySelector('.openMenu');
    findHideMenu.classList.toggle('whiteMenu');

    const findHideLink = document.querySelectorAll('.hideLink');
    findHideLink.forEach((elem) => elem.classList.toggle('whiteLink'));

    const findHideIcon = document.querySelector('.closeIcon');
    findHideIcon.classList.toggle('whiteIcon');
}



console.log(`
Самооценка задания:
1.Смена изображений в секции portfolio +25.
2.Перевод страницы на два языка +25.
3.Переключение светлой и тёмной темы +25.

Общая оценка 75/75;
Спасибо за качественную проверку =);
`);