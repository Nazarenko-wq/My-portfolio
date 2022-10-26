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

;(function(){
    let users = [
        {   
            'point': 'test-card1',
            'avatar': '../../assets/icons/avatar.svg',
            'user': 'Michael John',
            'location': 'Local Austria',
            'data': 'Today',
            'discription': `The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
                            The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.`
        },
        {   
            'point': 'test-card2',
            'avatar': '../../assets/icons/avatar5.svg',
            'user': 'Oska Samborska',
            'location': 'Local Austria',
            'data': 'Yesterday',
            'discription': `Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.
                            The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.`
        },
        {   
            'point': 'test-card3',
            'avatar': '../../assets/icons/avatar2.svg',
            'user': 'Oskar Samborsky',
            'location': 'Local Austria',
            'data': 'Yesterday',
            'discription': `Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. 
                            The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
                            The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.`
        },
        {
            'point': 'test-card4',
            'avatar': '../../assets/icons/avatar3.svg',
            'user': 'Fredericka Michelin',
            'location': 'Local Austria',
            'data': 'Yesterday',
            'discription': `The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
                            The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.
                            The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.`
        },
        {
            'point': 'test-card5',
            'avatar': '../../assets/icons/avatar4.svg',
            'user': 'Mila Riksha',
            'location': 'Local Austria',
            'data': 'Yesterday',
            'discription': `My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.
                            The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.`
        },
        {   
            'point': 'test-card6',
            'avatar': '../../assets/icons/avatar.svg',
            'user': 'Michael John',
            'location': 'Local Austria',
            'data': 'Today',
            'discription': `The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
                            The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.`
        },
        {   
            'point': 'test-card7',
            'avatar': '../../assets/icons/avatar5.svg',
            'user': 'Oska Samborska',
            'location': 'Local Austria',
            'data': 'Yesterday',
            'discription': `Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.
                            The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.`
        },
        {   
            'point': 'test-card8',
            'avatar': '../../assets/icons/avatar2.svg',
            'user': 'Oskar Samborsky',
            'location': 'Local Austria',
            'data': 'Yesterday',
            'discription': `Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. 
                            The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
                            The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.`
        },
        {
            'point': 'test-card9',
            'avatar': '../../assets/icons/avatar3.svg',
            'user': 'Fredericka Michelin',
            'location': 'Local Austria',
            'data': 'Yesterday',
            'discription': `The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
                            The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.
                            The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.`
        },
        {
            'point': 'test-card10',
            'avatar': '../../assets/icons/avatar4.svg',
            'user': 'Mila Riksha',
            'location': 'Local Austria',
            'data': 'Yesterday',
            'discription': `My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.
                            The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.`
        },
        {
            'point': 'test-card11',
            'avatar': '../../assets/icons/avatar4.svg',
            'user': 'Mila Riksha',
            'location': 'Local Austria',
            'data': 'Yesterday',
            'discription': `My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.
                            The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.`
        }
    ];
    
    let scope = document.querySelector('.popup-scope');
    let cards = document.querySelectorAll('.wrapper-card');

    // Variables for pop-up card
    let avatar = document.querySelector('.avatar-pop');
    let user = document.querySelector('.user-pop');
    let location = document.querySelector('.location-pop');
    let data = document.querySelector('.data-pop');
    let discription = document.querySelector('.discription-pop');

    for(let card of cards) {
        card.addEventListener('click', function (e) {
            for(let elem of users) {
                if(this.classList.contains(elem.point)) {
                    avatar.src = elem.avatar;
                    user.innerHTML = elem.user;
                    location.innerHTML = elem.location;
                    data.innerHTML = elem.data;
                    discription.innerHTML = elem.discription;
                }
            }
            
            scope.style.display = 'flex';
        })
    }

    scope.addEventListener('click', function () {
        this.style.display = 'none';
    })
})()

// Active range
;(function(){
    let input = document.querySelector('input[type=range]');

    function rangeValue () {
        let newValue = input.value;
        let target = document.querySelector('.testimonials-cards')
        // let target2 = document.querySelector('.value');
        // target2.innerHTML = newValue;


        if(newValue == 0) {
            target.style.left = '0px';
        }
        
        if(newValue == 1) {
            target.style.left = '-297px';
        }

        if(newValue == 2) {
            target.style.left = '-594px';
        }

        if(newValue == 3) {
            target.style.left = '-891px';
        }

        if(newValue == 4) {
            target.style.left = '-1188px';
        }

        if(newValue == 5) {
            target.style.left = '-1485px';
        }

        if(newValue == 6) {
            target.style.left = '-1782px';
        }

        if(newValue == 7) {
            target.style.left = '-2079px';
        }

        // For max-width 1000px
        const mediaQuery = window.matchMedia('(max-width: 1599px)');
        
        if(mediaQuery.matches && newValue == 0) {
            target.style.left = '0px';
        }
        if(mediaQuery.matches && newValue == 1) {
            target.style.left = '-322px';
        }
        if(mediaQuery.matches && newValue == 2) {
            target.style.left = '-644px';
        }
        if(mediaQuery.matches && newValue == 3) {
            target.style.left = '-966px';
        }
        if(mediaQuery.matches && newValue == 4) {
            target.style.left = '-1288px';
        }
        if(mediaQuery.matches && newValue == 5) {
            target.style.left = '-1610px';
        }
        if(mediaQuery.matches && newValue == 6) {
            target.style.left = '-1932px';
        }
        if(mediaQuery.matches && newValue == 7) {
            target.style.left = '-2254px';
        }
        
    }

    input.addEventListener('input', rangeValue);
})()

;(function(){
    // Random cards
    let list = [
        {
            'card-img': '../../assets/images/foto3.png',
            'card-type': 'Gorillas',
            'card-dicription': 'Native to Congo',
            'banana': '../../assets/icons/banana.svg',
            'bambooStick': '../../assets/icons/bambooStick.svg'
        },
        {
            'card-img': '../../assets/images/foto2.png',
            'card-type': 'Eagles',
            'card-dicription': 'Native to South America',
            'steak': '../../assets/icons/steak.svg',
            'fish': '../../assets/icons/fish.svg'
        },
        {
            'card-img': '../../assets/images/foto1.png',
            'card-type': 'giant Pandas',
            'card-dicription': 'Native to Southwest China',
            'banana': '../../assets/icons/banana.svg',
            'bambooStick': '../../assets/icons/bambooStick.svg'
        },
        {
            'card-img': '../../assets/images/foto7.png',
            'card-type': 'Aligators',
            'card-dicription': 'Native to Southeastern U.S.',
            'steak': '../../assets/icons/steak.svg',
            'fish': '../../assets/icons/fish.svg'
        },
        {
            'card-img': '../../assets/images/foto4.png',
            'card-type': 'Two-toed Sloth',
            'card-dicription': 'Mesoamerica, South America',
            'banana': '../../assets/icons/banana.svg',
            'bambooStick': '../../assets/icons/bambooStick.svg'
        },
        {
            'card-img': '../../assets/images/foto5.png',
            'card-type': 'Cheetahs',
            'card-dicription': 'Native to Africa',
            'steak': '../../assets/icons/steak.svg',
            'fish': '../../assets/icons/fish.svg'
        },
        {
            'card-img': '../../assets/images/foto6.png',
            'card-type': 'Penguins',
            'card-dicription': 'Native to Antarctica',
            'steak': '../../assets/icons/steak.svg',
            'fish': '../../assets/icons/fish.svg'
        }
    ];

    // let cards = document.querySelectorAll('.card');
    // console.log(cards);

    // function random () {
    //     let count = 0;

    //     for(let card of cards) {
    //         for(let elem of list) {
    //             card.children[0].firstElementChild.src = elem["card-img"];
    //             card.children[1].firstElementChild.firstElementChild.textContent = elem["card-type"];
    //             card.children[1].firstElementChild.lastElementChild.textContent = elem["card-dicription"];
    //             card.children[1].children[1].firstElementChild.src = elem.steak;
    //             card.children[1].children[1].lastElementChild.src = elem.fish;
    //         }
    //     }
    // }

    // active arrows
    let left = document.querySelector('.left-arrow');
    let right = document.querySelector('.right-arrow');
    let left2 = document.querySelector('.left-arrow2');
    let right2 = document.querySelector('.right-arrow2');
    let wrapper = document.querySelector('.wrapper-cards1');
    let wrapper2 = document.querySelector('.wrapper-cards2');

    const mediaQuery = window.matchMedia('(max-width: 1599px)');
    const mediaQuery2 = window.matchMedia('(max-width: 999px)');

    let num = 1;
    let arr = [0, 1, 3];

    function condition (digit) {
        if(digit == 0) {
            return wrapper.style.left = '0px'; 
        } else if (digit == 1) {
            return wrapper.style.left = '-1189px'; 
        } else {
            return wrapper.style.left = '-2378px';
        }
    }

    function condition2 (digit) {
        if(digit == 0) {
            return wrapper2.style.left = '0px'; 
        } else if (digit == 1) {
            return wrapper2.style.left = '-1189px'; 
        } else {
            return wrapper2.style.left = '-2378px';
        }
    }

    function condition3 (digit) {
        if(digit == 0) {
            return wrapper.style.left = '0px'; 
        } else if (digit == 1) {
            return wrapper.style.left = '-971px'; 
        } else if(digit == 2) {
            return wrapper.style.left = '-1944px';
        }
    }

    function condition4 (digit) {
        if(digit == 0) {
            return wrapper2.style.left = '0px'; 
        }
        if (digit == 1) {
            return wrapper2.style.left = '-971px'; 
        }
        if(digit == 2) {
            return wrapper2.style.left = '-1944px';
        } 
    }

    function condition5 (digit) {
        if(digit == 0) {
            return wrapper.style.left = '173px';
        }

        if(digit == 1) {
            return wrapper.style.left = '-460px';
        }

        if(digit == 2) {
            return wrapper.style.left = '-1095px';
        }
    }

    function condition6 (digit) {
        if(digit == 0) {
            return wrapper2.style.left = '173px';
        }

        if(digit == 1) {
            return wrapper2.style.left = '-460px';
        }

        if(digit == 2) {
            return wrapper2.style.left = '-1095px';
        }
    }

    function next () {

        num++;
        if(num > arr.length - 1) {
            num = arr[0];
        }
        condition(num);
        condition2(num);
    }

    function prev () {

        num--;
        if(num < 0) {
            num = arr.length - 1;
        }
        
        condition(num);
        condition2(num);

    }

    function next2 () {

        num++;
        if(num > arr.length - 1) {
            num = arr[0];
        }

        if(mediaQuery2.matches) {
            condition5(num);
            condition6(num);
        } else {
            condition3(num);
            condition4(num);
        }
    }

    function prev2 () {

        num--;
        if(num < 0) {
            num = arr.length - 1;
        }
        
        if(mediaQuery2.matches) {
            condition5(num);
            condition6(num);
        } else {
            condition3(num);
            condition4(num);
        }
    }

    left.addEventListener('click', prev);
    right.addEventListener('click', next);
    left2.addEventListener('click', prev2);
    right2.addEventListener('click', next2);
   

})()


// ;(function(){
//     let footerUl = document.querySelector('.footer-ul');
//     let lis = footerUl.querySelectorAll('li');
//     const mediaQuery = window.matchMedia('(max-width: 999px)');

//     if (mediaQuery.matches) {
//         lis.forEach(elem => elem.textContent = '');
//     }
// })();